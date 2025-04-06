export default function Pricing() {
    const plans = [
      {
        title: "Daily Picks",
        price: "$5",
        desc: "Full access to all picks for 24 hours",
      },
      {
        title: "Weekly Access",
        price: "$25",
        desc: "7 days of premium picks + bonus plays",
      },
      {
        title: "VIP Monthly",
        price: "$60",
        desc: "Full access, Discord chat, and 1-on-1 breakdowns",
      },
    ];
  
    return (
      <section id="pricing" className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Packages & Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center"
            >
              <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-gray-600 mb-4">{plan.desc}</p>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition mb-2">
                Buy with Stripe
              </button>
              <a
                href="https://cash.app/$YourCashtag"
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
    );
  }
  