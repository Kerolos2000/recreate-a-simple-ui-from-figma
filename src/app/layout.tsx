import { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Recreate a simple UI from Figma",
  icons: "/paper.png",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" dir="ltr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
