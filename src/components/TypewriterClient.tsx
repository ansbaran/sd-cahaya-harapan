'use client';

import { Typewriter } from 'react-simple-typewriter';

export default function TypewriterClient() {
  return (
    <Typewriter
      words={['Selamat Datang di SD Cahaya Harapan Bekasi']}
      loop={false}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  );
}
