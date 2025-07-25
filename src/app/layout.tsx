import { Montserrat, Inter, Noto_Sans_TC } from "next/font/google"
import type { Metadata } from "next";
import "./globals.css";
import { MenuProvider } from "./contexts/menu-context";
import { ToastContainer } from 'react-toastify';
import { Header } from "./(components)/(header)/header";
import { HeaderInfoProduct } from "./(components)/(header)/header-info-product";

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

          <Header.container fixed={true}>
            <Header.image />
            <Header.content contentType="home" />
          </Header.container>

          <HeaderInfoProduct />

          <main className="bg-main flex-grow">{children}</main>
          <ToastContainer />
        </MenuProvider>
      </body >
    </html >
  );
}
