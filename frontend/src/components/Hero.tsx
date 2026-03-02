export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-primary to-darknavy text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6 tracking-wide">
            Empowering Educators <br /> With Future Skills
          </h1>

          <p className="text-lg text-gray-200 mb-8">
            Learn modern teaching methodologies, leadership strategies,
            and technology skills to advance your academic career.
          </p>

          <div className="flex gap-4">
            
            {/* Services Button */}
            <a href="#services">
              <button className="bg-accent text-primary px-8 py-3 rounded-md font-semibold hover:opacity-90 transition">
                Our Services
              </button>
            </a>

            {/* About Button */}
            <a href="#about">
              <button className="border border-white px-8 py-3 rounded-md hover:bg-white hover:text-primary transition">
                About Us
              </button>
            </a>

          </div>
        </div>

        {/* Right Decorative Element */}
        <div className="hidden md:flex justify-center">
          <div className="bg-white/10 backdrop-blur-md h-80 w-80 rounded-xl shadow-2xl"></div>
        </div>

      </div>
    </section>
  );
}