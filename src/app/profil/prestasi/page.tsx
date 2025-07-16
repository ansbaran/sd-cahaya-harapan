'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const prestasi = [
  {
    title: 'Juara 1 Lomba Matematika Se-Jabodetabek',
    tahun: 2023,
    kategori: 'Akademik',
    deskripsi: 'Diraih oleh siswa kelas 6 dalam kompetisi antar sekolah dasar.',
    gambar: '/images/prestasi-matematika.jpg',
  },
  {
    title: 'Juara Umum Lomba Paduan Suara Pelajar',
    tahun: 2022,
    kategori: 'Non-Akademik',
    deskripsi: 'Tim paduan suara memenangkan 3 kategori sekaligus.',
    gambar: '/images/prestasi-paduansuara.jpg',
  },
  {
    title: 'Juara 2 Futsal Antar SD',
    tahun: 2024,
    kategori: 'Olahraga',
    deskripsi: 'Tim futsal SD Cahaya Harapan lolos hingga babak final.',
    gambar: '/images/prestasi-futsal.jpg',
  },
  {
    title: 'Finalis Olimpiade Sains Nasional',
    tahun: 2023,
    kategori: 'Akademik',
    deskripsi: 'Perwakilan sekolah tembus babak nasional OSN bidang IPA.',
    gambar: '/images/prestasi-osn.jpg',
  },
]

const PrestasiSekolah = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Section with Shadow */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-16 px-4 text-center shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-md">Prestasi Sekolah</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-sm">
          Pencapaian luar biasa yang membanggakan sekolah, guru, dan seluruh siswa.
        </p>
      </section>

      {/* Grid Prestasi */}
      <section className="container mx-auto px-4 mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {prestasi.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-5"
            >
              <div className="w-full aspect-video overflow-hidden rounded-md mb-4">
                <Image
                  src={item.gambar}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white bg-yellow-500 px-2 py-1 rounded-full font-medium">
                  {item.kategori}
                </span>
                <span className="text-sm text-gray-600">{item.tahun}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{item.deskripsi}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default PrestasiSekolah
