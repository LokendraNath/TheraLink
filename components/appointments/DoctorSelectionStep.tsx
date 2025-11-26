import { useAvailbleDoctors } from "@/hooks/use-doctors";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  MapPinIcon,
  PhoneIcon,
  StarIcon,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { DoctorCardsLoading } from "./DoctorCardsLoading";
import { Button } from "../ui/button";

interface DoctorSelectionStepProps {
  selectedTherapiestId: string | null;
  onSelectTherapist: (doctorId: string) => void;
  onContinue: () => void;
}

const DoctorSelectionStep = ({
  selectedTherapiestId,
  onContinue,
  onSelectTherapist,
}: DoctorSelectionStepProps) => {
  const { data: therapists = [], isLoading } = useAvailbleDoctors();

  if (isLoading)
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Choose Your Dentist</h2>
        <DoctorCardsLoading />
      </div>
    );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Choose Your Dentist</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {therapists.map((therapist) => (
          <Card
            key={therapist.id}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedTherapiestId === therapist.id ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => onSelectTherapist(therapist.id)}
          >
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <Image
                  src={therapist.imageUrl!}
                  alt={therapist.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <CardTitle className="text-lg">{therapist.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {therapist.specialty || "General Dentistry"}
                  </CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium">5</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({therapist.appointmentCount} appointments)
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPinIcon className="w-4 h-4" />
                <span>TheraLink</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <PhoneIcon className="w-4 h-4" />
                <span>{therapist.phone}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {therapist.bio ||
                  "Experienced mental professional providing quality care."}
              </p>
              <Badge variant="secondary">Licensed Professional</Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedTherapiestId && (
        <div className="flex justify-end">
          <Button className="group gap-2 items-center" onClick={onContinue}>
            Select Time{" "}
            <ChevronRight className="w-10 h-10 transform translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2" />
          </Button>
        </div>
      )}
    </div>
  );
};
export default DoctorSelectionStep;
