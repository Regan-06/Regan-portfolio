"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import ScrambleText from "./ScrambleText";
import MagneticButton from "./MagneticButton";

const fadeUp = (booted: boolean, delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: booted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

export default function Hero({ booted }: { booted: boolean }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808]/30 to-[#080808]" />
      <div className="absolute inset-y-0 left-[8%] w-px bg-white/[0.05]" />
      <div className="absolute inset-y-0 right-[8%] w-px bg-white/[0.05]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div {...fadeUp(booted, 0.1)} className="mb-8 flex items-center justify-between border-y border-white/10 py-3">
          <div className="studio-label flex items-center gap-3 text-[10px] text-white/45">
            <span className="h-2 w-2 bg-[#FFD000] animate-pulse" />
            Available for new projects
          </div>
          <div className="studio-label hidden text-[10px] text-white/70 sm:block">
            Auckland / NZT / 2026
          </div>
        </motion.div>

        <motion.h1
          {...fadeUp(booted, 0.2)}
          className="display-font text-left text-[4.2rem] sm:text-7xl md:text-8xl lg:text-[8.5rem] font-bold leading-[0.82] mb-8"
        >
          <span className="block text-white"><ScrambleText text="Websites" delay={200} trigger={booted} /></span>
          <span className="block text-[#FFD000]"><ScrambleText text="Content" delay={500} trigger={booted} /></span>
          <span className="block text-white">
            <ScrambleText text="Software" delay={800} trigger={booted} /><span className="text-white">.</span>
          </span>
        </motion.h1>

        <div className="grid gap-8 border-t border-white/10 pt-7 md:grid-cols-[1fr_auto] md:items-end">
          <motion.p
            {...fadeUp(booted, 0.35)}
            className="max-w-2xl text-base md:text-lg text-white/55 leading-relaxed"
          >
            I&apos;m Regan, a developer and video editor who helps businesses
            grow online through custom sites, video, and useful software.
          </motion.p>

          <motion.div
            {...fadeUp(booted, 0.5)}
            className="flex flex-col sm:flex-row items-stretch gap-3"
          >
            <MagneticButton>
              <a
                href="#contact"
                className="group studio-label inline-flex items-center justify-center gap-3 bg-[#FFD000] px-6 py-4 text-xs font-bold text-black transition-colors hover:bg-white"
              >
                Start a project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#projects"
                className="studio-label inline-flex items-center justify-center gap-3 border border-white/15 px-6 py-4 text-xs text-white/80 transition-colors hover:border-white hover:text-white"
              >
                <Play size={14} fill="currentColor" />
                View work
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(booted, 0.65)}
          className="mt-14 grid grid-cols-2 border border-white/10 bg-black/30"
        >
          {[
            { value: "10.7K", label: "TikTok Followers" },
            { value: "100%", label: "Custom Solutions" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-4 border-r border-white/10 p-4 md:p-5">
              <div className="display-font text-3xl md:text-4xl font-bold text-[#FFD000]">{s.value}</div>
              <div className="studio-label text-[9px] text-white/40">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div {...fadeUp(booted, 0.8)} className="mt-8">
          <div className="studio-label mb-2 flex justify-between text-[9px] text-white/25">
            <span>00:00:00</span>
            <span>00:00:08</span>
            <span>00:00:16</span>
            <span>00:00:24</span>
          </div>
          <div className="timeline-rule" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={booted ? { opacity: 1 } : { opacity: 0 }}
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
