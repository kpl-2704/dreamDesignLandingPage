import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Toaster } from "@/components/ui/toaster";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geistSans = localFont({
  src: "./fonts/GeistVF.woff2", // relative to app/layout.tsx
  variable: "--font-geist-sans",
  weight: "100 900", // range if variable font
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dream Design 3D - Construction & Architecture Services",
  description:
    "Professional 2D/3D planning, interior design, layout design, and construction services with materials. Contact Bhavesh Ingle for your dream project.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <ThemeProvider defaultTheme="dark" storageKey="dream-design-theme">
          <ThemeToggle />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
