export default function Home() {
  return (
    <div className="p-4">
      <header className="mb-10 mt-4 text-center">
        <h1 className="text-3xl  font-bold mb-4 ">
          Welcome to Our Car Showroom
        </h1>
        <p className="text-lg mb-4">
          We are excited to have you here! Explore our website to learn more
          about our vehicles, services, and the dedicated team that makes it all
          possible.
        </p>
        <p className="text-md text-lg">
          Whether you're looking for a reliable family car, an electric vehicle,
          or a luxury ride, we have something for everyone. Dive into our
          collection of brands below!
        </p>
      </header>

      {/* Toyota Section */}
      <section className="mb-8 p-4 bg-gray-100 rounded-md">
        <h2 className="text-2xl font-semibold mb-2">Explore Toyota</h2>
        <p className="mb-4">
          Discover our range of Toyota vehicles, known for their reliability and
          innovation. From the versatile Corolla to the robust Land Cruiser,
          Toyota offers something for everyone.
        </p>
        <a
          href="/Toyota"
          className="text-[#C41C26] font-semibold hover:underline"
        >
          View Toyota Models
        </a>
      </section>

      {/* Tesla Section */}
      <section className="mb-8 p-4 bg-gray-100 rounded-md">
        <h2 className="text-2xl font-semibold mb-2">Discover Tesla</h2>
        <p className="mb-4">
          Experience the future of driving with our range of Tesla electric
          vehicles. With cutting-edge technology and sustainability at their
          core, Tesla leads the way in electric mobility.
        </p>
        <a
          href="/Tesla"
          className="text-[#C41C26] font-semibold hover:underline"
        >
          View Tesla Models
        </a>
      </section>

      {/* Honda Section */}
      <section className="mb-8 p-4 bg-gray-100 rounded-md">
        <h2 className="text-2xl font-semibold mb-2">Check Out Honda</h2>
        <p className="mb-4">
          Honda vehicles are renowned for their performance and efficiency.
          Explore our selection, from the compact Fit to the spacious CR-V, and
          find your perfect match.
        </p>
        <a
          href="/Honda"
          className="text-[#C41C26] font-semibold hover:underline"
        >
          View Honda Models
        </a>
      </section>
    </div>
  );
}
