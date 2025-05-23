'use client';

import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, Cell, LabelList } from 'recharts';
import { useChartData } from '@/ChartDataContext';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export function BarChartNegative() {
  const { chartData, chartConfig, color } = useChartData();
  return (
    <Card className="bg-gray-100 shadow-lg border-gray-200 lg:w-[30%] md:w-[40%] w-full mx-auto">
      <CardHeader>
        <CardTitle>Bar Chart - Negative</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel hideIndicator />}
            />
            <Bar dataKey="desktop">
              <LabelList position="top" dataKey="month" fillOpacity={1} />
              {chartData.map((item) => (
                <Cell key={item.month} fill={color} radius={4}/>
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Dados de teste <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">Teste de Dados</div>
      </CardFooter>
    </Card>
  );
}
