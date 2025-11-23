import AppointmentConfirmationEmail from "@/components/emails/AppointmentConfirmationEmail";
import resend from "@/lib/resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      userEmail,
      doctorName,
      appointmentType,
      appointmentTime,
      appointmentDate,
      duration,
      price,
    } = body;

    // validate requiest fields
    if (!userEmail || !doctorName || !appointmentDate || !appointmentTime) {
      return NextResponse.json(
        { error: "Missing request feild" },
        { status: 400 }
      );
    }

    // Send the email
    // do not use in production , this is only in testing purpose
    const { data, error } = await resend.emails.send({
      from: "TheraLink <no-reply@resend.dev>",
      to: [userEmail],
      subject: "Appointment Confirmation - TheraLink",
      react: AppointmentConfirmationEmail({
        doctorName,
        appointmentDate,
        appointmentTime,
        appointmentType,
        duration,
        price,
      }),
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json(
        { error: "Failed to send Email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Email send Successfully",
        emailId: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
