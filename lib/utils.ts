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
