export default function MentorsCTA() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold">
              Are you an{" "}
              <span className="text-indigo-400">Industry Professional</span>?
            </h2>

            <p className="mt-4 text-slate-400">
              SkillMenta is building a mentorship-driven learning ecosystem. If
              you enjoy guiding learners, sharing real-world experience, and
              making impact — we’d love to have you onboard.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button className="bg-indigo-500 hover:bg-indigo-600 px-8 py-3 rounded-lg font-medium">
              Become a Mentor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
