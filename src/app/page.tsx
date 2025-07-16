'use client';

import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import KegiatanSection from '@/components/homepage/KegiatanSection';
import AgendaSekolah from '@/components/homepage/AgendaSekolah';
import BukuTamu from '@/components/homepage/BukuTamu';
import dynamic from 'next/dynamic';
import Footer from '@/components/common/Footer';

const TypewriterClient = dynamic(() => import('@/components/TypewriterClient'), {
  ssr: false,
});


export default function Home() {
  const isClient = typeof window !== 'undefined';
  const [currentImage, setCurrentImage] = useState(0);

  const backgroundImages = [
    '/images/bg-1.jpg',
    '/images/bg-2.jpg',
    '/images/bg-3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-24 px-4 text-center overflow-hidden shadow-lg shadow-blue-500/30">
        <div className="max-w-4xl mx-auto z-10 relative">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
  <TypewriterClient />
</h1>

          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-sm">
            Kami adalah sekolah Katolik yang berkomitmen membentuk generasi cerdas, beriman, dan berkarakter.
            Jelajahi situs ini untuk mengetahui lebih banyak tentang program unggulan kami.
          </p>
        </div>
      </section>

      {/* Section PPDB dengan Background Slider */}
      <section className="relative w-full h-[500px] overflow-hidden shadow-inner shadow-blue-300">
        {isClient && (
          <div className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out">
            <Image
              src={backgroundImages[currentImage]}
              alt={`Foto Guru ${currentImage + 1}`}
              fill
              priority
              className="object-cover w-full h-full brightness-50"
            />
          </div>
        )}

        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center text-white max-w-2xl w-full px-6 py-8 bg-black/40 rounded-xl shadow-xl border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Informasi PPDB 2025</h2>
            <p className="text-base sm:text-lg">
              Penerimaan Peserta Didik Baru telah dibuka! Bergabunglah bersama kami di <strong>SD Cahaya Harapan Bekasi</strong> — sekolah Katolik yang mengintegrasikan iman, ilmu, dan karakter dalam kurikulum modern.
            </p>
            <a
              href="/ppdb"
              className="mt-6 inline-block px-6 sm:px-8 py-3 rounded-full text-white font-semibold shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              🎓 Daftar Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Galeri Kegiatan */}
      <KegiatanSection />

      {/* Agenda Sekolah */}
      <AgendaSekolah />

      {/* Buku Tamu */}
      <BukuTamu />
    </div>
  );
}
