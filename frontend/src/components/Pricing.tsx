export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "₹5,000",
      features: ["Access to 1 Course", "Certificate", "Email Support"],
    },
    {
      name: "Professional",
      price: "₹10,000",
      features: ["Access to 3 Courses", "Certificate", "Priority Support"],
      highlight: true,
    },
    {
      name: "Advanced",
      price: "₹15,000",
      features: [
        "Unlimited Courses",
        "Certificate",
        "1-on-1 Mentorship",
        "Career Guidance",
      ],
    },
  ];

  return (
    <section className="bg-primary py-24">
      <div className="max-w-7xl mx-auto px-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-300">
            Flexible pricing options designed for educators at every level.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-xl p-10 text-center shadow-lg transition duration-300 ${
                plan.highlight
                  ? "bg-white text-primary scale-105"
                  : "bg-darknavy text-white"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-6">
                {plan.name}
              </h3>

              <p
                className={`text-4xl font-bold mb-8 ${
                  plan.highlight ? "text-primary" : "text-accent"
                }`}
              >
                {plan.price}
              </p>

              <ul className="space-y-3 mb-8 text-sm opacity-90">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <button
                className={`px-6 py-2 rounded-md font-semibold transition ${
                  plan.highlight
                    ? "bg-primary text-white hover:bg-darknavy"
                    : "bg-accent text-primary hover:opacity-90"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}