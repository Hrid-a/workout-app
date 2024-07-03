import type { Metadata } from "next";
import { Manrope, Redacted } from "next/font/google";
import React from "react";
import {
  ClerkProvider,
} from '@clerk/nextjs'

import "./globals.css";
const primaryFont = Manrope({ subsets: ["latin"] });

const loadingFont = Redacted({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Workout ",
  description:
    "Workout app for tracking your progress, get a workout plan and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const styles = {
    "--font-family-primary": primaryFont.style.fontFamily,
    "--font-family-loading": loadingFont.style.fontFamily,
  } as React.CSSProperties;
  return (
    <ClerkProvider>
    <html lang="en" style={styles}>
      <body>{children}</body>
    </html>
    </ClerkProvider>
  );
}
