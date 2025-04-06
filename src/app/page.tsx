import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CashOutsColtSite() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <header className="text-center py-20 bg-gradient-to-b from-blue-950 to-blue-800 text-white">
        <h1 className="text-5xl font-bold">CashOutsColt</h1>
        <p className="text-xl mt-4 max-w-xl mx-auto">Daily NBA & CBB Player Props with Confidence Ratings, Delivered to Your Inbox.</p>
        <Button className="mt-6 text-lg px-6 py-3" asChild>
          <a href="#pricing">View Packages</a>
        </Button>
      </header>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Packages & Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[ 
            {
              title: "Daily Picks",
              price: "$15",
              desc: "Full access for 24 hours",
              stripeUrl: "https://buy.stripe.com/6oE9D1fXBaPg3Uk3cd"
            },
            {
              title: "Weekly Package",
              price: "$50",
              desc: "7 days of sharp picks + bonus threads",
              stripeUrl: "https://buy.stripe.com/cN202rdPt6z062sdQS"
            },
            {
              title: "VIP Monthly",
              price: "$100",
              desc: "Full access, bonus content, 1-on-1 DM support",
              stripeUrl: "https://buy.stripe.com/8wM2az12H1eG76weUU"
            },
          ].map((plan) => (
            <Card key={plan.title} className="bg-white shadow-md">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold">{plan.title}</h3>
                <p className="text-lg text-gray-600">{plan.desc}</p>
                <p className="text-3xl font-bold">{plan.price}</p>
                <a
                  href={plan.stripeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full">Buy with Stripe</Button>
                </a>
                <a
                  href="https://cash.app/$cashouts4e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-blue-600 underline mt-2"
                >
                  Pay with Cash App
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-6 bg-white border-t">
        <h2 className="text-3xl font-bold text-center mb-10">What Bettors Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Doubled my bankroll in 2 weeks.", "Colt is my go-to for props.", "No fluff, just W's."].map((quote, idx) => (
            <blockquote key={idx} className="p-6 border-l-4 border-blue-600 bg-gray-100">
              <p className="italic">"{quote}"</p>
              <cite className="block mt-2 text-right">– Verified User</cite>
            </blockquote>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-6 bg-gray-50 border-t">
        <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[ 
            { q: "How are picks delivered?", a: "You’ll receive picks by email daily and can optionally join our Discord." },
            { q: "Do you track performance?", a: "Yes. Our records are available upon request and updated weekly." },
            { q: "Is payment secure?", a: "All payments are processed securely via Stripe. Cash App is also supported." }
          ].map((item, idx) => (
            <details key={idx} className="border p-4 rounded-md bg-white">
              <summary className="cursor-pointer font-medium text-lg">{item.q}</summary>
              <p className="mt-2 text-gray-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white border-t text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-6 text-gray-600">Have a question? Drop your email and I’ll reach out.</p>
        <div className="flex justify-center gap-4 max-w-md mx-auto">
          <Input placeholder="Your email" className="bg-gray-100 text-black" />
          <Button>Submit</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white text-center py-6 mt-10 border-t">
        <p className="text-sm">&copy; {new Date().getFullYear()} CashOutsColt. All rights reserved.</p>
      </footer>
    </div>
  );
}