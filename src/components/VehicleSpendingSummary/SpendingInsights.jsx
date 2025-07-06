import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function SpendingInsights({ categoryData }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Spending Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Top Expenses</h4>
            <div className="space-y-3">
              {categoryData
                .sort((a, b) => b.value - a.value)
                .map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      ₹{item.value.toLocaleString()}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Recommendations</h4>
            <div className="space-y-3">
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm">
                  <strong>Fuel Efficiency : </strong> Consider carpooling or
                  using public transport to reduce fuel costs by 15-20%.
                </p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm">
                  <strong>Maintenance : </strong> Regular servicing can prevent
                  costly repairs. Schedule your next service.
                </p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm">
                  <strong>Insurance : </strong> Compare insurance quotes
                  annually to get the best rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default SpendingInsights;
