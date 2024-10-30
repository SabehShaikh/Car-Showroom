import CarCard from '@/components/CarCard';

export default function TeslaPage() {
    const teslaCars = [
        {
            brand: 'Tesla',
            model: 'Model S',
            image: '/images/tesla/model-s.jpg',
            price: '$94,990', // Approximate starting price for a Tesla Model S
        },
        {
            brand: 'Tesla',
            model: 'Model X',
            image: '/images/tesla/model-x.jpg',
            price: '$109,990', // Approximate starting price for a Tesla Model X
        },
        {
            brand: 'Tesla',
            model: 'Model 3',
            image: '/images/tesla/model-3.jpg',
            price: '$39,990', // Approximate starting price for a Tesla Model 3
        },
        {
            brand: 'Tesla',
            model: 'Model Y',
            image: '/images/tesla/model-y.jpg',
            price: '$49,990', // Approximate starting price for a Tesla Model Y
        },
        {
            brand: 'Tesla',
            model: 'Cybertruck',
            image: '/images/tesla/cybertruck.jpg',
            price: '$59,990', // Adjusted for a more accurate base price for the Cybertruck
        },
        {
            brand: 'Tesla',
            model: 'Roadster',
            image: '/images/tesla/roadster.jpg',
            price: '$200,000', // Approximate starting price for a Tesla Roadster
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl text-center font-bold mb-6">Tesla Cars</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {teslaCars.map((car, index) => (
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
