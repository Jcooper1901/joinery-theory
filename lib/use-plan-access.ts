"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

type ProfileData = {
  role?: string;
  pro?: boolean;
};

export function usePlanAccess() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isPro, setIsPro] = useState(false);
  const [planReady, setPlanReady] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (nextUser) => {
      setIsSignedIn(Boolean(nextUser));

      if (!nextUser) {
        setIsPro(false);
        setPlanReady(true);
        return;
      }

      try {
        const profileRef = doc(db, "users", nextUser.uid);
        const snapshot = await getDoc(profileRef);
        const profile = snapshot.exists() ? (snapshot.data() as ProfileData) : null;
        setIsPro(Boolean(profile?.pro || profile?.role === "pro"));
      } catch (error) {
        console.error("Unable to load plan access", error);
        setIsPro(false);
      } finally {
        setPlanReady(true);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    isSignedIn,
    isPro,
    planReady,
  };
}
