"use server";

import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "../prisma";

export async function syncUser() {
  try {
    const user = await currentUser();
    if (!user) return;

    const email = user.emailAddresses?.[0]?.emailAddress ?? null;
    const phone = user.phoneNumbers?.[0]?.phoneNumber ?? null;

    if (!email) {
      console.log(
        "syncUser: clerk user has no email, aborting create -",
        user.id
      );
      return null;
    }

    const dbUser = await prisma.user.upsert({
      where: { clerkId: user.id },
      update: {
        firstName: user.firstName ?? undefined,
        lastName: user.lastName ?? undefined,
        email: email ?? undefined,
        phone: phone ?? undefined,
      },
      create: {
        clerkId: user.id,
        firstName: user.firstName ?? undefined,
        lastName: user.lastName ?? undefined,
        email,
        phone,
      },
    });

    return dbUser;
  } catch (error) {
    console.log("Error in syncUser server Action", error);
    throw error;
  }
}
