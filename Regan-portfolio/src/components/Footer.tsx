"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-[#080808] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-white/30">
          © {year} Regan Mant. All rights reserved.
        </div>
        <nav className="flex items-center gap-6">
          {[
            ["Services", "#services"],
            ["Projects", "#projects"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-xs text-white/30 hover:text-white/70 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="text-xs text-white/20">
          Built with Next.js &amp; Tailwind
        </div>
      </div>
    </footer>
  );
}
