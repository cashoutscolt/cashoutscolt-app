import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <Navbar />  {/* Add Navbar here */}
      <div className="min-h-screen bg-gray-50 py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">About Us</h2>
        <p className="text-lg text-center mb-8">
          At CashOutsColt, we provide expert betting consulting services to help
          you make informed and profitable decisions.
        </p>
        <div className="text-center">
          <Link href="/" className="text-blue-500 underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
