"use client";
import { syncUser } from "@/lib/actions/users";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

const UserSync = () => {
  const { isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    const handleUserSync = async () => {
      if (isLoaded && isSignedIn) {
        try {
          await syncUser();
        } catch (err) {
          console.log("🔴 syncUser error:", err);
        }
      }
    };

    handleUserSync();
  }, [isLoaded, isSignedIn]);

  return null;
};

export default UserSync;
