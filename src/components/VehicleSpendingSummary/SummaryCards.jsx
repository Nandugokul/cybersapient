import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Car } from "lucide-react";

function SummaryCards({
  totalSpending,
  avgMonthlySpending,
  lastMonthSpending,
  spendingChange,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Spending
              </p>
              <p className="text-2xl font-bold">
                ₹{totalSpending.toLocaleString()}
              </p>
            </div>
            <DollarSign className="h-8 w-8 text-slate-600 dark:text-slate-400" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Avg Monthly
              </p>
              <p className="text-2xl font-bold">
                ₹{avgMonthlySpending.toLocaleString()}
              </p>
            </div>
            <TrendingUp className="h-8 w-8 text-slate-600 dark:text-slate-400" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                This Month
              </p>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-bold">
                  ₹
                  {lastMonthSpending
                    ? Object.values(lastMonthSpending)
                        .reduce(
                          (sum, val) =>
                            sum + (typeof val === "number" ? val : 0),
                          0
                        )
                        .toLocaleString()
                    : 0}
                </p>
                <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  {spendingChange >= 0 ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  <span>{Math.abs(spendingChange)}</span>
                </div>
              </div>
            </div>
            <Car className="h-8 w-8 text-slate-600 dark:text-slate-400" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SummaryCards;
