"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Linkedin, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:reganmant06@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#090909]" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FFD000]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFD000]/20 bg-[#FFD000]/5 text-[#FFD000] text-xs font-semibold uppercase tracking-wider mb-5">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Great</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Have a project in mind? Tell me about it. I&apos;m always open to
            discussing new ideas and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center p-10 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-white/50">
                  Thanks for reaching out. I&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-[#0f0f0f] border border-white/8 rounded-2xl p-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/50 mb-2">
                      Your name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#FFD000]/40 focus:bg-white/8 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-2">
                      Email address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#FFD000]/40 focus:bg-white/8 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-2">
                    Tell me about your project
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="I need a website for my barbershop / I want to automate my follow-ups / ..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#FFD000]/40 focus:bg-white/8 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#FFD000] text-black font-semibold text-sm hover:bg-[#FFE033] transition-all duration-200 hover:shadow-[0_0_25px_rgba(255,208,0,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Side info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="p-6 rounded-2xl bg-[#0f0f0f] border border-white/8">
              <div className="w-10 h-10 rounded-xl bg-[#FFD000]/10 flex items-center justify-center mb-4">
                <Mail className="w-4 h-4 text-[#FFD000]" />
              </div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-white/45 text-sm">reganmant06@gmail.com</p>
            </div>

            <div className="p-6 rounded-2xl border border-[#FFD000]/20 bg-[#FFD000]/5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#FFD000] animate-pulse" />
                <span className="text-[#FFD000] text-sm font-semibold">
                  Available Now
                </span>
              </div>
              <p className="text-white/60 text-sm">
                Currently accepting new projects. Response time is usually within
                24 hours.
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/regan-mant-071425345/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-4 rounded-xl border border-white/10 bg-[#0f0f0f] text-sm font-semibold text-white/70 transition-colors hover:border-[#FFD000]/30 hover:text-[#FFD000]"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
