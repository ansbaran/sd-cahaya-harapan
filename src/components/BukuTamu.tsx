'use client';

import { useState } from 'react';

export default function BukuTamu() {
  const [formData, setFormData] = useState({ nama: '', email: '', pesan: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Data Buku Tamu:', formData);
    alert('Terima kasih atas pesan Anda!');
    setFormData({ nama: '', email: '', pesan: '' });
  };

  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-8">Buku Tamu</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="nama" placeholder="Nama Lengkap" value={formData.nama} onChange={handleChange} required className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea name="pesan" placeholder="Pesan Anda" value={formData.pesan} onChange={handleChange} required rows={4} className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">Kirim</button>
        </form>
      </div>
    </section>
  );
}
