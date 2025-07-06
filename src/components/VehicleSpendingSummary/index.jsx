"use client";

import { useState } from "react";
import SummaryCards from "./SummaryCards";
import ChartControls from "./ChartControls";
import CategoryBreakdownChart from "./CategoryBreakdownChart";
import PeriodTrendsChart from "./PeriodTrendsChart";
import SpendingInsights from "./SpendingInsights";
import {
  monthlyData,
  weeklyData,
  categoryData,
  calculateTotals,
  calculateAverageMonthly,
  calculateSpendingChange,
  prepareCategoryChartData,
  preparePeriodChartData,
} from "./data";

function VehicleSpendingSummary() {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");

  const currentData = selectedPeriod === "monthly" ? monthlyData : weeklyData;

  // Calculate totals
  const totalSpending = calculateTotals(categoryData);
  const avgMonthlySpending = calculateAverageMonthly(totalSpending);
  const lastMonthSpending = monthlyData[monthlyData.length - 1];
  const previousMonthSpending = monthlyData[monthlyData.length - 2];
  const spendingChange = calculateSpendingChange(
    lastMonthSpending,
    previousMonthSpending
  );

  // Prepare data for charts
  const categoryChartData = prepareCategoryChartData(categoryData, currentData);
  const periodChartData = preparePeriodChartData(currentData);

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Vehicle Spending Summary</h2>
        <p className="text-muted-foreground">
          Track your vehicle expenses and spending patterns
        </p>
      </div>

      {/* Summary Cards */}
      <SummaryCards
        totalSpending={totalSpending}
        avgMonthlySpending={avgMonthlySpending}
        lastMonthSpending={lastMonthSpending}
        spendingChange={spendingChange}
      />

      {/* Chart Controls */}
      <ChartControls
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
      />

      {/* Spending Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CategoryBreakdownChart
          categoryChartData={categoryChartData}
          selectedPeriod={selectedPeriod}
        />
        <PeriodTrendsChart
          periodChartData={periodChartData}
          selectedPeriod={selectedPeriod}
        />
      </div>

      {/* Spending Insights */}
      <SpendingInsights categoryData={categoryData} />
    </div>
  );
}

export default VehicleSpendingSummary;
