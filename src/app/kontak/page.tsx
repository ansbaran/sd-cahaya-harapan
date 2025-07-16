'use client';

import { Mail, MapPin, Phone } from 'lucide-react';

export default function KontakPage() {
  return (
    <main className="bg-white min-h-screen px-4 py-16 text-black">
      <div className="max-w-6xl mx-auto">
        {/* Judul */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black">Hubungi Kami</h1>
          <p className="mt-3 text-gray-900 max-w-2xl mx-auto">
            Kami siap membantu Anda. Silakan hubungi kami melalui informasi kontak di bawah ini atau kirimkan pesan melalui formulir.
          </p>
        </section>

        {/* Info Kontak + Maps */}
        <section className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Info Kontak */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-3 rounded-xl">
                <MapPin className="text-indigo-700 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-black">Alamat</h3>
                <p className="text-black">
                  Jl. Komp. Boulevard No.17131, RT.008/RW.030, Pejuang, Kecamatan Medan Satria, Kota Bekasi, Jawa Barat 17131
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-3 rounded-xl">
                <Phone className="text-indigo-700 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-black">Telepon</h3>
                <p className="text-black">(021) 1234 5678</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-3 rounded-xl">
                <Mail className="text-indigo-700 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-black">Email</h3>
                <p className="text-black">info@cahayaharapan.sch.id</p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <iframe
              title="Lokasi SD Cahaya Harapan"
              className="w-full h-72 rounded-xl shadow-lg border"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.282511814426!2d106.98280667604293!3d-6.226785660928273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698db04b68723b%3A0x1c2f2ab920a0460a!2sJl.%20Komp.%20Boulevard%20No.17131%2C%20RT.008%2FRW.030%2C%20Pejuang%2C%20Kec.%20Medan%20Satria%2C%20Kota%20Bks%2C%20Jawa%20Barat%2017131!5e0!3m2!1sid!2sid!4v1721123822395!5m2!1sid!2sid"
            ></iframe>
          </div>
        </section>

        {/* Formulir Kontak */}
        <section className="bg-white border border-gray-300 p-8 rounded-2xl shadow-sm max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">Kirim Pesan</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-black mb-1">Nama</label>
              <input
                type="text"
                placeholder="Nama lengkap Anda"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">Email</label>
              <input
                type="email"
                placeholder="emailanda@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">Pesan</label>
              <textarea
                placeholder="Tuliskan pesan Anda di sini..."
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
