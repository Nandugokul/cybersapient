import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/charts";

function CategoryBreakdownChart({ categoryChartData, selectedPeriod }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {selectedPeriod === "monthly" ? "Monthly" : "Weekly"} Spending
          Breakdown
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer>
          <BarChart data={categoryChartData}>
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
            <Bar
              dataKey="value"
              fill="rgb(0 0 0)"
              className="dark:fill-white"
              radius={[4, 4, 0, 0]}
              barSize={40}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default CategoryBreakdownChart;
