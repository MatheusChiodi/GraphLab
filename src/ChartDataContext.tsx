import React, { createContext, useState, useContext } from 'react';

// Dados iniciais
const initialChartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
];

// Configurações fixas dos gráficos
const initialChartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))',
  },
  visitors: {
    label: 'Visitors',
  },
  January: {
    label: 'Jan',
    color: 'hsl(var(--chart-1))',
  },
  February: {
    label: 'Feb',
    color: 'hsl(var(--chart-2))',
  },
  March: {
    label: 'Mar',
    color: 'hsl(var(--chart-3))',
  },
  April: {
    label: 'Apr',
    color: 'hsl(var(--chart-4))',
  },
  May: {
    label: 'May',
    color: 'hsl(var(--chart-5))',
  },
};

// Cria o contexto
const ChartDataContext = createContext();

// Provider do contexto
export const ChartDataProvider = ({ children }) => {
  const [chartData, setChartData] = useState(initialChartData);
  const [chartConfig, setChartConfig] = useState(initialChartConfig);
  const [color, setColor] = useState('#ff5555');

  return (
    <ChartDataContext.Provider
      value={{ chartData, setChartData, chartConfig, setChartConfig, color, setColor }}
    >
      {children}
    </ChartDataContext.Provider>
  );
};

// Hook personalizado
export const useChartData = () => useContext(ChartDataContext);
