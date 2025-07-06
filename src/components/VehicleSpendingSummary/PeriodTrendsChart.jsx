import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/charts";

function PeriodTrendsChart({ periodChartData, selectedPeriod }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {selectedPeriod === "monthly" ? "Monthly" : "Weekly"} Trends
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer>
          <LineChart data={periodChartData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="name"
              className="text-xs text-muted-foreground"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              className="text-xs text-muted-foreground"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `₹${value.toLocaleString()}`}
            />
            <Tooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="total"
              stroke="rgb(0 0 0)"
              className="dark:stroke-white"
              strokeWidth={3}
              dot={{
                fill: "rgb(0 0 0)",
                stroke: "rgb(0 0 0)",
                strokeWidth: 2,
                r: 4,
                className: "dark:fill-white dark:stroke-white",
              }}
              activeDot={{
                r: 6,
                stroke: "rgb(0 0 0)",
                strokeWidth: 2,
                fill: "rgb(0 0 0)",
                className: "dark:stroke-white dark:fill-white",
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default PeriodTrendsChart;
