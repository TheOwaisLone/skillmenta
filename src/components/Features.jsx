const features = [
  {
    title: "Mentor-Guided Learning",
    desc: "Learn directly with guidance from experienced mentors, not random tutorials.",
  },
  {
    title: "Clear Skill Roadmaps",
    desc: "Step-by-step paths so you always know what to learn next.",
  },
  {
    title: "Career-Oriented Focus",
    desc: "Skills aligned with real industry and job requirements.",
  },
  {
    title: "No Learning Confusion",
    desc: "No overwhelm. No guessing. Just structured growth.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-900 py-24 text-white fade-in">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          Why Skill<span className="text-indigo-400">Menta</span>?
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-indigo-500 transition"
            >
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-3 text-slate-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
