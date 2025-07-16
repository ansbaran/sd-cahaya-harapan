'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-16 px-4 text-center shadow-md">
        <h1 className="text-3xl md:text-5xl font-bold">Sejarah Sekolah</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          Menelusuri perjalanan berdirinya Sekolah Cahaya Harapan dari masa ke masa
        </p>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-gray-800"
        >
          {/* Profil Penulis */}
          <div className="flex items-center mb-6">
            <img
              src="/images/kepsek.jpg"
              alt="Paulus Ngabur, S.Pd."
              className="w-16 h-16 rounded-full object-cover mr-4 shadow-lg"
            />
            <div>
              <p className="text-lg font-semibold">Paulus Ngabur, S.Pd.</p>
              <p className="text-sm text-gray-500">Kepala Sekolah SD Cahaya Harapan</p>
            </div>
          </div>

          {/* Judul */}
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Sejarah Sekolah Cahaya Harapan</h2>

          {/* Isi Teks */}
          <div className="space-y-4 text-justify leading-relaxed">
            <p>Pada awal Januari 1998, Susiantie Sunyoto memiliki ide kuat untuk mendirikan sekolah Katolik di daerah Harapan Baru yang saat itu belum memiliki institusi semacam itu. Bersama Susanne Ramli, Suryanto Susanto, Sri Lestari (Almh.), dan Fuco R. Chandra, mereka memulai langkah besar mendirikan TK Cahaya Harapan, yang diresmikan oleh Romo Damianus, SVD, Romo Gunawan PR, dan Romo Susilo PR.</p>

            <p>Pada April 1998, pembangunan dimulai dan berhasil menjaring 65 siswa. Kesuksesan ini membuka jalan bagi pembukaan SD Cahaya Harapan pada 1999, dengan tiga tingkat kelas awal.</p>

            <p>Kepadatan siswa mendorong pembangunan gedung SD baru di Sentra Niaga Boulevard Hijau tahun 2001, yang diresmikan oleh Dra. L.E. Coldenhoff (Almh.) dan Romo Marcus Wanandi, SJ. Sekolah ini kemudian menjadi anggota MPK-KAJ dan sekolah Katolik pertama di Harapan Indah.</p>

            <p>Tahun 2002, SD Cahaya Harapan resmi menempati gedung baru dan membuka SMP Cahaya Harapan, melanjutkan tonggak penting dalam memberikan pendidikan Katolik yang menyeluruh.</p>

            <p>Sekolah ini dibangun atas dedikasi delapan tokoh pendiri: Susiantie S, Suryanto S, Susanne R, Sri Lestari (Almh.), Fuco R. Chandra, Hendra K, Sri Juliani, dan Jenny Lie.</p>

            <p>Cahaya Harapan tidak hanya fokus pada akademik, tetapi juga karakter, iman, dan kasih. Sekolah ini merayakan hari pelindung Santo Yohanes Pembaptis setiap 29 Agustus, dan terus menjunjung nilai-nilai Kristiani dalam setiap aspek pendidikan.</p>

            <p>Dengan pendekatan humanis dan kesiapan menghadapi era digital, Sekolah Katolik Cahaya Harapan menjadi pelopor pendidikan yang menggabungkan tradisi dan inovasi, membentuk generasi unggul yang siap menghadapi masa depan.</p>
          </div>
        </motion.div>
      </section>

      {/* Image Gallery */}
      <section className="container mx-auto px-4 mt-16">
        <h2 className="text-black font-semibold text-center mb-8">Dokumentasi Perjalanan Sekolah</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={`/images/sejarah-${num}.jpg`}
                alt={`Foto sejarah ${num}`}
                width={600}
                height={400}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Optional Quote */}
      <section className="mt-20 text-center px-4">
        <blockquote className="text-xl italic text-gray-600 max-w-2xl mx-auto">
          "Pendidikan bukan hanya tentang belajar, tetapi membangun masa depan dengan nilai dan harapan."
        </blockquote>
      </section>
    </div>
  );
}
