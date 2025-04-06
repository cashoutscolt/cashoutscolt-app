import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const plans = [
    {
      title: "Daily Picks",
      price: "$15",
      desc: "Full access to consulting insights for 24 hours",
      stripeDesc: "1-day consulting pass - get tailored insights, analysis, and expert input.",
      stripeUrl: "https://buy.stripe.com/test_daily"
    },
    {
      title: "Weekly Access",
      price: "$50",
      desc: "7 days of premium consulting + custom reports",
      stripeDesc: "7-day access to daily insight reports, direct guidance, and tailored consulting breakdowns.",
      stripeUrl: "https://buy.stripe.com/test_weekly"
    },
    {
      title: "VIP Monthly",
      price: "$100",
      desc: "Full consulting access, Discord support, and 1-on-1 breakdowns",
      stripeDesc: "30-day VIP consulting: daily insights, Discord chat, 1-on-1 sessions, and detailed analysis.",
      stripeUrl: "https://buy.stripe.com/test_monthly"
    },
  ];

  const testimonials = [
    "Doubled my bankroll in 3 days - legit props.",
    "Colt's confidence ratings hit more than most capper cards.",
    "Tail or fade, but this dude's picks are consistent."
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />

      <section id="pricing" className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Packages &amp; Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center"
            >
              <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-gray-600 mb-4">{plan.desc}</p>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <a
                href={plan.stripeUrl}
                target="_blank"
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition mb-2 text-center"
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

      <section id="testimonials" className="bg-white py-16 px-6 border-t">
        <h2 className="text-3xl font-bold text-center mb-10">What Bettors Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((quote, index) => (
            <blockquote
              key={index}
              className="p-6 border-l-4 border-blue-600 bg-gray-100 rounded shadow"
            >
              <p className="italic">{quote.replaceAll("\"", "&quot;")}</p>
              <cite className="block mt-2 text-right text-sm">- Verified User</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <ContactForm />
    </main>
  );
}