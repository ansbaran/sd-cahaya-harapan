import FormPPDBWrapper from '@/components/FormPPDBWrapper';

export default function PPDBPage() {
  return (
    <main className="min-h-screen py-12 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-black font-bold mb-2 text-center">Formulir Pendaftaran Peserta Didik Baru</h1>
        <FormPPDBWrapper />
      </div>
    </main>
  );
}