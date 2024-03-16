import { Button } from "@/components/button";
import { CarPage } from "@/components/carPage";
import { Navbar } from "@/components/navbar";
import { Slider } from "@/components/slider";

const car = {
  price: 10000000,
  title: "Hongqi",
  model: "H5",
  status: true,
  year: 2023,
  color: "black",
  engine: "Electro",
};

export default function Home() {
  return (
    <main className="h-[100vh] w-full">
      <Navbar />
      <div className="h-[15vh] w-full bg-transparent"></div>
      <div>
        <Slider />
      </div>
      <CarPage />
      <div className="flex w-full items-center justify-center">
        <div className="w-[60vh]">
          <Button text={"Быстрая покупка"} />
          <Button text={"Сравнить"} />
        </div>
      </div>
    </main>
  );
}
