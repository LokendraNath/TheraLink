"use server";
import { Gender } from "@prisma/client";
import { prisma } from "../prisma";
import { generateAvatar } from "../utils";
import { revalidatePath } from "next/cache";

export async function getDoctors() {
  try {
    const doctors = await prisma.doctor.findMany({
      include: {
        _count: { select: { appointments: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    return doctors.map((doctor) => ({
      ...doctor,
      appointmentCount: doctor._count.appointments,
    }));
  } catch (error) {
    console.log("Error fetching doctors:", error);
    throw new Error("Failed to fetch Doctors");
  }
}

interface CreateDoctorInput {
  name: string;
  email: string;
  phone: string;
  specialty: string;
  gender: Gender;
  isActive: boolean;
}

export async function createDoctor(input: CreateDoctorInput) {
  try {
    if (!input.name || !input.email)
      throw new Error("Name and Email are Required");

    const doctor = await prisma.doctor.create({
      data: {
        ...input,
        imageUrl: generateAvatar(input.name, input.gender),
      },
    });

    revalidatePath("/admin");

    return doctor;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log("Error creating doctor: ", error);
    // handle unique contraint violation (email alredy exist)
    if (error?.code === "P2002") {
      throw new Error("A doctor with this email alredy exist");
    }

    throw new Error("Failed To create doctor");
  }
}

interface UpdateDoctorInput extends Partial<CreateDoctorInput> {
  id: string;
}

export async function updateDoctor(input: UpdateDoctorInput) {
  try {
    // Validate
    if (!input.name || !input.email)
      throw new Error("Name And Email Are Required");

    const currentDoctor = await prisma.doctor.findUnique({
      where: { id: input.id },
      select: { email: true },
    });

    if (!currentDoctor) throw new Error("Doctor Not Found");

    // If email is changing, check if the new email Already exist
    if (input.email !== currentDoctor.email) {
      const existingDoctorWithEmail = await prisma.doctor.findUnique({
        where: { email: input.email },
      });

      if (existingDoctorWithEmail) {
        throw new Error("A doctor with This email Already Exist");
      }
    }

    const doctor = await prisma.doctor.update({
      where: { id: input.id },

      // ...input is going to trigger the unique constraint violation for email
      data: {
        name: input.name,
        email: input.email,
        phone: input.phone,
        specialty: input.specialty,
        gender: input.gender,
        isActive: input.isActive,
      },
    });
    return doctor;
  } catch (error) {
    console.error("Error updating Doctor", error);
    throw new Error("Failed to Update Doctor");
  }
}
