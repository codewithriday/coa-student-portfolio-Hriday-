import type { Metadata, Viewport } from 'next';
import './globals.css';
import { studentConfig } from '../data/studentConfig';

export const metadata: Metadata = {
  title: "Hriday Kataria | CSE AI Student | COA Portfolio",
  description: "Official student portfolio of Hriday Kataria, CSE – Artificial Intelligence (Microsoft) student at Chandigarh University, featuring a COA number system converter, academic interests, achievements, certificates and learning resources.",
  keywords: [
    "Hriday Kataria",
    "25BAI10046",
    "CSE AI Microsoft",
    "Chandigarh University",
    "Computer Organization & Architecture",
    "COA",
    "Number System Converter",
    "Binary Arithmetic",
    "Logic Gates",
    "CPU Architecture",
    "Student Portfolio"
  ],
  authors: [{ name: "Hriday Kataria" }],
  creator: "Hriday Kataria",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hriday-coa-portfolio.vercel.app',
    title: "Hriday Kataria | CSE AI Student | COA Portfolio",
    description: "Official student portfolio of Hriday Kataria, CSE – Artificial Intelligence (Microsoft) student at Chandigarh University, featuring a COA number system converter, academic interests, achievements, certificates and learning resources.",
    siteName: "Hriday Kataria Portfolio",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hriday Kataria | CSE AI Student | COA Portfolio",
    description: "Official student portfolio of Hriday Kataria, CSE – Artificial Intelligence (Microsoft) student at Chandigarh University.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0B0F19',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
