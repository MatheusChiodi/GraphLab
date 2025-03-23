import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="w-full h-full flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-gray-100 border border-gray-200 text-gray-800 px-6 py-6 rounded-2xl shadow-lg max-w-md w-full text-center"
      >
        <h1 className="text-2xl font-semibold mb-2">Bem-vindo ao Painel!</h1>
        <p className="text-base">
          Aqui você pode visualizar exemplos de gráficos de barras, linhas e pizza.
        </p>
      </motion.div>
    </main>
  );
}
