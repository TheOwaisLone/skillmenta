const faqs = [
  {
    q: "What is SkillMenta?",
    a: "SkillMenta is a mentor-driven learning platform focused on helping learners build real-world skills with clear guidance and structured roadmaps.",
  },
  {
    q: "Is SkillMenta free?",
    a: "SkillMenta is currently in its early stage. Initial access and learning resources will be free, with optional paid mentorship features added later.",
  },
  {
    q: "Who is SkillMenta for?",
    a: "SkillMenta is for students, fresh graduates, and early professionals who want clarity, direction, and practical skill growth.",
  },
  {
    q: "Will I receive certificates or internships?",
    a: "Yes, certificates and internship opportunities are part of the long-term roadmap. Details will be shared as the platform evolves.",
  },
  {
    q: "When does SkillMenta launch?",
    a: "SkillMenta is currently being built. Early users can join the waitlist to get access updates and early opportunities.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-slate-900 py-24 text-white fade-in">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">SkillMenta FAQs</h2>

        <div className="mt-16 space-y-6">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-slate-950 border border-slate-800 rounded-xl p-6"
            >
              <h3 className="font-semibold text-lg">{item.q}</h3>
              <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
