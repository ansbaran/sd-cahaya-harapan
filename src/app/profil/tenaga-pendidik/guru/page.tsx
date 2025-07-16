'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Kutipan inspiratif wali kelas
const kutipanWali = {
  '1A': 'Langkah pertama penuh semangat dan kasih.',
  '1B': 'Menumbuhkan rasa ingin tahu sejak dini.',
  '1C': 'Awal yang baik untuk masa depan cerah.',
  '2A': 'Belajar dengan senyum setiap hari.',
  '2B': 'Menumbuhkan nilai dan kemandirian.',
  '2C': 'Membentuk karakter melalui kebiasaan baik.',
  '3A': 'Mendorong keberanian untuk bertanya dan mencoba.',
  '3B': 'Membimbing dengan sabar dan keteladanan.',
  '4A': 'Memupuk rasa tanggung jawab sejak kecil.',
  '4B': 'Mengasah logika dan rasa empati.',
  '4C': 'Menanamkan disiplin dan kreativitas.',
  '5A': 'Menginspirasi menjadi pribadi mandiri.',
  '5B': 'Belajar untuk menjadi pemimpin masa depan.',
  '5C': 'Mengembangkan potensi tanpa batas.',
  '6A': 'Menjadi panutan dan pembimbing menuju lulus.',
  '6B': 'Persiapan terbaik untuk masa depan yang gemilang.',
  '6C': 'Menjaga semangat hingga akhir tahun ajaran.',
}

// Daftar guru
const guruList = [
  // Wali Kelas
  ...Object.entries(kutipanWali).map(([kelas, kutipan]) => ({
    nama: `Ibu Wali Kelas ${kelas}`,
    mapel: `Wali Kelas ${kelas}`,
    kutipan,
    foto: `/images/wali-${kelas.toLowerCase()}.jpg`,
  })),

  // Guru bidang studi
  {
    nama: 'Bapak Yohanes Adi, S.PAK.',
    mapel: 'Pendidikan Agama Katolik',
    kutipan: 'Iman memperkuat akal dan hati.',
    foto: '/images/guru-agama1.jpg',
  },
  {
    nama: 'Ibu Agnes Mulyani, S.PAK.',
    mapel: 'Pendidikan Agama Katolik',
    kutipan: 'Mengajarkan cinta kasih melalui pendidikan.',
    foto: '/images/guru-agama2.jpg',
  },
  {
    nama: 'Bapak Dodi Firmansyah, S.Pd.',
    mapel: 'Penjaskes',
    kutipan: 'Tubuh yang sehat menunjang semangat belajar.',
    foto: '/images/guru-penjaskes1.jpg',
  },
  {
    nama: 'Ibu Winda Lestari, S.Pd.',
    mapel: 'Penjaskes',
    kutipan: 'Olahraga adalah cermin kedisiplinan.',
    foto: '/images/guru-penjaskes2.jpg',
  },
  {
    nama: 'Bapak Ardi Nugraha, M.Kom.',
    mapel: 'TIK',
    kutipan: 'Teknologi mempermudah belajar dan berinovasi.',
    foto: '/images/guru-tik1.jpg',
  },
  {
    nama: 'Ibu Rika Pratiwi, M.Kom.',
    mapel: 'TIK',
    kutipan: 'Digital skill untuk masa depan cerah.',
    foto: '/images/guru-tik2.jpg',
  },
  {
    nama: 'Ibu Sarah Natalia, S.Pd.',
    mapel: 'Bahasa Inggris',
    kutipan: 'Bahasa membuka dunia baru.',
    foto: '/images/guru-inggris1.jpg',
  },
  {
    nama: 'Bapak David Herman, S.Pd.',
    mapel: 'Bahasa Inggris',
    kutipan: 'Learning English is fun and empowering.',
    foto: '/images/guru-inggris2.jpg',
  },
  {
    nama: 'Ibu Nining Rohayati, S.Pd.',
    mapel: 'Bahasa Sunda',
    kutipan: 'Ngamumule basa Sunda, ngaraksa jati diri.',
    foto: '/images/guru-sunda.jpg',
  },
]

// Kepala Sekolah
const kepalaSekolah = {
  nama: 'Paulus Ngabur, S.Pd.',
  jabatan: 'Kepala Sekolah',
  kutipan: 'Pendidikan adalah cahaya yang menuntun masa depan anak bangsa.',
  foto: '/images/kepsek.jpg',
}

const GuruSekolah = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 px-4 text-center shadow-md">
        <h1 className="text-3xl md:text-5xl font-bold">Tenaga Pendidik - Guru</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          Guru-guru hebat yang menjadi panutan dan pembimbing dalam perjalanan belajar siswa.
        </p>
      </section>

      {/* Kepala Sekolah */}
      <section className="container mx-auto px-4 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-indigo-50 rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6 p-6 md:p-10"
        >
          <div className="w-full md:w-1/3 rounded-xl overflow-hidden">
            <Image
              src={kepalaSekolah.foto}
              alt={kepalaSekolah.nama}
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h2 className="text-2xl font-bold text-indigo-800">{kepalaSekolah.nama}</h2>
            <p className="text-indigo-600 font-medium">{kepalaSekolah.jabatan}</p>
            <p className="mt-4 text-gray-700 italic">"{kepalaSekolah.kutipan}"</p>
          </div>
        </motion.div>
      </section>

      {/* Grid Guru */}
      <section className="container mx-auto px-4 mt-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {guruList.map((guru, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-6"
            >
              <div className="w-full h-60 mb-4 overflow-hidden rounded-xl">
                <Image
                  src={guru.foto}
                  alt={guru.nama}
                  width={400}
                  height={240}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">{guru.nama}</h3>
                <p className="text-blue-600 font-medium">{guru.mapel}</p>
                <p className="mt-2 text-gray-600 italic text-sm">"{guru.kutipan}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default GuruSekolah
