const steps = [
  {
    step: "01",
    title: "Choose Your Goal",
    desc: "Select a skill or career path you want to grow into.",
  },
  {
    step: "02",
    title: "Learn with Guidance",
    desc: "Follow structured learning with mentor support.",
  },
  {
    step: "03",
    title: "Build & Move Forward",
    desc: "Gain confidence, skills, and career readiness.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-950 py-24 text-white fade-in">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          How It <span className="text-sky-400">Works</span>
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-indigo-500">{s.step}</div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
