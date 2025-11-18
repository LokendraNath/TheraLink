"use client";
import AdminState from "@/components/admin/AdminState";
import DoctorManagment from "@/components/admin/DoctorManagment";
import Navbar from "@/components/Navbar";
import { useGetAppointments } from "@/hooks/use-appointment";
import { useGetDoctors } from "@/hooks/use-doctors";
import { useUser } from "@clerk/nextjs";
import { Loader, Loader2, UserRoundCog } from "lucide-react";

const AdminDashboardClient = () => {
  const { user } = useUser();
  const { data: doctors = [], isLoading: doctorsLoading } = useGetDoctors();
  const { data: appointments = [], isLoading: appointmentLoading } =
    useGetAppointments();

  // Calculate state from Real data
  const state = {
    totalDoctor: doctors.length,
    activeDoctors: doctors.filter((doc) => doc.isActive).length,
    totalAppointments: appointments.length,
    completedAppointments: appointments.filter(
      (app) => app.status === "COMPLETED"
    ).length,
  };

  if (doctorsLoading || appointmentLoading) return <LoadingUI />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 pt-28">
        {/* ADMIN WELCOME SECTION */}
        <div className="mb-12 flex items-center justify-between bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 border border-primary/20">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">
                Admin Dashboard
              </span>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Welcome back, {user?.firstName || "Admin"}!
              </h1>
              <p className="text-muted-foreground">
                Manage doctors, oversee appointments, and monitor your Mental
                practice performance.
              </p>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
              <UserRoundCog className="w-16 h-16 text-primary" />
            </div>
          </div>
        </div>

        <AdminState
          totalDoctors={state.totalDoctor}
          activeDoctors={state.activeDoctors}
          totalAppointments={state.totalAppointments}
          completedAppointments={state.completedAppointments}
        />

        <DoctorManagment />
      </div>
    </div>
  );
};
export default AdminDashboardClient;

function LoadingUI() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        <div className="flex items-center justify-center h-96">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="w-20 h-20 animate-spin text-primary" />
            <p className="text-muted-foreground">Loading dashboard...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
