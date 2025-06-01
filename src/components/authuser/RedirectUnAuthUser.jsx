"use client";

import { useAuth } from "@/context/AuthContext";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function RedirectUnAuthUser() {
  const { user } = useAuth();
  const token = Cookies.get("token");
  const router = useRouter();

  useEffect(() => {
    if (!user && !token) {
      return router.replace("/login");
    } else if (user && !user.isEmailVerified) {
      return router.replace("/auth/emailverify");
    }
  }, []);
  
  return <></>;
}

export default RedirectUnAuthUser;
