import { Navbar } from "@/components/navbar";
import { Slider } from "@/components/slider";

export default function Home() {
  return (
    <main className="h-[100vh]">
      <Navbar />
      <div className="pt-24">
        <Slider />
      </div>
    </main>
  );
}
