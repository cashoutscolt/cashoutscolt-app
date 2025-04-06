export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-b from-black to-gray-900 text-white text-center px-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">
          CashOutsColt
        </h1>
        <p className="text-lg sm:text-xl max-w-xl mb-8 text-gray-300">
          Daily NBA & CBB Prop Picks 🔥 Built Different. Confidence Rated. Always On Time.
        </p>
        <a
          href="#pricing"
          className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          View Packages
        </a>
      </section>
    );
  }
  