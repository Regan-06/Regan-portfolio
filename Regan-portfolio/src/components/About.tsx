"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#090909]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full aspect-square max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden border border-white/8"
            >
              <Image
                src="/regan-profile.jpg"
                alt="Regan"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/60 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 md:bottom-4 md:-right-8 px-4 py-2.5 rounded-xl bg-[#0f0f0f] border border-white/10 text-sm font-medium"
            >
              <span className="text-[#FFD000]">Developer</span>
              <span className="text-white/40 mx-1.5">/</span>
              <span className="text-white/80">Content Creator</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFD000]/20 bg-[#FFD000]/5 text-[#FFD000] text-xs font-semibold uppercase tracking-wider mb-6">
              About Me
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-5">
              Hey, I&apos;m Regan.
            </h2>

            <div className="space-y-4 text-white/55 text-base leading-relaxed">
              <p>
                I&apos;m a 19-year-old developer and content creator based in
                New Zealand. I got started by building SPRTED, a basketball
                content page that I grew to{" "}
                <span className="text-white/80 font-medium">
                  10K+ followers on TikTok
                </span>{" "}
                through consistent posting, video editing, and learning what
                makes people stop scrolling.
              </p>
              <p>
                That experience led me into web development and software. My
                biggest project is BarberVault, a booking and client management
                platform I built for barbershops.
              </p>
              <p>
                Today, I combine both skill sets to build websites, content, and
                practical software for businesses. I work directly with clients,
                keep communication straightforward, and focus on making things
                that are genuinely useful.
              </p>
            </div>

            <div className="mt-8 flex gap-6 text-sm text-white/40">
              <div>
                <div className="text-white font-semibold text-lg">10K+</div>
                <div>TikTok followers</div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="text-white font-semibold text-lg">3+</div>
                <div>Projects shipped</div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="text-white font-semibold text-lg">19</div>
                <div>Years old</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
