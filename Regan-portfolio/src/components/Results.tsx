"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const metrics = [
  {
    value: 10000,
    suffix: "+",
    label: "TikTok Followers",
    description: "Organic growth built from zero on the SPRTED sports brand",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    value: 1,
    suffix: "",
    prefix: "",
    label: "SaaS Platform Built",
    description: "BarberVault — custom software built from scratch for barbershops",
    color: "text-[#FFD000]",
    bg: "bg-[#FFD000]/10",
    border: "border-[#FFD000]/20",
    display: "From Scratch",
  },
  {
    value: 3,
    suffix: "+",
    label: "Automation Systems",
    description: "Email, follow-up, and review workflows saving hours weekly",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    value: 100,
    suffix: "%",
    label: "Custom Built",
    description: "No page builders. No generic templates. Real code, real results.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
];

function CountUp({ value, duration = 1500 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<number | null>(null);

  const start = () => {
    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) ref.current = requestAnimationFrame(step);
    };
    ref.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    return () => {
      if (ref.current) cancelAnimationFrame(ref.current);
    };
  }, []);

  return <span data-start={start}>{count.toLocaleString()}</span>;
}

function MetricCard({ metric, index }: { metric: typeof metrics[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (inView && !triggered) {
      setTriggered(true);
    }
  }, [inView, triggered]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative p-8 rounded-2xl border ${metric.border} ${metric.bg} overflow-hidden card-hover`}
    >
      <div className="relative z-10">
        {metric.display ? (
          <div className={`text-4xl md:text-5xl font-bold mb-2 ${metric.color}`}>
            {metric.display}
          </div>
        ) : (
          <div className={`text-4xl md:text-5xl font-bold mb-2 ${metric.color}`}>
            {triggered && <CountUp value={metric.value} />}
            {!triggered && <span>0</span>}
            {metric.suffix}
          </div>
        )}
        <div className="text-white font-semibold text-lg mb-2">{metric.label}</div>
        <p className="text-white/45 text-sm leading-relaxed">{metric.description}</p>
      </div>
    </motion.div>
  );
}

export default function Results() {
  return (
    <section id="results" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#080808]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFD000]/20 bg-[#FFD000]/5 text-[#FFD000] text-xs font-semibold uppercase tracking-wider mb-5">
            Results
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Numbers That <span className="gradient-text">Matter</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Real outcomes across content, software, and automation work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((m, i) => (
            <MetricCard key={m.label} metric={m} index={i} />
          ))}
        </div>

        {/* Quote / CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 relative rounded-2xl border border-[#FFD000]/15 bg-gradient-to-br from-[#FFD000]/8 to-transparent p-10 text-center overflow-hidden"
        >
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative z-10">
            <p className="text-xl md:text-2xl font-medium text-white/80 max-w-2xl mx-auto leading-relaxed mb-6">
              &ldquo;Whether it&apos;s a website, a video, an automation system, or a full
              software product — I build things that actually move the needle for
              businesses.&rdquo;
            </p>
            <div className="text-[#FFD000] font-semibold">Regan Mant</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
