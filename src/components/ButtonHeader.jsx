import {
  ChartSpline,
  ChartPie,
  ChartColumn,
  Brush,
  Braces,
} from 'lucide-react';

export default function ButtonHeader({ name, icon, page, function: setPage }) {
  return (
    <button
      className="text-gray-800 hover:text-[#ff5555] font-bold py-2 w-full rounded flex items-center justify-start gap-3 cursor-pointer transition-all duration-500"
      onClick={() => setPage(page)}
    >
      {icon === 'ChartSpline' ? <ChartSpline /> : null}
      {icon === 'ChartPie' ? <ChartPie /> : null}
      {icon === 'ChartColumn' ? <ChartColumn /> : null}
      {icon === 'Brush' ? <Brush /> : null}
      {icon === 'Braces' ? <Braces /> : null}
      <p className="md:block hidden">{name}</p>
    </button>
  );
}
