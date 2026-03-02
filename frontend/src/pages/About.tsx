export default function About() {
  return (
    <div className="bg-white">

      {/* Top Section */}
      <section className="bg-primary text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            About Train The Trainer's Academy
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Empowering educators with modern teaching methodologies,
            technology integration, and leadership excellence.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Train The Trainer's Academy is a professional development
              institution dedicated to training teachers with the latest
              educational technologies, innovative teaching strategies,
              and modern classroom methodologies.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our goal is to equip educators with the skills and confidence
              needed to inspire students, improve learning outcomes,
              and create a future-ready education system.
            </p>
          </div>

          {/* Right Box */}
          <div className="bg-lightbg p-10 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6">
              To transform education by empowering teachers with modern
              tools, digital knowledge, and leadership capabilities.
            </p>

            <h3 className="text-2xl font-semibold text-primary mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To build a strong educational ecosystem where teachers
              inspire innovation and students gain practical,
              technology-driven knowledge.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-lightbg">
        <div className="max-w-7xl mx-auto px-10 text-center">
          <h2 className="text-4xl font-bold text-primary mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Modern Technology Training",
              "Practical Teaching Methods",
              "Professional Certification Programs",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {item}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We provide structured programs designed to help teachers
                  adapt to modern classrooms and enhance student learning.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}