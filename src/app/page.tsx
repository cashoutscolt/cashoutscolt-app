'use client';

<style jsx global>{`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fredericka+the+Great&family=Orbitron:wght@400;600;800&display=swap');
  body {
    font-family: 'Orbitron', sans-serif;
  }
`}</style>

// Temporary Hero and ContactForm stubs for preview
function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 text-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
      >
        <source src="/nite.mp4" type="video/mp4" />
      </video>
      <h1 className="text-6xl text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.7)] font-extrabold relative z-10" style={{ fontFamily: 'Fredericka the Great, cursive' }}>
        Cash Outs Colt
      </h1>
      <p className="mt-4 text-xl text-sky-400 relative z-10">Your go-to for expert consulting packages</p>
    </div>
  );
}

function ContactForm() {
  return (
    <div className="py-20 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <form className="max-w-lg mx-auto">
        <input
          type="email"
          placeholder="Your email"
          className="w-full p-4 mb-4 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your message"
          className="w-full p-4 mb-4 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-all shadow-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default function Home() {
  const plans = [
    {
      title: "Daily Picks",
      price: "$15",
      desc: "Full access to consulting insights for 24 hours",
      stripeDesc: "1-day consulting pass - get tailored insights, analysis, and expert input.",
      stripeUrl: "https://buy.stripe.com/6oE9D1fXBaPg3Uk3cd"
    },
    {
      title: "Weekly Access",
      price: "$50",
      desc: "7 days of premium consulting + custom reports",
      stripeDesc: "7-day access to daily insight reports, direct guidance, and tailored consulting breakdowns.",
      stripeUrl: "https://buy.stripe.com/cN28yX7r5cXo2Qg9AE"
    },
    {
      title: "VIP Monthly",
      price: "$100",
      desc: "Full consulting access, Discord support, and 1-on-1 breakdowns",
      stripeDesc: "30-day VIP consulting: daily insights, Discord chat, 1-on-1 sessions, and detailed analysis.",
      stripeUrl: "https://buy.stripe.com/8wM2az12H1eG76weUU"
    },
  ];

  const testimonials = [
    "Doubled my bankroll in 3 days - legit props.",
    "Colt's confidence ratings hit more than most capper cards.",
    "Tail or fade, but this dude's picks are consistent."
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white">
      <Hero />

      <section id="pricing" className="py-24 px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-white">Packages &amp; Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold mb-2 text-white">{plan.title}</h3>
              <p className="text-gray-300 mb-4">{plan.desc}</p>
              <p className="text-4xl font-bold mb-6 text-blue-400">{plan.price}</p>
              <a
                href={plan.stripeUrl}
                target="_blank"
                className="bg-blue-600 text-white px-6 py-3 rounded-full transition-all hover:bg-blue-700 glow-button mb-3 shadow-md"
                rel="noopener noreferrer"
              >
                Buy with Stripe
              </a>
              <a
                href="https://cash.app/$cashouts4e"
                target="_blank"
                className="text-blue-300 underline text-sm"
                rel="noopener noreferrer"
              >
                Or pay with Cash App
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="bg-gray-900 py-24 px-6 border-t border-gray-800">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white">What Bettors Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((quote, index) => (
            <blockquote
              key={index}
              className="p-6 bg-gray-800/50 backdrop-blur-md border-l-4 border-blue-500 rounded-xl shadow-sm text-white"
            >
              <p className="italic">“{quote.replaceAll("\"", "&quot;")}”</p>
              <cite className="block mt-3 text-right text-sm text-blue-400">- Verified User</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
