'use client';

import { motion } from 'framer-motion';
import { Sparkles, Music, Paintbrush, Dribbble, Dumbbell, Languages, Users, Brain, Sword } from 'lucide-react';

const kegiatan = [
  {
    icon: <Music className="w-8 h-8 text-indigo-600" />,
    title: 'Paduan Suara',
    desc: 'Meningkatkan kemampuan vokal dan kerja sama tim dalam harmoni musik.',
  },
  {
    icon: <Brain className="w-8 h-8 text-indigo-600" />,
    title: 'Catur',
    desc: 'Mengasah strategi, fokus, dan ketajaman berpikir melalui permainan catur.',
  },
  {
    icon: <Languages className="w-8 h-8 text-indigo-600" />,
    title: 'Mandarin',
    desc: 'Belajar bahasa Mandarin dengan pendekatan menyenangkan dan aplikatif.',
  },
  {
    icon: <Paintbrush className="w-8 h-8 text-indigo-600" />,
    title: 'Lukis',
    desc: 'Menyalurkan kreativitas visual melalui teknik melukis dan warna.',
  },
  {
    icon: <Dribbble className="w-8 h-8 text-indigo-600" />,
    title: 'Futsal',
    desc: 'Menumbuhkan semangat sportivitas dan keterampilan tim dalam olahraga cepat.',
  },
  {
    icon: <Dumbbell className="w-8 h-8 text-indigo-600" />,
    title: 'Badminton',
    desc: 'Melatih kelincahan, kekuatan fisik, dan konsentrasi lewat bulu tangkis.',
  },
  {
    icon: <Users className="w-8 h-8 text-indigo-600" />,
    title: 'Tari Tradisional',
    desc: 'Melestarikan budaya Indonesia melalui gerakan yang ekspresif dan elegan.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-indigo-600" />,
    title: 'Musik',
    desc: 'Mengeksplorasi alat musik dan ekspresi musikal sejak dini.',
  },
  {
    icon: <Sword className="w-8 h-8 text-indigo-600" />,
    title: 'Karate',
    desc: 'Mengembangkan ketangkasan, rasa percaya diri, dan ketahanan fisik.',
  },
];

export default function EkstrakurikulerPage() {
  return (
    <main className="bg-gradient-to-b from-white to-indigo-50 min-h-screen py-16 px-6">
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-indigo-800"
        >
          Ekstrakurikuler
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          SD Cahaya Harapan menyediakan berbagai kegiatan ekstrakurikuler yang dirancang untuk mengembangkan potensi,
          bakat, dan karakter siswa secara menyeluruh.
        </motion.p>
      </section>

      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4">
        {kegiatan.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group bg-white p-6 rounded-2xl border border-indigo-100 hover:shadow-2xl hover:border-indigo-300 transition duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-indigo-100 p-2 rounded-xl group-hover:rotate-6 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-indigo-700">{item.title}</h3>
            </div>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
