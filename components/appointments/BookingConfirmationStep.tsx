import { APPOINTMENT_TYPES } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import DoctorInfo from "./DoctorInfo";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BookingConfirmationStepProps {
  selectedTherapiestId: string;
  selectedDate: string;
  selectedTime: string;
  selectedType: string;
  isBooking: boolean;
  onBack: () => void;
  onConfirm: () => void;
  onModify: () => void;
}

function BookingConfirmationStep({
  selectedTherapiestId,
  selectedDate,
  selectedTime,
  selectedType,
  isBooking,
  onBack,
  onConfirm,
  onModify,
}: BookingConfirmationStepProps) {
  const appointmentType = APPOINTMENT_TYPES.find((t) => t.id === selectedType);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-10">Confirm Your Appointment</h2>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Appointment Sammary</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Doctor Info */}
          <DoctorInfo doctorId={selectedTherapiestId} />

          {/* Appointment Details */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div>
              <p className="text-sm text-muted-foreground">Appointment Type</p>
              <p className="font-medium">{appointmentType?.name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="font-medium">{appointmentType?.duration}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Date</p>
              <p className="font-medium">
                {new Date(selectedDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Time</p>
              <p className="font-medium">{selectedTime}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium">Mental Consulting Center</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Cost</p>
              <p className="font-medium text-primary">
                {appointmentType?.price}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* action buttons */}
      <div className="flex gap-4 items-center justify-between max-w-2xl">
        <Button variant="outline" onClick={onModify} className="group">
          <ChevronLeft className="w-4 h-4 transform translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-2" />
          Modify Appointment
        </Button>
        <Button
          onClick={onConfirm}
          className="bg-primary group"
          disabled={isBooking}
        >
          {isBooking ? "Booking..." : "Confirm Booking"}
          <ChevronRight className="w-4 h-4 transform translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2" />
        </Button>
      </div>
    </div>
  );
}
export default BookingConfirmationStep;
