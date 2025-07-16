'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

const kegiatanList = [
  {
    id: 'kegiatan-1',
    src: '/images/kegiatan-1.jpg',
    alt: 'Upacara Bendera',
    title: 'Upacara Bendera',
    description: 'Upacara bendera setiap hari Senin untuk meningkatkan nasionalisme di kalangan siswa dan membentuk karakter disiplin sejak dini.',
  },
  {
    id: 'kegiatan-2',
    src: '/images/kegiatan-2.jpg',
    alt: 'Pramuka',
    title: 'Pramuka',
    description: 'Kegiatan kepramukaan yang dilakukan setiap Jumat, mengajarkan kerjasama tim, kepemimpinan, serta nilai-nilai kedisiplinan kepada siswa.',
  },
  {
    id: 'kegiatan-3',
    src: '/images/kegiatan-3.jpg',
    alt: 'Lomba Seni',
    title: 'Lomba Seni',
    description: 'Ajang lomba seni antar kelas yang melibatkan pertunjukan musik, tari, dan drama sebagai wadah ekspresi kreativitas siswa.',
  },
  {
    id: 'kegiatan-4',
    src: '/images/kegiatan-4.jpg',
    alt: 'Kegiatan Sosial',
    title: 'Kegiatan Sosial',
    description: 'Kegiatan sosial seperti bakti lingkungan dan kunjungan ke panti asuhan untuk menumbuhkan empati dan kepedulian sosial.',
  },
]

export default function KegiatanSekolah() {
  const [selected, setSelected] = useState<null | typeof kegiatanList[0]>(null)
  const sectionRef = useRef<HTMLElement | null>(null)

  const handleBack = () => {
    setSelected(null)
    // scroll ke section kegiatan
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100) // beri sedikit delay agar scroll terjadi setelah UI berubah
  }

  return (
    <section id="kegiatan-sekolah" ref={sectionRef} className="py-16 bg-gray-100 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-8">Kegiatan Sekolah</h2>

        {!selected ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {kegiatanList.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="object-cover w-full h-60"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-blue-700">{item.title}</h3>
                  <p className="text-sm text-gray-700 mt-2">
                    {item.description.slice(0, 60)}...
                  </p>
                  <button
                    onClick={() => setSelected(item)}
                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
                  >
                    Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Image
              src={selected.src}
              alt={selected.alt}
              width={800}
              height={500}
              className="rounded-lg w-full mb-6 object-cover"
            />
            <h3 className="text-2xl font-bold text-blue-700 mb-4">{selected.title}</h3>
            <p className="text-gray-800 leading-relaxed mb-6">{selected.description}</p>
            <button
              onClick={handleBack}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition-all"
            >
              ← Kembali ke Kegiatan Lainnya
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
