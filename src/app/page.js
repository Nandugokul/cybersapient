import CarDetails from "@/components/CarDetails";
import Benefits from "@/components/Benefits";
import VehicleSpendingSummary from "@/components/VehicleSpendingSummary";
function Home() {
  return (
    <div className="min-h-screen bg-background pt-20 overflow-hidden">
      <CarDetails />
      <Benefits />
      <VehicleSpendingSummary />
    </div>
  );
}

export default Home;
