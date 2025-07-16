// components/SectionCard.tsx

import { motion } from 'framer-motion';

export default function SectionCard({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white shadow-md rounded-2xl p-6 border border-gray-200"
    >
      <div className="flex items-center mb-4 space-x-3">
        <div className="text-3xl">{icon}</div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      <div>{children}</div>
    </motion.section>
  );
}
