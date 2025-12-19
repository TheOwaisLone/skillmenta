export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white pt-16 fade-in">
      <div className="max-w-4xl text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Learn with <span className="text-indigo-400">direction</span>.<br />
          Grow with <span className="text-sky-400">mentorship</span>.
        </h1>

        <p className="mt-6 text-lg text-slate-400">
          SkillMenta helps learners build real-world skills with guided
          mentorship and structured learning paths — without confusion or wasted
          effort.
        </p>
        <p className="mt-6 text-lg text-slate-400">
          We provide project-based technical training and internships for
          college students, focused on real-world skills.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg font-medium">
            Get Early Access
          </button>
          <button className="border border-slate-700 hover:border-slate-500 px-6 py-3 rounded-lg font-medium text-slate-300">
            Become a Mentor
          </button>
        </div>
      </div>
    </section>
  );
}
