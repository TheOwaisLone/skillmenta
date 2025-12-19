export default function Waitlist() {
  return (
    <section className="bg-slate-950 py-24 text-white fade-in">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">
          Join the <span className="text-indigo-400">SkillMenta</span> Waitlist
        </h2>

        <p className="mt-4 text-slate-400 max-w-xl mx-auto">
          We're building the backend right now. Email-based early access is
          coming soon.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            disabled
            placeholder="Email capture coming soon"
            className="w-full sm:w-96 px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 cursor-not-allowed"
          />

          <button
            disabled
            className="bg-slate-700 px-6 py-3 rounded-lg font-medium cursor-not-allowed"
          >
            Join Waitlist
          </button>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Backend integration planned. No data is collected yet.
        </p>
      </div>
    </section>
  );
}
