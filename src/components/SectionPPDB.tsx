'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/images/bg-1.jpg',
  '/images/bg-2.jpg',
  '/images/bg-3.jpg',
];

export default function SectionPPDB() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // ganti tiap 5 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Background Images (dengan transisi) */}
      <div className="absolute inset-0 z-0">
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Guru ${i + 1}`}
            fill
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              i === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* Overlay hitam semi transparan */}
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>

      {/* Konten PPDB */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center text-white max-w-2xl px-6 py-8 bg-white/10 backdrop-blur-lg backdrop-saturate-150 rounded-xl shadow-xl border border-white/20">
          <h2 className="text-4xl font-bold mb-4 text-black">Informasi PPDB 2025</h2>
          <p className="mb-6 leading-relaxed">
            Penerimaan Peserta Didik Baru telah dibuka! Bergabunglah bersama kami di
            <br />
            <strong>SD Cahaya Harapan Bekasi</strong> — sekolah Katolik yang mengintegrasikan iman, ilmu, dan karakter dalam kurikulum modern.
          </p>
          <a
            href="#form-ppdb"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
