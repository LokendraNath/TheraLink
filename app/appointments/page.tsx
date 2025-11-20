/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import BookingConfirmationStep from "@/components/appointments/BookingConfirmationStep";
import DoctorSelectionStep from "@/components/appointments/DoctorSelectionStep";
import DoctorSection from "@/components/appointments/DoctorSelectionStep";
import ProgressSteps from "@/components/appointments/ProgressSteps";
import TimeSelectionStep from "@/components/appointments/TimeSelectionStep";
import Navbar from "@/components/Navbar";
import { useBookAppointment } from "@/hooks/use-appointment";
import { APPOINTMENT_TYPES } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner";

const AppointmentsPage = () => {
  // state management for the booking process - this could be done with something like Zustand for larger app
  const [selectedTherapiestId, setSelectedTherapiestId] = useState<
    string | null
  >(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [currentStep, setCurrentStep] = useState(1); // 1: select Therapist 2: select Time 3: confirm
  const [showConfirmationModle, setShowConfirmationModle] = useState(false);
  const [bookedAppointment, setBookedAppointment] = useState<any>(null);

  const bookAppointmentMutation = useBookAppointment();

  const handleSelectTherapist = (doctorId: string) => {
    setSelectedTherapiestId(doctorId);

    // reset the state when Therapist change
    setSelectedDate("");
    setSelectedTime("");
    setSelectedType("");
  };

  const handleBookAppointment = async () => {
    if (!selectedTherapiestId || !selectedDate || !selectedTime) {
      toast.error("Please fill in all required fields");
      return;
    }

    const appointmentType = APPOINTMENT_TYPES.find(
      (t) => t.id === selectedType
    );

    bookAppointmentMutation.mutate(
      {
        doctorId: selectedTherapiestId,
        date: selectedDate,
        time: selectedTime,
        reason: appointmentType?.name,
      },
      {
        onSuccess: async (appointment) => {
          // store the appointment details to show the modle
          setBookedAppointment(appointment);

          // todo => Send email using resend

          // show the success modle
          setShowConfirmationModle(true);

          // reset form
          setSelectedTherapiestId(null);
          setSelectedDate("");
          setSelectedTime("");
          setSelectedType("");
          setCurrentStep(1);
        },
        onError: (error) =>
          toast.error(`Failed to book appointment: ${error.message}`),
      }
    );
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Book An Appointment</h1>
          <p className="text-muted-foreground">
            Find and book with verified dentists in your area
          </p>
        </div>

        <ProgressSteps currentStep={currentStep} />

        {currentStep === 1 && (
          <DoctorSelectionStep
            selectedTherapiestId={selectedTherapiestId}
            onContinue={() => setCurrentStep(2)}
            onSelectTherapist={handleSelectTherapist}
          />
        )}

        {currentStep === 2 && selectedTherapiestId && (
          <TimeSelectionStep
            selectedTherapiestId={selectedTherapiestId}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            selectedType={selectedType}
            onBack={() => setCurrentStep(1)}
            onContinue={() => setCurrentStep(3)}
            onDateChange={setSelectedDate}
            onTimeChange={setSelectedTime}
            onTypeChange={setSelectedType}
          />
        )}

        {currentStep === 3 && selectedTherapiestId && (
          <BookingConfirmationStep
            selectedTherapiestId={selectedTherapiestId}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            selectedType={selectedType}
            isBooking={bookAppointmentMutation.isPending}
            onBack={() => setCurrentStep(2)}
            onModify={() => setCurrentStep(2)}
            onConfirm={handleBookAppointment}
          />
        )}
      </div>
    </>
  );
};
export default AppointmentsPage;
