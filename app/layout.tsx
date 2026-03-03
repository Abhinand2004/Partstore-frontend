import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/main-navbar";
import MainFooter from "@/components/main-footer";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://partstore.ae"),
  title: "Partstore - High Quality Spare Parts",
  description: "Browse and buy high-quality spare parts for all your needs at Partstore. Genuine OEM & aftermarket parts with fast UAE delivery.",
  openGraph: {
    title: "Partstore - High Quality Spare Parts",
    description: "Browse and buy high-quality spare parts for all your needs at Partstore.",
    siteName: "Partstore",
    type: "website",
    locale: "en_AE",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "referrer": "strict-origin-when-cross-origin",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-white focus:text-[#5EB59A] focus:rounded-md focus:shadow-xl focus:border-2 focus:border-[#5EB59A] focus:font-medium"
        >
          Skip to content
        </a>
        <MainNavbar />
        <main id="main-content" className="flex-grow outline-none">
          {children}
        </main>
        <MainFooter />
      </body>
    </html>
  );
}

