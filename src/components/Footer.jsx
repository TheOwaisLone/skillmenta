export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 text-slate-400 fade-in">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© 2025 SkillMenta. All rights reserved.</p>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white">
            LinkedIn
          </a>
          <a href="mailto:contact@skillmenta.com" className="hover:text-white">
            contact@skillmenta.com
          </a>
        </div>
      </div>
    </footer>
  );
}
