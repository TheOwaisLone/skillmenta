export default function CTA() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center bg-slate-950 border border-slate-800 rounded-2xl p-12">
        <h2 className="text-3xl font-bold">
          Don’t learn blindly.
          <br />
          Learn with <span className="text-indigo-400">SkillMenta</span>.
        </h2>

        <p className="mt-4 text-slate-400">
          Join early and be part of a focused, mentor-driven learning platform.
        </p>

        <button className="mt-8 bg-indigo-500 hover:bg-indigo-600 px-8 py-3 rounded-lg font-medium">
          Join the Waitlist
        </button>
      </div>
    </section>
  );
}
