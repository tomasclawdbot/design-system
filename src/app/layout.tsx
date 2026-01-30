import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata following raphaelsalaja's open knowledge principle
// - Clear, descriptive, accessible
export const metadata: Metadata = {
  title: "Design System | Built with Intention",
  description: "A design system inspired by 7 thinkers. Creates software as art, but never at the expense of function. Open source, documented, yours to modify.",
  openGraph: {
    title: "Design System",
    description: "Built with intention by Tomas",
    type: "website",
  },
};

// Static for performance (vercel-labs/next-skills)
export const dynamic = "force-static";
export const revalidate = 60; // Revalidate every 60 seconds

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
