'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const stafList = [
  {
    nama: 'Ibu Endang Wulandari',
    jabatan: 'Pustakawan',
    deskripsi: 'Mengelola koleksi buku dan membantu siswa menemukan sumber belajar.',
    foto: '/images/staf-endang.jpg',
  },
  {
    nama: 'Ibu Rina Marlina',
    jabatan: 'Tata Usaha',
    deskripsi: 'Melayani kebutuhan administrasi siswa dan guru dengan cekatan.',
    foto: '/images/adm.jpg',
  },
  {
    nama: 'Bapak Joko Supriyanto',
    jabatan: 'Pramubakti',
    deskripsi: 'Mendukung keperluan logistik dan teknis dalam kegiatan sekolah.',
    foto: '/images/staf-joko.jpg',
  },
  {
    nama: 'Bapak Suryo Hartono',
    jabatan: 'Office Boy',
    deskripsi: 'Membantu menjaga kebersihan dan keperluan harian sekolah.',
    foto: '/images/staf-ob1.jpg',
  },
  {
    nama: 'Ibu Yanti Sari',
    jabatan: 'Office Girl',
    deskripsi: 'Membantu kebersihan dan kenyamanan ruangan kelas serta kantor.',
    foto: '/images/staf-yanti.jpg',
  },
  {
    nama: 'Bapak Rendi Saputra',
    jabatan: 'Office Boy',
    deskripsi: 'Menjaga kebersihan lingkungan dan membantu logistik sekolah.',
    foto: '/images/staf-ob2.jpg',
  },
  {
    nama: 'Bapak Dedi Suwandi',
    jabatan: 'Security',
    deskripsi: 'Menjaga keamanan dan ketertiban sekolah setiap hari.',
    foto: '/images/staf-security1.jpg',
  },
  {
    nama: 'Bapak Agus Salim',
    jabatan: 'Security',
    deskripsi: 'Bertugas memastikan lingkungan sekolah aman dan tertib.',
    foto: '/images/staf-security2.jpg',
  },
]

const StafSekolah = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16 px-4 text-center shadow">
        <h1 className="text-3xl md:text-5xl font-bold">Tenaga Kependidikan - Staf</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          Staf profesional yang bekerja di balik layar untuk mendukung operasional sekolah berjalan lancar setiap hari.
        </p>
      </section>

      {/* Grid Staf */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {stafList.map((staf, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center text-center"
            >
              <div className="w-full h-52 mb-5 overflow-hidden rounded-xl border-4 border-green-500">
                <Image
                  src={staf.foto}
                  alt={staf.nama}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{staf.nama}</h3>
              <p className="text-green-600 font-medium mt-1">{staf.jabatan}</p>
              <p className="mt-3 text-gray-600 text-sm">{staf.deskripsi}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default StafSekolah
