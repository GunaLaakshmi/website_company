import ai from "../assets/ai.jpg";
import data from "../assets/data.jpg";
import fullstack from "../assets/fullstack.jpg";

export default function Courses() {
  const courses = [
    {
      title: "Full Stack Development",
      desc: "Learn React, Node, and modern web technologies.",
      img: fullstack,
    },
    {
      title: "Artificial Intelligence",
      desc: "Master ML, Deep Learning & real-world AI projects.",
      img: ai,
    },
    {
      title: "Data Science",
      desc: "Python, Pandas, Data Visualization & Analytics.",
      img: data,
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-primary mb-4">
            Our Popular Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Upgrade your teaching expertise with industry-relevant programs
            designed for modern educators.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {courses.map((c, i) => (
            <div
              key={i}
              className="bg-lightbg rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={c.img}
                alt={c.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {c.title}
                </h3>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {c.desc}
                </p>

                <button className="bg-primary text-white px-5 py-2 rounded-md text-sm hover:bg-darknavy transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}