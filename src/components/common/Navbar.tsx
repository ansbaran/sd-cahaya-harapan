'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import {
  Home,
  Info,
  BookOpen,
  Users,
  ClipboardList,
  Mail,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false); // Mobile menu
  const [profilOpen, setProfilOpen] = useState(false);
  const [pendidikOpen, setPendidikOpen] = useState(false);

  // Delay handling
  const profilTimeout = useRef<NodeJS.Timeout | null>(null);
  const pendidikTimeout = useRef<NodeJS.Timeout | null>(null);

  const openProfilWithDelay = () => {
    if (profilTimeout.current) clearTimeout(profilTimeout.current);
    setProfilOpen(true);
  };

  const closeProfilWithDelay = () => {
    profilTimeout.current = setTimeout(() => setProfilOpen(false), 200);
  };

  const openPendidikWithDelay = () => {
    if (pendidikTimeout.current) clearTimeout(pendidikTimeout.current);
    setPendidikOpen(true);
  };

  const closePendidikWithDelay = () => {
    pendidikTimeout.current = setTimeout(() => setPendidikOpen(false), 200);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white text-xl font-bold">
          <Image src="/images/logo.png" alt="Logo" width={36} height={36} />
          SD Cahaya Harapan
        </Link>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span className="text-2xl">&#9776;</span>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            open ? 'block' : 'hidden'
          } md:flex gap-6 text-sm md:items-center text-white absolute md:static w-full md:w-auto px-4 py-4 md:py-0 top-full left-0 transition-all duration-300 bg-blue-700 md:bg-transparent`}
        >
          <Link href="/" className="flex items-center gap-2 hover:text-yellow-300 transition">
            <Home size={18} />
            Beranda
          </Link>

          {/* Dropdown Profil */}
          <div
            className="relative group"
            onMouseEnter={() => !open && openProfilWithDelay()}
            onMouseLeave={() => !open && closeProfilWithDelay()}
          >
            <button
              className="flex items-center gap-2 hover:text-yellow-300 transition w-full"
              onClick={() => {
                if (open) setProfilOpen(!profilOpen);
              }}
            >
              <Info size={18} />
              Profil
              <ChevronDown size={16} />
            </button>

            {profilOpen && (
              <div className="absolute left-0 top-full mt-2 bg-white text-gray-800 rounded shadow-lg w-56 z-50 transition-all duration-300 animate-fadeIn">
                <Link
                  href="/profil/sejarah"
                  onClick={() => {
                    setOpen(false);
                    setProfilOpen(false);
                  }}
                  className="block px-4 py-2 hover:bg-indigo-100 hover:text-indigo-700 transition duration-200"
                >
                  Sejarah Sekolah
                </Link>
                <Link
                  href="/profil/visi-misi"
                  onClick={() => {
                    setOpen(false);
                    setProfilOpen(false);
                  }}
                  className="block px-4 py-2 hover:bg-indigo-100 hover:text-indigo-700 transition duration-200"
                >
                  Visi & Misi
                </Link>
                <Link
                  href="/profil/fasilitas"
                  onClick={() => {
                    setOpen(false);
                    setProfilOpen(false);
                  }}
                  className="block px-4 py-2 hover:bg-indigo-100 hover:text-indigo-700 transition duration-200"
                >
                  Fasilitas Sekolah
                </Link>
                <Link
                  href="/profil/prestasi"
                  onClick={() => {
                    setOpen(false);
                    setProfilOpen(false);
                  }}
                  className="block px-4 py-2 hover:bg-indigo-100 hover:text-indigo-700 transition duration-200"
                >
                  Prestasi Sekolah
                </Link>

                {/* Submenu Tenaga Pendidik */}
                <div
                  className="relative group"
                  onMouseEnter={() => !open && openPendidikWithDelay()}
                  onMouseLeave={() => !open && closePendidikWithDelay()}
                >
                  <button
                    className="w-full flex items-center justify-between px-4 py-2 hover:bg-indigo-100 hover:text-indigo-700 transition duration-200"
                    onClick={() => {
                      if (open) setPendidikOpen(!pendidikOpen);
                    }}
                  >
                    Tenaga Pendidik
                    <ChevronRight size={14} />
                  </button>

                  {pendidikOpen && (
                    <div className="absolute left-full top-0 ml-1 bg-white text-gray-800 rounded shadow-lg w-48 z-50">
                      <Link
                        href="/profil/tenaga-pendidik/guru"
                        onClick={() => {
                          setOpen(false);
                          setProfilOpen(false);
                          setPendidikOpen(false);
                        }}
                        className="block px-4 py-2 hover:bg-indigo-100 hover:text-indigo-700 transition duration-200"
                      >
                        Guru
                      </Link>
                      <Link
                        href="/profil/tenaga-pendidik/staf"
                        onClick={() => {
                          setOpen(false);
                          setProfilOpen(false);
                          setPendidikOpen(false);
                        }}
                        className="block px-4 py-2 hover:bg-indigo-100 hover:text-indigo-700 transition duration-200"
                      >
                        Staf
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <Link href="/akademik" className="flex items-center gap-2 hover:text-yellow-300 transition">
            <BookOpen size={18} />
            Akademik
          </Link>
          <Link href="/ekstrakurikuler" className="flex items-center gap-2 hover:text-yellow-300 transition">
            <Users size={18} />
           Ekstrakurikuler
          </Link>
          <Link href="/ppdb" className="flex items-center gap-2 hover:text-yellow-300 transition">
            <ClipboardList size={18} />
            PPDB
          </Link>
          <Link href="/kontak" className="flex items-center gap-2 hover:text-yellow-300 transition">
            <Mail size={18} />
            Kontak
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
