import "./globals.css";
import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const inter = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} sm:max-w-[1440px] mx-auto`} >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
