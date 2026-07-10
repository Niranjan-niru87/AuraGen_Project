function Features() {
  const features = [
    {
      title: "Cognitive Load Detection",
      description:
        "Detects user frustration using mouse movement, hesitation, and click behavior.",
    },
    {
      title: "AI Generated UI",
      description:
        "Uses AI to generate simpler interfaces dynamically based on user behavior.",
    },
    {
      title: "Real-Time Adaptation",
      description:
        "Updates the interface instantly without refreshing the page.",
    },
    {
      title: "Secure Rendering",
      description:
        "Validates AI-generated components before displaying them.",
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-20 px-8">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
        Core Features
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-2xl font-semibold text-cyan-300">
              {feature.title}
            </h3>

            <p className="mt-4 text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;