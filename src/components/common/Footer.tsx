'use client';

import Image from 'next/image';
import { Facebook, Instagram, Mail, MapPin, Phone, Send, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-12 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Deskripsi */}
        <div>
          <div className="flex items-center space-x-4 mb-4">
            <Image src="/images/logo.png" alt="Logo Sekolah" width={50} height={50} />
            <div>
              <h4 className="text-xl font-bold">SD Cahaya Harapan Bekasi</h4>
            </div>
          </div>
        </div>

        {/* Navigasi */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navigasi Cepat</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="/" className="hover:underline">Beranda</a></li>
            <li><a href="/akademik" className="hover:underline">Akademik</a></li>
            <li><a href="/ekstrakurikuler" className="hover:underline">Ekstrakurikuler</a></li>
            <li><a href="/kontak" className="hover:underline">Kontak</a></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
          <ul className="space-y-3 text-sm text-gray-200">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1" />
              <span>
                Jl. Komp. Boulevard No.17131, Pejuang, Medan Satria, Kota Bekasi, Jawa Barat 17131
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(021) 1234 5678</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@cahayaharapan.sch.id</span>
            </li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
          <div className="flex space-x-4 text-white">
            <a href="https://instagram.com/cahayaharapan.sd" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-pink-400 transition" />
            </a>
            <a href="https://facebook.com/cahayaharapan.sd" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 hover:text-blue-400 transition" />
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
              <Send className="w-5 h-5 hover:text-green-400 transition" />
            </a>
            <a href="https://youtube.com/@cahayaharapan" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-5 h-5 hover:text-red-500 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bawah */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/60">
        &copy; {new Date().getFullYear()} SD Cahaya Harapan Bekasi. Seluruh hak cipta dilindungi.
      </div>
    </footer>
  );
}
