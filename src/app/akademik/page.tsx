'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Section = {
  icon: string;
  title: string;
  summary: string;
  details: React.ReactNode;
};

const sections: Section[] = [
  {
    icon: '📘',
    title: 'Kurikulum',
    summary: 'Pendekatan Kurikulum Merdeka untuk mengembangkan potensi siswa.',
    details: (
      <>
        <p className="text-gray-700 mb-2">
          SD Cahaya Harapan Bekasi menerapkan <strong>Kurikulum Merdeka</strong> untuk pengembangan karakter dan kompetensi siswa.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Pembelajaran tematik integratif</li>
          <li>Penerapan project-based learning</li>
          <li>Profil pelajar Pancasila</li>
          <li>Diferensiasi belajar</li>
        </ul>
      </>
    ),
  },
  {
    icon: '📅',
    title: 'Jadwal Pelajaran',
    summary: 'Struktur waktu belajar seimbang antara akademik dan karakter.',
    details: (
      <>
        <p className="text-gray-700 mb-2">
          Jadwal disusun untuk menyeimbangkan aspek akademik, spiritual, dan sosial siswa.
        </p>
        <div className="overflow-x-auto rounded-lg border border-gray-300">
          <table className="min-w-full text-sm text-center">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="px-4 py-2 border">Jam</th>
                <th className="px-4 py-2 border">Senin</th>
                <th className="px-4 py-2 border">Selasa</th>
                <th className="px-4 py-2 border">Rabu</th>
                <th className="px-4 py-2 border">Kamis</th>
                <th className="px-4 py-2 border">Jumat</th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-800">
              <tr>
                <td className="px-4 py-2 border font-medium">07.00 - 08.00</td>
                <td className="border">Matematika</td>
                <td className="border">IPA</td>
                <td className="border">Agama</td>
                <td className="border">Bahasa Indonesia</td>
                <td className="border">Olahraga</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border font-medium">08.00 - 09.00</td>
                <td className="border">Bahasa Indonesia</td>
                <td className="border">IPS</td>
                <td className="border">Seni Budaya</td>
                <td className="border">Matematika</td>
                <td className="border">Prakarya</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border font-medium">09.00 - 10.00</td>
                <td className="border">Agama</td>
                <td className="border">PJOK</td>
                <td className="border">Bahasa Inggris</td>
                <td className="border">PAK</td>
                <td className="border">Ekstrakurikuler</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    icon: '📆',
    title: 'Kalender Akademik',
    summary: 'Agenda pendidikan, ujian, dan libur selama satu tahun ajaran.',
    details: (
      <>
        <p className="text-gray-700 mb-2">
          Kalender akademik disusun sesuai arahan dinas pendidikan & kebutuhan internal sekolah.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Awal & akhir tahun ajaran</li>
          <li>Libur nasional & keagamaan</li>
          <li>Ujian tengah & akhir semester</li>
          <li>Kegiatan pengayaan & outing</li>
        </ul>
      </>
    ),
  },
  {
    icon: '📊',
    title: 'Metode & Penilaian',
    summary: 'Sistem asesmen berbasis kompetensi & pendekatan aktif.',
    details: (
      <>
        <p className="text-gray-700 mb-2">
          Penilaian mencakup hasil belajar, proses belajar, dan keterampilan sosial emosional.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Formatif & sumatif</li>
          <li>Observasi & portofolio</li>
          <li>Refleksi siswa</li>
          <li>Rapor naratif & numerik</li>
        </ul>
      </>
    ),
  },
  {
    icon: '📝',
    title: 'Evaluasi & Ujian',
    summary: 'Ulangan, evaluasi harian, dan asesmen semester.',
    details: (
      <>
        <p className="text-gray-700 mb-2">
          Evaluasi dilakukan berkala untuk mengukur kemajuan dan kebutuhan penguatan siswa.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Ulangan harian & mingguan</li>
          <li>UTS, UAS, dan PAT</li>
          <li>Asesmen diagnostik & formatif</li>
        </ul>
      </>
    ),
  },
];

export default function AkademikPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen py-14 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-blue-800 mb-10"
        >
          Informasi Akademik
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-start mb-4">
                <div className="text-3xl mr-3">{section.icon}</div>
                <h2 className="text-xl font-semibold text-blue-700">{section.title}</h2>
              </div>

              <p className="text-gray-600 mb-4">{section.summary}</p>

              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 rounded-full shadow hover:shadow-md hover:scale-105 transition duration-300"
              >
                {openIndex === index ? (
                  <>
                    Tutup Detail
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    Lihat Detail
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 overflow-hidden"
                  >
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-sm">
                      {section.details}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}