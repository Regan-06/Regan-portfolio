"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Video, Zap, Code2 } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Websites",
    description:
      "Professional websites that convert visitors into customers. Fast, modern, and built to rank.",
    features: [
      "Modern business websites",
      "High-converting landing pages",
      "Mobile optimisation",
      "Booking integrations",
    ],
    accent: "from-blue-500/20 to-blue-600/5",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: Video,
    title: "Content Creation",
    description:
      "Scroll-stopping content that grows your audience and builds your brand across platforms.",
    features: [
      "Short-form video editing",
      "Social media content",
      "Reels and TikToks",
      "Graphics & promo assets",
    ],
    accent: "from-purple-500/20 to-purple-600/5",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
  },
  {
    icon: Zap,
    title: "Automation",
    description:
      "Remove the repetitive tasks from your day so you can focus on what actually matters.",
    features: [
      "Email reminders",
      "Customer follow-up systems",
      "Review request workflows",
      "Client retention automations",
    ],
    accent: "from-[#FFD000]/20 to-[#FFD000]/5",
    iconBg: "bg-[#FFD000]/10",
    iconColor: "text-[#FFD000]",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Tailor-built tools and platforms that solve real business problems without generic templates.",
    features: [
      "Booking systems",
      "Client management systems",
      "Internal dashboards",
      "Industry-specific solutions",
    ],
    accent: "from-emerald-500/20 to-emerald-600/5",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#0a0a0a] to-[#080808]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFD000]/20 bg-[#FFD000]/5 text-[#FFD000] text-xs font-semibold uppercase tracking-wider mb-5">
            What I Do
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services Built for{" "}
            <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Everything a growing service business needs, including websites,
            content, automation, and software, under one roof.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              className="group relative p-8 rounded-2xl border border-white/8 bg-[#0f0f0f] card-hover overflow-hidden cursor-default"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${s.iconBg} mb-6`}
                >
                  <s.icon className={`w-5 h-5 ${s.iconColor}`} />
                </div>

                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {s.description}
                </p>

                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-white/70">
                      <span className="w-1 h-1 rounded-full bg-[#FFD000] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
