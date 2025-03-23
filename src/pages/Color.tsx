import { motion } from 'framer-motion';
import { useChartData } from '@/ChartDataContext';

export default function Color() {
  const { color, setColor } = useChartData();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white border border-gray-200 text-gray-800 px-8 py-6 rounded-2xl shadow-xl w-full max-w-md mx-auto"
    >
      <h1 className="text-2xl font-semibold text-center mb-4">
        Personalize a Cor do Gráfico
      </h1>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col items-center">
          <label htmlFor="color" className="mb-2 font-medium">
            Escolha uma cor:
          </label>
          <input
            type="color"
            id="color"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="h-12 w-24 border border-gray-300 rounded-lg cursor-pointer overflow-hidden p-1"
          />
        </div>
      </form>
    </motion.div>
  );
}
