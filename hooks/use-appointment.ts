"use client";

import {
  getAppointments,
  getBookedTimeSlots,
} from "@/lib/actions/appointments";
import { useQuery } from "@tanstack/react-query";

export function useGetAppointments() {
  const result = useQuery({
    queryKey: ["getAppointments"],
    queryFn: getAppointments,
  });
  return result;
}

export function useBookedTimeSlots(doctorId: string, date: string) {
  return useQuery({
    queryKey: ["getBookedTimeSlots"],
    queryFn: () => getBookedTimeSlots(doctorId, date),
    enabled: !!doctorId && !!date, // only run query when both doctorid and date provide
  });
}
