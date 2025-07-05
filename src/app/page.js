import CarDetails from "@/components/CarDetails";
import Benefits from "@/components/Benefits";

function Home() {
  return (
    <div className="min-h-screen bg-background pt-20 overflow-hidden">
      <CarDetails />
      <Benefits />
    </div>
  );
}

export default Home;
