"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#090909]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Photo — editorial frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-sm mx-auto md:mx-0 w-full"
          >
            {/* Yellow left bar */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FFD000] z-10" />

            {/* Corner marks */}
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-white/30 z-10" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-white/30 z-10" />

            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden ml-3">
              <Image
                src="/regan-profile.jpg"
                alt="Regan"
                fill
                className="object-cover object-top grayscale-[15%]"
                sizes="(max-width: 768px) 100vw, 384px"
              />
              {/* Subtle bottom fade into section bg */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/40 via-transparent to-transparent" />
            </div>

            {/* Studio label bottom-left */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute bottom-4 left-6 studio-label text-[9px] text-white/40 tracking-widest"
            >
              REGAN MANT / NZL / 2026
            </motion.div>

            {/* Badge top-right */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -right-4 top-8 studio-label text-[9px] font-bold px-3 py-2 bg-[#FFD000] text-black"
            >
              DEV / EDITOR
            </motion.div>
          </motion.div>

          {/* Text */}
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
                I&apos;m a 19-year-old developer and video editor based in
                New Zealand. I first started editing highlights from social
                basketball games with my mates. That grew into SPRTED, where I
                created fast-paced NBA and NRL content and built the page to{" "}
                <span className="text-white/80 font-medium">
                  10.7K followers on TikTok
                </span>{" "}
                by testing what catches attention and performs well.
              </p>
              <p>
                BarberVault started after I visited the barbershop where a mate
                of mine works. I looked at how the shop operated and started
                thinking about tools that could genuinely help, including
                follow-up emails, a digital queue, saved notes and photos from
                previous cuts, and clearer shop analytics.
              </p>
              <p>
                I turned those ideas into a working platform that is available
                for the shop to use today. That is how I approach projects: learn
                how a business actually works, find useful problems to solve,
                then build around them.
              </p>
            </div>

            <div className="mt-8 flex gap-6 text-sm text-white/40">
              <div>
                <div className="text-white font-semibold text-lg">10.7K</div>
                <div>TikTok followers</div>
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
