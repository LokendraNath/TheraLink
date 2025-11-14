import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: side-effect import of CSS without type declarations
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TheraLink - Your Personal AI Therapy Assistant",
  description:
    "TheraLink is your compassionate AI therapy assistant, available 24/7. Manage your mental wellness with personalized conversations, mood tracking, and easy booking for professional therapy sessions—all in one private, secure space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
