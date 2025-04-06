import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar /> {/* Navbar at the top */}
      <section
        className="relative bg-cover bg-center h-[400px]"
        style={{ backgroundImage: "url('/path/to/your-image.jpg')" }} // Replace with your image
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center text-center h-full">
          <h1 className="text-5xl font-bold text-white">Get Expert Betting Insights</h1>
          <p className="text-xl text-white mt-4">Maximize your returns with professional consulting</p>
          <a
            href="#pricing"
            className="mt-6 bg-white text-black px-8 py-3 rounded-full text-xl"
          >
            See Our Packages
          </a>
        </div>
      </section>
      {/* Add more content if needed */}
    </div>
  );
}
