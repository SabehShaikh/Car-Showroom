import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="text-gray-200 bg-[#D71920]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <Link href="/" className="items-center text-white mb-4 md:mb-0">
          <Image
            className="w-20 h-auto"
            src="/logo.jpg"
            width={2000}
            height={2000}
            alt="Logo"
          />
        </Link>
        <nav className="md:ml-auto flex flex-wrap">
          <ul className="flex space-x-6">
            <li>
              <Link href="/Toyota" className="text-white hover:text-gray-300">
                Toyota
                <span></span>
              </Link>
            </li>
            <li>
              <Link href="/Honda" className="text-white  hover:text-gray-300">
                Honda
                <span></span>
              </Link>
            </li>
            <li>
              <Link href="/Tesla" className="text-white hover:text-gray-300">
                Tesla
                <span></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
