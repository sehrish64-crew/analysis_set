import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Vehicle Health Analysis | Vehicle Digital PDF Report & Trusted Information Services',
    template: '%s | Vehicle Health Analysis',
  },
  description:
    'Get comprehensive vehicle digital PDF reports with VIN lookup, license plate search, and vehicle data services across the United Kingdom. Access ownership records, title records, accident records, mileage records, and more.',
  keywords: [
    'Vehicle Digital PDF Report',
    'VIN Lookup',
    'License Plate Lookup',
    'Vehicle Specifications',
    'Ownership Records',
    'Title Records',
    'Accident Records',
    'Recall Information',
    'Mileage Records',
    'Market Value',
    'Vehicle Data',
    'Automotive Information',
    'Car Records',
    'Digital Report',
    'PDF Report',
  ],
  authors: [{ name: 'Vehicle Health Analysis' }],
  creator: 'Vehicle Health Analysis',
  publisher: 'Vehicle Health Analysis',
  openGraph: {
    title: 'Vehicle Health Analysis | Vehicle Digital PDF Report & Trusted Information Services',
    description:
      'Get comprehensive vehicle digital PDF reports with VIN lookup, license plate search, and vehicle data services across the United Kingdom.',
    url: 'https://trueanalyzers.com',
    siteName: 'Vehicle Health Analysis',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vehicle Health Analysis | Vehicle Digital PDF Report & Trusted Information Services',
    description:
      'Get comprehensive vehicle digital PDF reports with VIN lookup, license plate search, and vehicle data services across the United Kingdom.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
