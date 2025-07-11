"use client"
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {

  return (
    <>{children}</>
  )
}
