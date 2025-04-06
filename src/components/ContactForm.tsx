export default function ContactForm() {
    return (
      <section id="contact" className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Get in Touch</h2>
        <form className="max-w-xl mx-auto flex flex-col gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="p-3 border rounded"
          />
          <textarea
            placeholder="Your message"
            className="p-3 border rounded min-h-[120px]"
          />
          <button
            type="submit"
            className="bg-black text-white py-3 rounded hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  }
  