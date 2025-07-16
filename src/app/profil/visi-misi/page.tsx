'use client'

import { motion } from 'framer-motion'
import {
  BookOpen,
  Brain,
  Users,
  Flag
} from 'lucide-react'

const VisiMisi = () => {
  return (
    <div className="bg-white min-h-screen pt-0 pb-20">
      {/* Hero Section dengan Gradasi */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-md py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Visi & Misi Sekolah
        </h1>
      </section>

      {/* Visi */}
      <section className="container mx-auto px-4 mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Visi Sekolah</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Menjadi sekolah Katolik yang membentuk pribadi beriman, cerdas, peduli, dan berintegritas tinggi, serta siap menghadapi tantangan zaman.
          </p>
        </motion.div>
      </section>

      {/* Misi */}
      <section className="container mx-auto px-4 mt-16">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-10">
          Misi SD Cahaya Harapan sebagai lembaga pendidikan Katolik:
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              icon: <BookOpen size={28} />,
              title: 'Iman & Takwa',
              desc: 'Meningkatkan iman dan takwa peserta didik sebagai landasan utama dalam kehidupan sehari-hari melalui kegiatan kerohanian.',
            },
            {
              icon: <Brain size={28} />,
              title: 'Ilmu Pengetahuan & Keterampilan',
              desc: 'Meningkatkan penguasaan ilmu pengetahuan, keterampilan dasar teknologi, serta seni dan budaya sesuai kurikulum.',
            },
            {
              icon: <Users size={28} />,
              title: 'Sikap Sosial & Emosional',
              desc: 'Membina sikap emosional dan sosial peserta didik melalui kegiatan yang terencana dan berkesinambungan.',
            },
            {
              icon: <Flag size={28} />,
              title: 'Karakter Kebangsaan',
              desc: 'Menanamkan karakter berbangsa dan bernegara dalam kehidupan sehari-hari peserta didik.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default VisiMisi
