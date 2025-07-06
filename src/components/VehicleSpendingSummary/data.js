import { Fuel, Wrench, Car, DollarSign } from "lucide-react";

// Monthly spending data
export const monthlyData = [
  { month: "Jan", fuel: 1200, maintenance: 800, insurance: 1500, other: 300 },
  { month: "Feb", fuel: 1100, maintenance: 600, insurance: 0, other: 250 },
  { month: "Mar", fuel: 1300, maintenance: 1200, insurance: 0, other: 400 },
  { month: "Apr", fuel: 1000, maintenance: 400, insurance: 0, other: 200 },
  { month: "May", fuel: 1400, maintenance: 900, insurance: 0, other: 350 },
  { month: "Jun", fuel: 1250, maintenance: 700, insurance: 1500, other: 280 },
  { month: "Jul", fuel: 1350, maintenance: 1100, insurance: 0, other: 320 },
  { month: "Aug", fuel: 1150, maintenance: 500, insurance: 0, other: 180 },
  { month: "Sep", fuel: 1450, maintenance: 1300, insurance: 0, other: 450 },
  { month: "Oct", fuel: 1050, maintenance: 750, insurance: 1500, other: 290 },
  { month: "Nov", fuel: 1550, maintenance: 850, insurance: 0, other: 380 },
  { month: "Dec", fuel: 1300, maintenance: 950, insurance: 0, other: 310 },
];

// Weekly spending data
export const weeklyData = [
  { week: "Week 1", fuel: 300, maintenance: 200, insurance: 0, other: 80 },
  { week: "Week 2", fuel: 280, maintenance: 0, insurance: 0, other: 60 },
  { week: "Week 3", fuel: 320, maintenance: 150, insurance: 0, other: 90 },
  { week: "Week 4", fuel: 290, maintenance: 0, insurance: 0, other: 70 },
  { week: "Week 5", fuel: 350, maintenance: 250, insurance: 0, other: 100 },
  { week: "Week 6", fuel: 270, maintenance: 0, insurance: 0, other: 55 },
  { week: "Week 7", fuel: 330, maintenance: 180, insurance: 0, other: 85 },
  { week: "Week 8", fuel: 310, maintenance: 0, insurance: 0, other: 75 },
];

// Category breakdown data
export const categoryData = [
  { name: "Fuel", value: 6450, icon: Fuel },
  { name: "Maintenance", value: 4200, icon: Wrench },
  { name: "Insurance", value: 3000, icon: Car },
  { name: "Other", value: 1580, icon: DollarSign },
];

// Utility functions
export const calculateTotals = (data) => {
  return data.reduce((sum, item) => sum + item.value, 0);
};

export const calculateAverageMonthly = (totalSpending) => {
  return totalSpending / 12; // 12 months of data
};

export const calculateSpendingChange = (
  lastMonthSpending,
  previousMonthSpending
) => {
  if (!lastMonthSpending || !previousMonthSpending) return 0;

  const lastTotal = Object.values(lastMonthSpending).reduce(
    (sum, val) => sum + (typeof val === "number" ? val : 0),
    0
  );

  const previousTotal = Object.values(previousMonthSpending).reduce(
    (sum, val) => sum + (typeof val === "number" ? val : 0),
    0
  );

  return lastTotal - previousTotal;
};

export const prepareCategoryChartData = (categoryData, currentData) => {
  return categoryData.map((item) => ({
    name: item.name,
    value: currentData.reduce(
      (sum, period) => sum + period[item.name.toLowerCase()],
      0
    ),
  }));
};

export const preparePeriodChartData = (currentData) => {
  return currentData.map((period) => ({
    name: period.month || period.week,
    total: period.fuel + period.maintenance + period.insurance + period.other,
    fuel: period.fuel,
    maintenance: period.maintenance,
    insurance: period.insurance,
    other: period.other,
  }));
};
