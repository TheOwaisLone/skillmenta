const testimonials = [
  {
    name: "Early Learner",
    role: "Computer Science Student",
    quote:
      "What I like about SkillMenta is the focus on clarity. Instead of random resources, it feels like someone is actually guiding you on what to learn next.",
  },
  {
    name: "Aspiring Mentor",
    role: "Industry Professional",
    quote:
      "The idea of mentoring students in a structured way is powerful. SkillMenta has the potential to bridge the gap between learning and real-world skills.",
  },
  {
    name: "Founder’s Note",
    role: "Why SkillMenta Exists",
    quote:
      "SkillMenta started from a simple problem — learners waste years due to lack of direction. This platform is being built to fix that, step by step.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          What People <span className="text-indigo-400">Say</span>
        </h2>

        <p className="mt-4 text-center text-slate-400 max-w-2xl mx-auto">
          Early thoughts from learners and professionals who resonate with the
          vision behind SkillMenta.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-indigo-500 transition"
            >
              <p className="text-slate-300 text-sm leading-relaxed">
                “{t.quote}”
              </p>

              <div className="mt-6">
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-slate-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
