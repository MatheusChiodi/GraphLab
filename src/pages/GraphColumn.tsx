import { BarChartMultiple } from '@/components/barChart/BarChartMultiple';
import { BarChartVertical } from '@/components/barChart/BarChartVertical';
import { BarChartHorizontal } from '@//components/barChart/BarChartHorizontal';
import { BarChartLabel } from '@/components/barChart/BarChartLabel';
import { BarChartCustomLabel } from '@/components/barChart/BarChartCustomLabel';
import { BarChartMixed } from '@/components/barChart/BarChartMixed';
import { BarChartStackedLegend } from '@/components/barChart/BarChartStackedLegend';
import { BarChartActive } from '@/components/barChart/BarChartActive';
import { BarChartNegative } from '@/components/barChart/BarChartNegative';

function GraphColumn() {
  return (
    <div className="flex flex-wrap items-center h-screen w-full transition-all duration-500 p-4 gap-4 overflow-y-scroll">
      <BarChartVertical />
      <BarChartHorizontal />
      <BarChartMultiple />
      <BarChartLabel />
      <BarChartCustomLabel />
      <BarChartMixed />
      <BarChartStackedLegend />
      <BarChartActive />
      <BarChartNegative />
    </div>
  );
}

export default GraphColumn;
