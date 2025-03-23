import { motion } from 'framer-motion';
import { useChartData } from '@/ChartDataContext';
import { useState } from 'react';
import { Save, Trash2, CirclePlus } from 'lucide-react';
import { div } from 'framer-motion/client';

export default function Data() {
  const { chartData, setChartData, chartConfig, setChartConfig } =
    useChartData();

  const [localData, setLocalData] = useState(chartData);
  const [localConfig, setLocalConfig] = useState(chartConfig);
  const [visibleRemove, setVisibleRemove] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (index, key, value) => {
    const newData = [...localData];
    newData[index][key] = key === 'month' ? value : Number(value);
    setLocalData(newData);
  };

  const handleConfigChange = (monthKey, field, value) => {
    const updatedConfig = {
      ...localConfig,
      [monthKey]: {
        ...localConfig[monthKey],
        [field]: value,
      },
    };
    setLocalConfig(updatedConfig);
  };

  const handleAdd = () => {
    const newMonth = `NewMonth${localData.length + 1}`;
    setLocalData([...localData, { month: newMonth, desktop: 0, mobile: 0 }]);
    setLocalConfig({
      ...localConfig,
      [newMonth]: { label: newMonth, color: 'hsl(var(--chart-new))' },
    });
  };

  const handleRemove = (index) => {
    const removedMonth = localData[index].month;
    const newData = localData.filter((_, i) => i !== index);

    const newConfig = { ...localConfig };
    delete newConfig[removedMonth];

    setLocalData(newData);
    setLocalConfig(newConfig);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setChartData(localData);
    setChartConfig(localConfig);

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <div className="flex flex-wrap items-center h-screen w-full transition-all duration-500 p-4 gap-4 overflow-y-scroll">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-gray-100 border border-gray-200 text-gray-800 px-6 py-6 rounded-2xl shadow-lg w-full max-w-6xl pt-[0%]"
      >
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Altere os dados conforme deseja!
        </h1>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {localData.map((item, index) => {
              const config = localConfig[item.month] || {};

              return (
                <div
                  key={index}
                  className="flex flex-col gap-2 bg-gray-100 p-4 rounded-xl border border-gray-200 shadow-lg relative"
                >
                  {visibleRemove && (
                    <button
                      type="button"
                      onClick={() => handleRemove(index)}
                      className="absolute top-0 right-0 text-gray-100 bg-[#ff5555] hover:brightness-90 py-1 px-2 rounded-full text-sm cursor-pointer shadow-md"
                      title="Remover"
                    >
                      ✕
                    </button>
                  )}

                  <label className="text-sm font-semibold" htmlFor="month">
                    Mês
                  </label>
                  <input
                    type="text"
                    placeholder="Mês"
                    value={item.month}
                    onChange={(e) =>
                      handleChange(index, 'month', e.target.value)
                    }
                    className="border border-gray-200 p-2 rounded-md w-full shadow-sm"
                  />

                  <label className="text-sm font-semibold" htmlFor="desktop">
                    Desktop
                  </label>
                  <input
                    type="number"
                    placeholder="Desktop"
                    value={item.desktop}
                    onChange={(e) =>
                      handleChange(index, 'desktop', e.target.value)
                    }
                    className="border border-gray-200 p-2 rounded-md w-full shadow-sm"
                  />

                  <label className="text-sm font-semibold" htmlFor="mobile">
                    Mobile
                  </label>
                  <input
                    type="number"
                    placeholder="Mobile"
                    value={item.mobile}
                    onChange={(e) =>
                      handleChange(index, 'mobile', e.target.value)
                    }
                    className="border border-gray-200 p-2 rounded-md w-full shadow-sm"
                  />

                  <label className="text-sm font-semibold" htmlFor="label">
                    Label
                  </label>
                  <input
                    type="text"
                    placeholder="Label"
                    value={config.label || ''}
                    onChange={(e) =>
                      handleConfigChange(item.month, 'label', e.target.value)
                    }
                    className="border border-blue-200 p-2 rounded-md w-full shadow-sm"
                  />

                  <label className="text-sm font-semibold" htmlFor="color">
                    Cor
                  </label>
                  <input
                    type="text"
                    placeholder="Color (HSL, HEX, etc)"
                    value={config.color || ''}
                    onChange={(e) =>
                      handleConfigChange(item.month, 'color', e.target.value)
                    }
                    className="border border-pink-200 p-2 rounded-md w-full shadow-sm"
                  />
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              onClick={handleAdd}
              className="bg-[#6272A4] text-white py-2 px-6 rounded-lg hover:brightness-90 shadow-md transition w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
            >
              Adicionar novo
              <CirclePlus />
            </button>
            <button
              type="button"
              onClick={() => setVisibleRemove(!visibleRemove)}
              className="bg-[#FF5555] text-white py-2 px-6 rounded-lg hover:brightness-90 shadow-md transition w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
            >
              Remover dado
              <Trash2 />
            </button>
            <button
              type="submit"
              className="bg-[#282A36] text-white py-2 px-6 rounded-lg hover:brightness-90 shadow-md transition w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
            >
              Salvar alterações
              <Save />
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`relative bg-gray-100 border border-gray-200 text-gray-800 py-6 rounded-2xl shadow-lg w-full max-w-6xl pt-[0%] h-[300px] overflow-hidden ${
          showMore ? 'h-auto' : ''
        }`}
      >
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Dados atuais
        </h1>
        <pre className="text-sm px-6">
          {JSON.stringify(localData, null, 2)}
          {JSON.stringify(localConfig, null, 2)}
        </pre>

        <div className="w-full absolute bottom-0 rounded-xl text-center hover:brightness-90 transition ">
          <motion.button
            layout
            onClick={() => setShowMore(!showMore)}
            className="text-white px-4 py-2 rounded-lg w-full bg-[#ff5555] hover:brightness-90 shadow-md transition cursor-pointer"
          >
            {showMore ? 'Esconder' : 'Mostrar'} dados
          </motion.button>
        </div>
      </motion.div>

      {showAlert && (
        <motion.div
          className="text-center absolute top-[10px] right-[10px] w-[300px] rounded-md overflow-hidden shadow-lg text-gray-50 font-bold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: 'easeOut' },
          }}
        >
          <h1 className="bg-green-800 py-2">Atenção</h1>
          <p className="bg-green-200 text-gray-800 py-2">
            Os dados foram salvos com sucesso!
          </p>
        </motion.div>
      )}
    </div>
  );
}
