"use server";

import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "../prisma";
import { Prisma } from "@prisma/client";

export async function syncUser() {
  let user;
  try {
    user = await currentUser();
    if (!user) return null;

    const email = user.emailAddresses[0].emailAddress;
    if (!email) {
      console.log("NO Email found for User", user.id);
      return null;
    }

    // Check From Clerk
    const existingUserByClerkId = await prisma.user.findUnique({
      where: { clerkId: user.id },
    });

    if (existingUserByClerkId) {
      return await prisma.user.update({
        where: { clerkId: user.id },
        data: {
          firstName: user.firstName,
          lastName: user.lastName,
          email,
          phone: user.phoneNumbers?.[0]?.phoneNumber,
        },
      });
    }

    // Check By email
    const existingByEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (existingByEmail) {
      // Email exist करता है दूसरे clerkId से
      // ClerkId update कर दें (user ने दूसरे method से login किया होगा)
      console.log(`Updating clerkId for existing email: ${email}`);
      return await prisma.user.update({
        where: { email },
        data: {
          clerkId: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          phone: user.phoneNumbers?.[0]?.phoneNumber,
        },
      });
    }

    return await prisma.user.create({
      data: {
        clerkId: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email,
        phone: user.phoneNumbers[0]?.phoneNumber,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        console.error("Unique constraint failed:", error.meta);
        // Fallback: existing user return करें
        const email = user?.emailAddresses?.[0]?.emailAddress;
        if (email) {
          return await prisma.user.findUnique({ where: { email } });
        }
      }
    }
    console.error("Error in syncUser server action", error);
    throw error;
  }
}
