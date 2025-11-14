"use client";
import {
  SignedIn,
  SignedOut,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <SignedOut>
        <SignUpButton mode="modal">Sign Up</SignUpButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton>LogOut</SignOutButton>
      </SignedIn>
    </div>
  );
}
