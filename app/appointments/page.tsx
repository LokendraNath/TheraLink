/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import DoctorSelectionStep from "@/components/appointments/DoctorSelectionStep";
import DoctorSection from "@/components/appointments/DoctorSelectionStep";
import ProgressSteps from "@/components/appointments/ProgressSteps";
import Navbar from "@/components/Navbar";
import { useState } from "react";

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

  const handleSelectTherapist = (doctorId: string) => {
    setSelectedTherapiestId(doctorId);

    // reset the state when Therapist change
    setSelectedDate("");
    setSelectedTime("");
    setSelectedType("");
  };

  const handleBookAppointment = async () => {};

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
      </div>
    </>
  );
};
export default AppointmentsPage;
