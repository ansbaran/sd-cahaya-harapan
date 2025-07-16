'use client';

import { useState } from 'react';
import { Filter } from 'bad-words';

interface PesanTamu {
  nama: string;
  email: string;
  pesan: string;
}

const BukuTamuSection = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pesan, setPesan] = useState('');
  const [daftarPesan, setDaftarPesan] = useState<PesanTamu[]>([]);

  const filter = new Filter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama || !email || !pesan) return;

    const pesanBersih = filter.clean(pesan);
    setDaftarPesan([{ nama, email, pesan: pesanBersih }, ...daftarPesan]);

    setNama('');
    setEmail('');
    setPesan('');
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Buku Tamu</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md text-left space-y-4"
        >
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full border border-gray-300 px-4 py-3 rounded-lg text-black focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 px-4 py-3 rounded-lg text-black focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <textarea
            placeholder="Pesan"
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            rows={4}
            className="w-full border border-gray-300 px-4 py-3 rounded-lg text-black focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg font-semibold"
          >
            Kirim Pesan
          </button>
        </form>

        {daftarPesan.length > 0 && (
          <div className="mt-10 space-y-6 text-left">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Pesan Tamu</h3>
            {daftarPesan.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm flex items-start space-x-4"
              >
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    item.nama
                  )}&background=random&size=64`}
                  alt={item.nama}
                  className="rounded-full w-12 h-12"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{item.nama}</h4>
                  <p className="text-sm text-gray-500 mb-1">{item.email}</p>
                  <p className="text-gray-700">{item.pesan}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BukuTamuSection;
