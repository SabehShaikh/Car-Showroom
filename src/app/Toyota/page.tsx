import CarCard from "@/components/CarCard";

export default function ToyotaPage() {
    const toyotaCars = [
        {
            brand: "Toyota",
            model: "Corolla",
            image: "/images/toyota/corolla.jpg",
            price: "$23,000", // Approximate starting price for a Toyota Corolla
        },
        {
            brand: "Toyota",
            model: "Camry",
            image: "/images/toyota/camry.jpg",
            price: "$29,000", // Approximate starting price for a Toyota Camry
        },
        {
            brand: "Toyota",
            model: "Yaris",
            image: "/images/toyota/yaris.jpg",
            price: "$20,000", // Approximate starting price for a Toyota Yaris
        },
        {
            brand: "Toyota",
            model: "Land Cruiser",
            image: "/images/toyota/land-cruiser.jpg",
            price: "$89,000", // Approximate starting price for a Toyota Land Cruiser
        },
        {
            brand: "Toyota",
            model: "Hilux",
            image: "/images/toyota/hilux.jpg",
            price: "$50,000", // Approximate starting price for a Toyota Hilux
        },
        {
            brand: "Toyota",
            model: "Prius",
            image: "/images/toyota/prius.jpg",
            price: "$26,000", // Approximate starting price for a Toyota Prius
        },
    ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-center font-bold mb-6">Toyota Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {toyotaCars.map((car, index) => (
          <CarCard
            key={index}
            brand={car.brand}
            model={car.model}
            image={car.image}
            price={car.price}
          />
        ))}
      </div>
    </div>
  );
}
