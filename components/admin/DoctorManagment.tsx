"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  EditIcon,
  MailIcon,
  PhoneIcon,
  PlusIcon,
  StethoscopeIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { useGetDoctors } from "@/hooks/use-doctors";
import Image from "next/image";
import { Badge } from "../ui/badge";
import AddDoctorDialog from "./AddDoctorDialog";
import { updateDoctor } from "@/lib/actions/doctors";
import EditDoctorDialog from "./EditDoctorDialog";
import { Doctor } from "@prisma/client";

const DoctorManagment = () => {
  const { data: doctors = [] } = useGetDoctors();

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const handleEditDoctor = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setIsEditDialogOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <>
      <Card className="mb-12">
        {/* Card Header */}
        <CardHeader className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 mb-2">
              <StethoscopeIcon className="size-5 text-primary" />
              Doctors Managment
            </CardTitle>
            <CardDescription>
              Manage And oversee all doctors in your practice
            </CardDescription>
          </div>

          <Button
            onClick={() => setIsAddDialogOpen(true)}
            className="bg-linear-to-r from-primary to-primary/80 hover:from-primary/40 hover:to-primary text-white"
          >
            <PlusIcon className="mr-1 size-4" />
            Add Doctor
          </Button>
        </CardHeader>

        {/* Card Content */}
        <CardContent>
          <div className="space-y-4">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="flex items-center justify-between p-4 bg-muted/30 rounded-xl border border-border/50"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    width={48}
                    height={48}
                    className="size-12 rounded-full object-cover ring-2 ring-background"
                  />

                  <div>
                    <div className="font-semibold">{doctor.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {doctor.specialty}
                      <span className="ml-2 px-2 py-0.5 bg-muted rounded text-xs">
                        {doctor.gender === "MALE" ? "Male" : "Female"}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MailIcon className="h-3 w-3" />
                        {doctor.email}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <PhoneIcon className="h-3 w-3" />
                        {doctor.phone}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-10">
                  {doctor.isActive ? (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Active
                    </Badge>
                  ) : (
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                      Inactive
                    </Badge>
                  )}
                  <div className="text-center">
                    <div className="font-semibold text-primary">
                      {doctor.appointmentCount}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Appointment
                    </div>
                  </div>

                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 px-3"
                    onClick={() => handleEditDoctor(doctor)}
                  >
                    <EditIcon className="size-4 mr-1" />
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <AddDoctorDialog
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
      />
      <EditDoctorDialog
        key={selectedDoctor?.id}
        isOpen={isEditDialogOpen}
        onClose={() => handleCloseEditDialog()}
        doctor={selectedDoctor}
      />
    </>
  );
};
export default DoctorManagment;
