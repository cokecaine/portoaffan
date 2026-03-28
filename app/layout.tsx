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

export const metadata: Metadata = {
  title: "Affan Ilham - Data Enthusiast & Analytics Professional",
  description: "Portfolio of Affan Ilham, a data enthusiast specializing in analytics, machine learning, and business intelligence. Converting raw data into actionable insights.",
  keywords: ["data analyst", "machine learning", "analytics", "Python", "SQL", "Tableau"],
  authors: [{ name: "Affan Ilham" }],
  openGraph: {
    type: "website",
    url: "https://affan-ilham.com",
    title: "Affan Ilham - Data Enthusiast & Analytics Professional",
    description: "Portfolio of Affan Ilham, a data enthusiast specializing in analytics, machine learning, and business intelligence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col text-zinc-900 dark:text-white bg-white dark:bg-black">{children}</body>
    </html>
  );
}
