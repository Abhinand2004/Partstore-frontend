import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/main-navbar";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Partstore - High Quality Spare Parts",
  description: "Browse and buy high-quality spare parts for all your needs at Partstore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <MainNavbar />
        <main>{children}</main>
      </body>

    </html>
  );
}

