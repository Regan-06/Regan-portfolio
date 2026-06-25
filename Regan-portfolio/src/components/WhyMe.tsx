"use client";

import { motion } from "framer-motion";
import { Layers, Merge, Clock, Target } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "No templates",
    description:
      "I build everything from scratch. If you need something specific, I'll figure it out. I don't just drop you into a theme and call it done.",
    number: "01",
  },
  {
    icon: Merge,
    title: "I get both sides",
    description:
      "I've grown an audience and shipped real software. That combo means I know what actually works, not just what looks good on a slide.",
    number: "02",
  },
  {
    icon: Clock,
    title: "Automation that sticks",
    description:
      "I set up systems that keep running after I'm gone, including follow-ups, reminders, and workflows. You stop doing things manually, and I make sure it's reliable.",
    number: "03",
  },
  {
    icon: Layers,
    title: "I think about the full picture",
    description:
      "I don't just build what you asked for. I think about why you need it and whether there's a better way to get there.",
    number: "04",
  },
];

export default function WhyMe() {
  return (
    <section id="why-me" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#090909]" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FFD000]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFD000]/20 bg-[#FFD000]/5 text-[#FFD000] text-xs font-semibold uppercase tracking-wider mb-6">
              Why Work With Me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Not just a developer.
              <br />
              <span className="text-[#FFD000]">Not just a creator.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Most people do one or the other. I do both, which means I
              actually understand what you&apos;re trying to achieve, not just
              what you asked me to build.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FFD000] text-black font-semibold hover:bg-[#FFE033] transition-colors duration-200"
            >
              Start a Conversation
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-6 rounded-2xl bg-[#0f0f0f] border border-white/8 card-hover overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-4xl font-bold text-white/4 group-hover:text-[#FFD000]/10 transition-colors">
                  {r.number}
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-[#FFD000]/10 flex items-center justify-center mb-4">
                    <r.icon className="w-4 h-4 text-[#FFD000]" />
                  </div>
                  <h3 className="font-bold mb-2 text-base">{r.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
