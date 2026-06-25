"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808]/30 to-[#080808]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FFD000]/8 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] w-72 h-72 bg-[#FFD000]/5 rounded-full blur-[80px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-[5%] w-64 h-64 bg-[#FFD000]/4 rounded-full blur-[80px] pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFD000]/20 bg-[#FFD000]/5 text-[#FFD000] text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD000] animate-pulse" />
            Available for new projects
          </div>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          Websites.{" "}
          <span className="text-[#FFD000]">Content.</span>
          <br />
          <span className="text-white">Software.</span>
          <br />
          <span className="text-white/90">Built by me.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.35)}
          className="text-lg md:text-xl text-white/55 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          I&apos;m Regan &mdash; a developer and content creator who helps
          businesses grow online. Whether it&apos;s a custom site, a video, or
          an automation that saves you hours every week, I handle it.
        </motion.p>

        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#FFD000] text-black font-semibold text-base hover:bg-[#FFE033] transition-all duration-200 hover:shadow-[0_0_30px_rgba(255,208,0,0.4)]"
          >
            Let&apos;s Work Together
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-white/80 font-medium text-base hover:border-white/25 hover:text-white transition-all duration-200 hover:bg-white/5"
          >
            View My Work
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.65)}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {[
            { value: "10K+", label: "TikTok Followers" },
            { value: "100%", label: "Custom Solutions" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#FFD000]">{s.value}</div>
              <div className="text-xs text-white/40 mt-0.5 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/20 hover:text-white/40 transition-colors cursor-pointer"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
