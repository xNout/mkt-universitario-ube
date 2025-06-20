"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";

// Página inicial que redirige según el estado de autenticación
export default function Index() {
  const token = useAppSelector((state) => state.auth.token);
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.replace('/home')
    } else {
      router.replace('/login')
    }
  }, [token, router]);

  return null;
}
