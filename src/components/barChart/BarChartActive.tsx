'use client';

import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from 'recharts';
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

export function BarChartActive() {
  const { chartData, chartConfig, color } = useChartData();

  console.log(chartConfig);

  return (
    <Card className="bg-gray-100 shadow-lg border-gray-200 lg:w-[30%] md:w-[40%] w-full mx-auto">
      <CardHeader>
        <CardTitle>Bar Chart - Active</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              fill={color}
              dataKey="desktop"
              strokeWidth={2}
              radius={8}
              activeIndex={2}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={0.8}
                    stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                );
              }}
            />
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
