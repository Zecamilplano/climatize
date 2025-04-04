import { Montserrat, Inter } from "next/font/google"
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./(components)/(header)/header";
import { MenuProvider } from "./contexts/menu-context";

const montserrat = Montserrat({
  weight: ["400", "500", "600"],
  subsets: ["latin"]
})

const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Climatize",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br">
      <body
        className={`${montserrat} ${inter} antialiased`}
      >
        <MenuProvider>
          <Header />
          <main className="bg-main flex-grow">{children}</main>
        </MenuProvider>
      </body >
    </html >
  );
}
