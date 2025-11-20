import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateAvatar(name: string, gender: "MALE" | "FEMALE") {
  const username = name.replace(/\s+/g, "").toLowerCase();
  const base = "https://avatar.iran.liara.run/public";
  if (gender === "FEMALE") return `${base}/girl?username=${username}`;
  // default to boy
  return `${base}/boy?username=${username}`;
}

export const formatPhoneNumber = (value: string) => {
  if (!value) return "+91 ";

  // Always ensure +91 prefix
  let phone = value;
  if (!phone.startsWith("+91 ")) {
    phone = "+91 " + value;
  }

  // Extract only digits after +91
  const digits = phone.slice(4).replace(/[^\d]/g, "");

  // Limit to 10 digits
  if (digits.length === 0) return "+91 ";
  if (digits.length <= 5) return "+91 " + digits;
  if (digits.length <= 10) {
    return "+91 " + digits.slice(0, 5) + " " + digits.slice(5, 10);
  }

  // If more than 10 digits, truncate
  return "+91 " + digits.slice(0, 5) + " " + digits.slice(5, 10);
};

//  ai generated 🎉
export const getNext5Days = () => {
  const dates = [];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  for (let i = 0; i < 5; i++) {
    const date = new Date(tomorrow);
    date.setDate(date.getDate() + i);
    dates.push(date.toISOString().split("T")[0]);
  }

  return dates;
};

export const getAvailableTimeSlots = () => {
  return [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ];
};

export const APPOINTMENT_TYPES = [
  {
    id: "consultation",
    name: "Wellness Consultation",
    duration: "45 min",
    price: "₹800",
  },
  {
    id: "counseling",
    name: "Professional Counseling",
    duration: "50 min",
    price: "₹1,500",
  },
  {
    id: "coaching",
    name: "Mindfulness Coaching",
    duration: "30 min",
    price: "₹1,000",
  },
  {
    id: "assessment",
    name: "Mental Health Assessment",
    duration: "60 min",
    price: "₹1,200",
  },
];
