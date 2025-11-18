import { Gender } from "@prisma/client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { Doctor } from "@prisma/client";
import { useUpdateDoctor } from "@/hooks/use-doctors";
import { formatPhoneNumber } from "@/lib/utils";

interface EditDoctorDialogProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: Doctor | null;
}

const EditDoctorDialog = ({
  isOpen,
  onClose,
  doctor,
}: EditDoctorDialogProps) => {
  const [editingDoctor, setEditingDoctor] = useState<Doctor | null>(doctor);
  const updateDoctorMutation = useUpdateDoctor();

  const handlePhoneChange = (number: string) => {
    const formatedNumber = formatPhoneNumber(number);
    if (editingDoctor) {
      setEditingDoctor({ ...editingDoctor, phone: formatedNumber });
    }
  };

  const handleUpdate = () => {
    if (editingDoctor) {
      updateDoctorMutation.mutate(
        { ...editingDoctor },
        { onSuccess: handleClose }
      );
    }
  };

  const handleClose = () => {
    onClose();
    setEditingDoctor(null);
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[700px]">
        {/* Header */}
        <DialogHeader>
          <DialogTitle>Update Doctor</DialogTitle>
          <DialogDescription>
            Update doctor Information and status.
          </DialogDescription>
        </DialogHeader>

        {editingDoctor && (
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="new-name">Name *</Label>
                <Input
                  id="new-name"
                  value={editingDoctor?.name}
                  onChange={(e) =>
                    setEditingDoctor({ ...editingDoctor, name: e.target.value })
                  }
                  placeholder="Dr. Aayush Mehta"
                />
              </div>
              {/* Specialitys */}
              <div className="space-y-2">
                <Label htmlFor="new-specialty">Specility *</Label>
                <Select
                  value={editingDoctor?.specialty}
                  onValueChange={(value) =>
                    setEditingDoctor({ ...editingDoctor, specialty: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Specility" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Specilitys</SelectLabel>
                      <SelectItem value="clinical-psychologist">
                        Clinical Psychologist
                      </SelectItem>
                      <SelectItem value="psychiatrist">Psychiatrist</SelectItem>
                      <SelectItem value="counseling-psychologist">
                        Counseling Psychologist
                      </SelectItem>
                      <SelectItem value="child-adolescent-psychiatrist">
                        Child & Adolescent Psychiatrist
                      </SelectItem>
                      <SelectItem value="marriage-family-therapist">
                        Marriage & Family Therapist
                      </SelectItem>
                      <SelectItem value="cognitive-behavioral-therapist">
                        Cognitive Behavioral Therapist
                      </SelectItem>
                      <SelectItem value="trauma-therapist">
                        Trauma Therapist
                      </SelectItem>
                      <SelectItem value="addiction-counselor">
                        Addiction Counselor
                      </SelectItem>
                      <SelectItem value="substance-abuse-counselor">
                        Substance Abuse Counselor
                      </SelectItem>
                      <SelectItem value="anxiety-specialist">
                        Anxiety Specialist
                      </SelectItem>
                      <SelectItem value="depression-specialist">
                        Depression Specialist
                      </SelectItem>
                      <SelectItem value="relationship-counselor">
                        Relationship Counselor
                      </SelectItem>
                      <SelectItem value="grief-counselor">
                        Grief Counselor
                      </SelectItem>
                      <SelectItem value="eating-disorder-specialist">
                        Eating Disorder Specialist
                      </SelectItem>
                      <SelectItem value="ocd-specialist">
                        OCD Specialist
                      </SelectItem>
                      <SelectItem value="ptsd-specialist">
                        PTSD Specialist
                      </SelectItem>
                      <SelectItem value="behavioral-therapist">
                        Behavioral Therapist
                      </SelectItem>
                      <SelectItem value="dialectical-behavior-therapist">
                        Dialectical Behavior Therapist
                      </SelectItem>
                      <SelectItem value="geriatric-psychiatrist">
                        Geriatric Psychiatrist
                      </SelectItem>
                      <SelectItem value="child-psychologist">
                        Child Psychologist
                      </SelectItem>
                      <SelectItem value="career-counselor">
                        Career Counselor
                      </SelectItem>
                      <SelectItem value="sleep-therapist">
                        Sleep Therapist
                      </SelectItem>
                      <SelectItem value="art-therapist">
                        Art Therapist
                      </SelectItem>
                      <SelectItem value="music-therapist">
                        Music Therapist
                      </SelectItem>
                      <SelectItem value="play-therapist">
                        Play Therapist
                      </SelectItem>{" "}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="new-email">Email *</Label>
                <Input
                  id="new-email"
                  type="email"
                  value={editingDoctor?.email}
                  onChange={(e) =>
                    setEditingDoctor({
                      ...editingDoctor,
                      email: e.target.value,
                    })
                  }
                  placeholder="doctor@example.com"
                />
              </div>
              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="new-phone">Phone</Label>
                <Input
                  id="new-phone"
                  value={editingDoctor?.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  placeholder="+91 98765 43219"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Gender */}
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select
                  value={editingDoctor?.gender || ""}
                  onValueChange={(value) =>
                    setEditingDoctor({
                      ...editingDoctor,
                      gender: value as Gender,
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="MALE">Male</SelectItem>
                    <SelectItem value="FEMALE">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* Status */}
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={editingDoctor?.isActive ? "active" : "inactive"}
                  onValueChange={(value) =>
                    setEditingDoctor({
                      ...editingDoctor,
                      isActive: value === "active",
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="bg-primary hover:bg-primary/90"
            onClick={handleUpdate}
            disabled={
              !editingDoctor?.name ||
              !editingDoctor?.email ||
              !editingDoctor?.specialty ||
              updateDoctorMutation.isPending
            }
          >
            {updateDoctorMutation.isPending ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              "Update Doctor"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default EditDoctorDialog;
