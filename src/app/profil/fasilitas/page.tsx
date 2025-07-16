'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const fasilitas = [
  {
    title: 'Ruang Kelas Modern',
    description: 'Dilengkapi dengan proyektor, papan digital, dan sirkulasi udara yang baik.',
    image: '/images/fasilitas/fasilitas-1.jpg',
  },
  {
    title: 'Perpustakaan',
    description: 'Koleksi buku lengkap dan ruang baca nyaman untuk siswa dan guru.',
    image: '/images/fasilitas/fasilitas-2.jpg',
  },
  {
    title: 'Lab Komputer',
    description: 'Fasilitas komputer terbaru dengan koneksi internet cepat.',
    image: '/images/fasilitas/fasilitas-3.jpg',
  },
  {
    title: 'Lapangan Olahraga',
    description: 'Lapangan multifungsi untuk basket, voli, dan futsal.',
    image: '/images/fasilitas/fasilitas-4.jpg',
  },
  {
    title: 'Ruang Musik & Seni',
    description: 'Ruang berlatih musik dan seni untuk pengembangan bakat.',
    image: '/images/fasilitas/fasilitas-5.jpg',
  },
  {
    title: 'Kantin Sehat',
    description: 'Menyediakan makanan sehat dan bersih dengan harga terjangkau.',
    image: '/images/fasilitas/fasilitas-6.jpg',
  },
]

const FasilitasSekolah = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 px-4 text-center shadow-xl">
        <h1 className="text-3xl md:text-5xl font-bold">Fasilitas Sekolah</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          Fasilitas lengkap dan modern untuk mendukung proses pembelajaran yang optimal dan menyenangkan.
        </p>
      </section>

      {/* Grid Fasilitas */}
      <section className="container mx-auto px-4 mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {fasilitas.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition hover:scale-[1.02]"
            >
              <div className="mb-4 rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-40 object-cover"
                />
              </div>
              <h3 className="font-semibold text-xl text-blue-700 text-center mb-2">{item.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default FasilitasSekolah
