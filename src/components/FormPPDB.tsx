'use client'

import { useState, useRef } from 'react'

export default function FormPPDB() {
  const [form, setForm] = useState({
    nisn: '',
    nama: '',
    tanggalLahir: '',
    jenisKelamin: '',
    asalSekolah: '',
    namaOrtu: '',
    telp: '',
    email: '',
    password: '',
    buktiBayar: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [imagePreview, setImagePreview] = useState('')
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const fileType = file.type
    const isImage = fileType.startsWith('image/')
    const isPDF = fileType === 'application/pdf'

    if (!isImage && !isPDF) {
      setError('Hanya file gambar atau PDF yang diperbolehkan.')
      return
    }

    setError('')
    setImagePreview('') // reset preview
    if (isImage) {
      setImagePreview(URL.createObjectURL(file))
    }

    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'buktippdb')
    formData.append('cloud_name', 'dkv3hswdj')

    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/dkv3hswdj/auto/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()
      if (data.secure_url) {
        setForm((prev) => ({ ...prev, buktiBayar: data.secure_url }))
        setError('')
      } else {
        throw new Error('Upload gagal. Coba lagi.')
      }
    } catch (err) {
      setError('Gagal upload bukti pembayaran.')
    }
  }

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const isValidPhone = (phone: string) => /^08\d{8,11}$/.test(phone)
  const isValidPassword = (password: string) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const isIncomplete = Object.values(form).some((val) => val.trim() === '')
    if (isIncomplete) {
      setError('Mohon lengkapi semua data, termasuk bukti pembayaran.')
      return
    }

    if (!isValidEmail(form.email)) {
      setError('Email tidak valid.')
      return
    }

    if (!isValidPhone(form.telp)) {
      setError('Nomor telepon harus dimulai dengan 08 dan panjang sesuai.')
      return
    }

    if (!isValidPassword(form.password)) {
      setError('Password minimal 6 karakter dan harus mengandung huruf dan angka.')
      return
    }

    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const res = await fetch('https://sheetdb.io/api/v1/wulhvlm42iokk', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const text = await res.text()
        throw new Error(text)
      }

      setSuccess(true)
      setForm({
        nisn: '',
        nama: '',
        tanggalLahir: '',
        jenisKelamin: '',
        asalSekolah: '',
        namaOrtu: '',
        telp: '',
        email: '',
        password: '',
        buktiBayar: '',
      })
      setImagePreview('')

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    } catch (err: any) {
      setError(err.message || 'Terjadi kesalahan. Coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="form-ppdb" className="py-16 bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
      >
        {/* FORM KIRI */}
        <div className="space-y-6 p-6 border border-blue-300 bg-white rounded-2xl shadow-xl text-black">
          <h2 className="text-xl font-bold text-blue-700 mb-4">🧑 Informasi Siswa</h2>

          <Input label="NISN" name="nisn" value={form.nisn} onChange={handleChange} placeholder="0023456789" />
          <Input label="Nama Lengkap" name="nama" value={form.nama} onChange={handleChange} placeholder="Contoh: Daniel" />
          <Input label="Tanggal Lahir" name="tanggalLahir" type="date" value={form.tanggalLahir} onChange={handleChange} />
          <Select
            label="Jenis Kelamin"
            name="jenisKelamin"
            value={form.jenisKelamin}
            onChange={handleChange}
            options={['-- Pilih Jenis Kelamin --', 'Laki-laki', 'Perempuan']}
          />
          <Input label="Asal Sekolah" name="asalSekolah" value={form.asalSekolah} onChange={handleChange} placeholder="Contoh: SDN 1 Ruteng" />

          <div>
            <label className="block text-sm font-medium text-black mb-1">Upload Bukti Pembayaran</label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,application/pdf"
              onChange={handleImageUpload}
              className="w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            />
            {imagePreview && (
              <img src={imagePreview} alt="Preview" className="mt-4 max-h-40 rounded shadow" />
            )}
            {form.buktiBayar && !imagePreview && (
              <p className="mt-2 text-sm">
                ✅ File berhasil diunggah:{' '}
                <a href={form.buktiBayar} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  Lihat File
                </a>
              </p>
            )}
          </div>
        </div>

        {/* FORM KANAN */}
        <div className="space-y-6 p-6 border border-blue-300 bg-white rounded-2xl shadow-xl text-black">
          <h2 className="text-xl font-bold text-blue-700 mb-4">👪 Informasi Orang Tua & Akun</h2>

          <Input label="Nama Orang Tua / Wali" name="namaOrtu" value={form.namaOrtu} onChange={handleChange} placeholder="Contoh: Bapak/Ibu Nama" />
          <Input label="Nomor Telepon" name="telp" type="tel" value={form.telp} onChange={handleChange} placeholder="08XXXXXXXXXX" />
          <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Contoh: siswa@email.com" />
          <Input label="Password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="Minimal 6 karakter" />
        </div>

        <div className="col-span-1 md:col-span-2 text-center pt-6">
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-10 py-4 rounded-full shadow-md hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 disabled:opacity-50"
          >
            {loading ? 'Mengirim...' : '🚀 Kirim Pendaftaran'}
          </button>
          {success && <p className="text-green-600 mt-4">✅ Data berhasil dikirim!</p>}
          {error && <p className="text-red-600 mt-4">{error}</p>}
        </div>
      </form>
    </section>
  )
}

// Komponen Input
interface InputProps {
  label: string
  name: string
  value: string
  placeholder?: string
  type?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({ label, name, value, onChange, placeholder = '', type = 'text' }: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-black">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="mt-1 w-full border border-gray-300 px-4 py-3 rounded-lg text-black placeholder-black focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

// Komponen Select
interface SelectProps {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: string[]
}

function Select({ label, name, value, onChange, options }: SelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-black">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 w-full border border-gray-300 px-4 py-3 rounded-lg text-black focus:ring-2 focus:ring-blue-500"
      >
        {options.map((opt, i) => (
          <option key={i} value={i === 0 ? '' : opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}
