import CarCard from '@/components/CarCard';

export default function HondaPage() {
    const hondaCars = [
        {
          brand: 'Honda',
          model: 'Civic',
          image: '/images/honda/civics.jpg',
          price: '$23,000', // Approximate price for a new Honda Civic
        },
        {
          brand: 'Honda',
          model: 'Accord',
          image: '/images/honda/accord.jpg',
          price: '$28,000', // Approximate price for a new Honda Accord
        },
        {
          brand: 'Honda',
          model: 'City',
          image: '/images/honda/city.jpg',
          price: '$15,000', // Approximate price for a new Honda City
        },
        {
          brand: 'Honda',
          model: 'CR-V',
          image: '/images/honda/crv.jpg',
          price: '$31,000', // Approximate price for a new Honda CR-V
        },
        {
          brand: 'Honda',
          model: 'HR-V',
          image: '/images/honda/hr-v.jpg',
          price: '$25,000', // Approximate price for a new Honda HR-V
        },
        {
          brand: 'Honda',
          model: 'Fit',
          image: '/images/honda/fit.jpg',
          price: '$16,000', // Approximate price for a new Honda Fit
        },
      ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-center font-bold mb-6">Honda Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hondaCars.map((car, index) => (
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
