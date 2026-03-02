export default function Testimonials() {
  const testimonials = [
    {
      text: "The training program completely transformed my teaching methodology. Highly structured and practical.",
      name: "Dr. Priya Sharma",
      role: "Senior Lecturer",
    },
    {
      text: "Professional guidance, excellent curriculum, and real-world exposure. A truly valuable experience.",
      name: "Mr. Arjun Rao",
      role: "Academic Coordinator",
    },
    {
      text: "The mentorship and support system were outstanding. I feel more confident in my career growth.",
      name: "Ms. Kavya Reddy",
      role: "Educator",
    },
  ];

  return (
    <section className="py-24 bg-lightbg">
      <div className="max-w-6xl mx-auto px-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-primary mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-600">
            Hear from educators who have advanced their careers through our academy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{t.text}"
              </p>

              <div>
                <h4 className="font-semibold text-primary">
                  {t.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}