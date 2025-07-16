'use client';

import dynamic from 'next/dynamic';

const FormPPDB = dynamic(() => import('./FormPPDB'), {
  ssr: false,
});

export default function FormPPDBWrapper() {
  return <FormPPDB />;
}
