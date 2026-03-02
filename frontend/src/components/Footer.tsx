export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-3 gap-8">
        
        {/* Academy Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Train The Trainer's Academy
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Empowering educators with modern teaching skills,
            leadership strategies, and professional development programs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-accent">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">Courses</li>
            <li className="hover:text-white transition cursor-pointer">Pricing</li>
            <li className="hover:text-white transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-accent">
            Contact Us
          </h4>
          <p className="text-sm text-gray-300">Email: info@tttacademy.com</p>
          <p className="text-sm text-gray-300">Phone: +91 98765 43210</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2026 Train The Trainer's Academy. All Rights Reserved.
      </div>
    </footer>
  );
}