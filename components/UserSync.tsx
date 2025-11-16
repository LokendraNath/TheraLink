"use client";
import { syncUser } from "@/lib/actions/users";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

const UserSync = () => {
  const { isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    console.log("🔵 UserSync useEffect triggered:", { isLoaded, isSignedIn });

    const handleUserSync = async () => {
      if (isLoaded && isSignedIn) {
        console.log("🟢 Calling syncUser...");
        try {
          const res = await syncUser();
          console.log("🟢 syncUser success:", res);
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
