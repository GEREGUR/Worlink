const car = {
  price: 10000000,
  title: "Hongqi",
  model: "H5",
  status: true,
  year: 2023,
  color: "black",
  engine: "Electro",
};

export const CarPage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center text-white">
      <h1>{car.title}</h1>
      <h2>{car.model}</h2>
      <span>{car.price}</span>
      <ul className="grid grid-cols-2 gap-4">
        <li>
          <p>{car.status ? <div>В наличии</div> : <div>Нет в наличии</div>}</p>
        </li>
        <li>
          <p>{car.year}</p>
        </li>
        <li>
          <p>{car.color}</p>
        </li>
        <li>
          <p>{car.engine}</p>
        </li>
      </ul>
    </div>
  );
};
