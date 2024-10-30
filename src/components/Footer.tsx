// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#C41C26] text-gray-200">
      <div className="container mx-auto py-10 flex flex-col lg:flex-row justify-between px-5">
        <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <Link href="/" className="flex font-bold text-gray-100">
            <Image
              className="w-20 h-auto"
              src="/logo.jpg"
              width={2000}
              height={2000}
              alt="Logo"
            />
          </Link>
          <p className="text-sm text-gray-300 mt-2">
            Your trusted car showroom since 2024.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <h2 className="text-lg  mb-2">Quick Links</h2>
          <Link href="/Toyota" className="hover:text-gray-300 mb-1">
            Toyota
          </Link>
          <Link href="/Honda" className="hover:text-gray-300 mb-1">
            Honda
          </Link>
          <Link href="/Tesla" className="hover:text-gray-300">
            Tesla
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/Sabeh420/"
              className="hover:text-[#4A90E2] transition-colors duration-300"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/shaikh_sabeh"
              className="hover:text-[#A1C8E4] transition-colors duration-300"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sabeh-shaikh-016623245/"
              className="hover:text-[#A5C6E8] transition-colors duration-300"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/SabehShaikh"
              className="hover:text-[#C0C0C0] transition-colors duration-300"
            >
              <FaGithub className="w-6 h-6 transition-transform transform hover:translate-y-[-3px]" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-[#A4131E] py-4 text-center">
        <p className="text-sm">
          © 2024 Car Showroom —
          <Link
            href="https://personal-portfolio-sabeh.vercel.app/"
            className="text-gray-100 ml-1 underline hover:text-gray-300"
            rel="noopener noreferrer"
            target="_blank"
          >
            Sabeh Shaikh
          </Link>
        </p>
      </div>
    </footer>
  );
}
