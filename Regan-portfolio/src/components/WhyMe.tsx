"use client";

import { motion } from "framer-motion";
import { Layers, Merge, Clock, Target } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Custom Solutions",
    description:
      "I don't rely on templates when a business needs something unique. Every project is built to solve your specific problem, not just look good.",
    number: "01",
  },
  {
    icon: Merge,
    title: "Content + Tech",
    description:
      "Most people can do one or the other. I combine both — so you get a partner who understands marketing AND can actually build the thing.",
    number: "02",
  },
  {
    icon: Clock,
    title: "Automation Focus",
    description:
      "I help businesses save time while improving customer experience. Less manual work, more consistent results, happier customers.",
    number: "03",
  },
  {
    icon: Layers,
    title: "End-to-End Thinking",
    description:
      "From design to deployment, content to conversions — I think about the full picture, not just my slice of it.",
    number: "04",
  },
];

export default function WhyMe() {
  return (
    <section id="why-me" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#090909]" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Yellow glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FFD000]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
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
              Not Just a{" "}
              <span className="gradient-text">Developer</span>
              <br />
              or a{" "}
              <span className="gradient-text">Creator</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              I sit at the intersection of technology and marketing — which means
              I understand what makes a business grow, not just what makes a
              website look good.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FFD000] text-black font-semibold hover:bg-[#FFE033] transition-colors duration-200"
            >
              Start a Conversation
            </a>
          </motion.div>

          {/* Right: cards */}
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
