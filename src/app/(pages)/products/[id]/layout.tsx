import { HeaderReview } from "@/app/(components)/header-review";
import { Montserrat, Inter } from "next/font/google"
import React from "react";

const montserrat = Montserrat({
  weight: ["400", "500", "600"],
  subsets: ["latin"]
})

const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"]
})

export default function LayoutReview({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat} ${inter} antialiased`}>
        <HeaderReview />
        <main className="bg-main  ">{children}</main>
      </body >
    </html >
  )
}
