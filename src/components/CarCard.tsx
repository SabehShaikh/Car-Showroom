import Image from "next/image";
import Link from "next/link";

interface CarCardProps {
  brand: string;
  model: string;
  image: string;
  price: string;
}

export default function CarCard({ brand, model, image, price }: CarCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <a className="block relative h-64 rounded overflow-hidden">
        <Image
          alt={model}
          className="object-cover object-center w-full h-full block"
          src={image}
          width={1000}
          height={1000}
        />
      </a>
      <div className="p-5">
        <h3 className="text-gray-500 text-xs tracking-widest  mb-1">{brand}</h3>
        <h2 className="text-gray-900 text-lg font-medium">{model}</h2>
        <p className="mt-1 text-gray-900 font-bold text-xl">{price}</p>
        <Link href="#" className="mt-2 text-blue-500 inline-flex items-center">
          Learn More
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-3-3l3 3-3 3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
