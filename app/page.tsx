import { Navbar } from "@/components/navbar";
import { Slider } from "@/components/slider";

export default function Home() {
  return (
    <main className="h-[100vh]">
      <Navbar />
      <div className="h-[15vh] w-full bg-transparent"></div>
      <div>
        <Slider />
      </div>
    </main>
  );
}
