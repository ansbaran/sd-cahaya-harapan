'use client';

import { useState } from 'react';

const agendaList = [
  {
    id: 1,
    nama: 'MPLS',
    tanggal: '14 Juli 2025',
    lokasi: 'Lapangan Sekolah',
    deskripsi: 'Masa Pengenalan lingkungan sekolah sangat penting bagi keberlanjutan pengetahuan anak.',
  },
  {
    id: 2,
    nama: 'Try Out Nasional',
    tanggal: '5 September 2025',
    lokasi: 'Aula Sekolah',
    deskripsi: 'Try out untuk menghadapi ujian nasional.',
  },
  {
    id: 3,
    nama: 'Misa Bersama',
    tanggal: '15 Oktober 2025',
    lokasi: 'Gereja ST.Albertus',
    deskripsi: 'Sebagai sekolah Katholik sangat penting menanamkan nilai spiritualitas sejak dini kepada anak',
  },
];

export default function AgendaSekolah() {
  const [selectedAgenda, setSelectedAgenda] = useState<number | null>(null);

  const handleBack = () => {
    setSelectedAgenda(null);
    setTimeout(() => {
      document.getElementById('agenda-sekolah')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="agenda-sekolah" className="py-16 bg-white px-4 text-center">
      <h2 className="text-3xl font-semibold text-blue-700 mb-8">Agenda Sekolah</h2>

      {!selectedAgenda ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {agendaList.map((agenda) => (
            <div key={agenda.id} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-sm text-gray-500 mb-2">{agenda.tanggal}</p>
              <h3 className="text-lg font-bold text-blue-700">{agenda.nama}</h3>
              <p className="text-sm text-gray-600 italic mb-2">{agenda.lokasi}</p>
              <button
                onClick={() => setSelectedAgenda(agenda.id)}
                className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition"
              >
                Detail
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow text-center">
          {agendaList
            .filter((a) => a.id === selectedAgenda)
            .map((agenda) => (
              <div key={agenda.id}>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">{agenda.nama}</h3>
                <p className="text-sm text-gray-500">{agenda.tanggal} – {agenda.lokasi}</p>
                <p className="mt-4 text-gray-700">{agenda.deskripsi}</p>
                <button
                  onClick={handleBack}
                  className="mt-6 bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-full text-sm transition"
                >
                  ← Kembali ke Agenda Sekolah
                </button>
              </div>
            ))}
        </div>
      )}
    </section>
  );
}
