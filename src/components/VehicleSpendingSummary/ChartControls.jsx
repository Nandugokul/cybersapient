function ChartControls({ selectedPeriod, setSelectedPeriod }) {
  return (
    <div className="flex justify-center">
      <div className="flex bg-muted rounded-lg p-1">
        <button
          onClick={() => setSelectedPeriod("monthly")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            selectedPeriod === "monthly"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setSelectedPeriod("weekly")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            selectedPeriod === "weekly"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Weekly
        </button>
      </div>
    </div>
  );
}

export default ChartControls;
