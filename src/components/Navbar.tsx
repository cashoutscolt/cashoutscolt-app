import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          CashOutsColt
        </Link>
        <div>
          <Link href="/" className="px-4 hover:underline">
            Home
          </Link>
          <Link href="/about" className="px-4 hover:underline">
            About
          </Link>
          <Link href="/pricing" className="px-4 hover:underline">
            Pricing
          </Link>
          <Link href="/contact" className="px-4 hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
