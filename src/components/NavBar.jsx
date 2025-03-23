import { ChartColumnIncreasing, Cog } from 'lucide-react';
import ButtonHeader from '@/components/ButtonHeader';
import { motion } from 'framer-motion';

function NavBar({ setPage, page }) {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-100 md:w-[220px] w-[60px] rounded-r-2xl shadow-2xl py-4 transition-all duration-500">
      <motion.div
        className="flex items-center cursor-pointer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, ease: 'easeOut' },
        }}
        onClick={() => setPage('Home')}
      >
        <img src="logo.png" alt="logo" className="w-[40px] h-[40px]" />
        <h1 className="text-2xl font-bold md:block hidden me-2">MChiodi</h1>
      </motion.div>
      <div className="flex flex-col gap-4 mt-4 w-full px-3 pt-4 border-t-1 border-gray-300">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
          }}
        >
          <h2 className="font-semibold text-xl md:block hidden">Gráficos</h2>
          <ChartColumnIncreasing color={'#ff5555'} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
          }}
        >
          <ButtonHeader
            name={'Gráficos Linha'}
            icon={'ChartSpline'}
            page={'GraphLine'}
            function={setPage}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 1.2, ease: 'easeOut' },
          }}
        >
          <ButtonHeader
            name={'Gráficos Pizza'}
            icon={'ChartPie'}
            page={'GraphPie'}
            function={setPage}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 1.8, ease: 'easeOut' },
          }}
        >
          <ButtonHeader
            name={'Gráficos Coluna'}
            icon={'ChartColumn'}
            page={'GraphColumn'}
            function={setPage}
          />
        </motion.div>
      </div>
      <div className="flex flex-col gap-4 mt-4 w-full px-3 pt-4 border-t-1 border-gray-300">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
          }}
        >
          <h2 className="font-semibold text-xl md:block hidden">
            Configurações
          </h2>
          <Cog color={'#ff5555'} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 1.8, ease: 'easeOut' },
          }}
        >
          <ButtonHeader name={'Cores'} icon={'Brush'} page={'Color'} function={setPage}/>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 1.8, ease: 'easeOut' },
          }}
        >
          <ButtonHeader name={'Dados'} icon={'Braces'} page={'Data'} function={setPage}/>
        </motion.div>
      </div>
    </div>
  );
}

export default NavBar;
