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
    if (!token && !user) {
      return router.replace("/login");
    } else if (user && user.isEmailVerified == 0) {
      return router.replace("/auth/emailverify");
    }
  }, [user]);

  return <></>;
}

export default RedirectUnAuthUser;
