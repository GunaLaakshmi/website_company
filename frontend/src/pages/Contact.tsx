import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",     // replace this
        "YOUR_TEMPLATE_ID",    // replace this
        form.current,
        "YOUR_PUBLIC_KEY"      // replace this
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-white">

      {/* Top Section */}
      <section className="bg-primary text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-200 text-lg">
          We'd love to hear from you. Send us your query anytime!
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-16">

          {/* Contact Form */}
          <div className="bg-[#0b1f3a] text-white p-10 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-semibold mb-8">
              Send Us a Message
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">

              <input
                type="text"
                name="subject"
                placeholder="Enter Subject"
                required
                className="w-full p-3 rounded-md bg-white text-black focus:outline-none"
              />

              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                required
                className="w-full p-3 rounded-md bg-white text-black focus:outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Number"
                required
                className="w-full p-3 rounded-md bg-white text-black focus:outline-none"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="w-full p-3 rounded-md bg-white text-black focus:outline-none"
              />

              <textarea
                name="message"
                placeholder="Enter Message"
                rows={4}
                required
                className="w-full p-3 rounded-md bg-white text-black focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="bg-white text-[#0b1f3a] font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition w-full"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-10 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-primary mb-8">
              Contact Information
            </h2>

            <div className="space-y-8 text-gray-600">

              <div>
                <h4 className="font-semibold text-primary mb-2">Address</h4>
                <p>
                  203, Nehru Street Ramnagar<br />
                  Chennai, 641xxx
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-2">Phone</h4>
                <p>0422 421 22 32</p>
                <p className="text-sm text-gray-500">
                  Mon to Sat 9:30am to 6:30pm
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-2">Email</h4>
                <p>info@accenttechnosoft.com</p>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}