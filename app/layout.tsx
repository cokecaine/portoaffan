import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Affan Ilham Arsyilla - Data Enthusiast & Analytics Professional",
  description:
    "Portfolio of Affan Ilham Arsyilla, a data enthusiast and analytics professional from Universitas Muhammadiyah Surakarta. Specializing in data analysis, machine learning, and business intelligence. Converting raw data into actionable insights.",
  keywords: [
    "Affan Ilham Arsyilla",
    "data analyst",
    "data enthusiast",
    "machine learning",
    "analytics",
    "Python",
    "SQL",
    "Tableau",
    "business intelligence",
    "Universitas Muhammadiyah Surakarta",
  ],
  authors: [{ name: "Affan Ilham Arsyilla" }],
  creator: "Affan Ilham Arsyilla",
  openGraph: {
    type: "website",
    url: "https://affan-ilham.com",
    title: "Affan Ilham Arsyilla - Data Enthusiast & Analytics Professional",
    description:
      "Portfolio of Affan Ilham Arsyilla from Universitas Muhammadiyah Surakarta. Data enthusiast specializing in analytics, machine learning, and business intelligence.",
    siteName: "Affan Ilham Arsyilla Portfolio",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affan Ilham Arsyilla - Data Enthusiast & Analytics Professional",
    description:
      "Converting raw data into actionable insights. Data analyst specializing in Python, SQL, Tableau, and machine learning.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://affan-ilham.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Affan Ilham Arsyilla",
    url: "https://affan-ilham.com",
    jobTitle: "Data Analyst & Data Enthusiast",
    description:
      "Data enthusiast specializing in analytics, machine learning, and business intelligence",
    knowsAbout: [
      "Data Analysis",
      "Machine Learning",
      "Python",
      "SQL",
      "Tableau",
      "Business Intelligence",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Universitas Muhammadiyah Surakarta",
      location: "Surakarta, Indonesia",
    },
    sameAs: [
      "https://www.linkedin.com/in/affanilhamarsyila",
      "https://github.com/cokecaine",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col text-zinc-900 dark:text-white bg-white dark:bg-black">
        <Header />
        {children}
      </body>
    </html>
  );
}
