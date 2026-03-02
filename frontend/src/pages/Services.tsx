export default function Services() {
  return (
    <div className="bg-white">

      {/* Top Section */}
      <section className="bg-primary text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Professional training programs and modern educational solutions
            designed to empower teachers and enhance student learning.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-10 text-center">

          <h2 className="text-4xl font-bold text-primary mb-14">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Card 1 */}
            <div className="bg-[#0b1f3a] text-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
              <h3 className="text-xl font-semibold mb-4">
                Teacher Training
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Modern teaching methodologies, classroom management,
                and engagement strategies to enhance educator performance.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0b1f3a] text-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
              <h3 className="text-xl font-semibold mb-4">
                Educational Technology
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Smart classroom tools, digital platforms, and AI-based
                learning integration for modern education systems.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0b1f3a] text-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
              <h3 className="text-xl font-semibold mb-4">
                Certification Programs
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Professional development courses designed to build
                leadership, curriculum, and academic excellence.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#0b1f3a] text-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
              <h3 className="text-xl font-semibold mb-4">
                Student Knowledge Support
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Empowering teachers to create innovative learning
                environments that improve student understanding.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}