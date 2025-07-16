import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const useCookies = await cookies()

  useCookies.delete("user")

  return NextResponse.json({ success: true })
}
