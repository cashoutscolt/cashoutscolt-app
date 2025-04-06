import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";  // Import Hero if you want to use it

export default function Pricing() {
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
      stripeUrl: "https://buy.stripe.com/cN202rdPt6z062sdQS"
    },
    {
      title: "VIP Monthly",
      price: "$100",
      desc: "Full consulting access, Discord support, and 1-on-1 breakdowns",
      stripeDesc: "30-day VIP consulting: daily insights, Discord chat, 1-on-1 sessions, and detailed analysis.",
      stripeUrl: "https://buy.stripe.com/8wM2az12H1eG76weUU"
    },
  ];

  return (
    <div>
      <Navbar />
      <Hero /> {/* Optional Hero section */}
      <section id="pricing" className="bg-gray-50 py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Our Packages & Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-gray-600 mb-4">{plan.desc}</p>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <a
                href={plan.stripeUrl}
                target="_blank"
                className="bg-black text-white px-6 py-3 rounded-full mb-3 transition transform hover:scale-105 hover:bg-gray-800"
                rel="noopener noreferrer"
              >
                Buy with Stripe
              </a>
              <a
                href="https://cash.app/$cashouts4e"
                target="_blank"
                className="text-blue-600 underline text-sm"
                rel="noopener noreferrer"
              >
                Or pay with Cash App
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
