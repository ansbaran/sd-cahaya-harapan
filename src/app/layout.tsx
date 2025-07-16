// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'SD Cahaya Harapan Bekasi',
  description: 'Website Resmi SD Cahaya Harapan Bekasi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="font-sans bg-gray-50 text-gray-800">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
