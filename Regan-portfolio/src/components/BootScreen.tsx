"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  "> Initializing REGAN.OS v2026...",
  "> Loading modules: [web_dev] [video_editing] [design]",
  "> Connecting to portfolio server...",
  "> All systems operational.",
];

export default function BootScreen() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [showPrompt, setShowPrompt] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= lines.length) {
        clearInterval(interval);
        setTimeout(() => setShowPrompt(true), 400);
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    if (!showPrompt) return;
    setExiting(true);
    setTimeout(() => setDone(true), 900);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") handleEnter();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showPrompt]);

  if (done) return null;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="boot"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080808] px-6"
          onClick={handleEnter}
        >
          {/* Scanline overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)",
            }}
          />

          {/* Corner marks */}
          <div className="absolute top-6 left-6 w-6 h-6 border-t border-l border-white/20" />
          <div className="absolute top-6 right-6 w-6 h-6 border-t border-r border-white/20" />
          <div className="absolute bottom-6 left-6 w-6 h-6 border-b border-l border-white/20" />
          <div className="absolute bottom-6 right-6 w-6 h-6 border-b border-r border-white/20" />

          {/* Top-left logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-6 left-8 font-bold text-lg tracking-tight"
          >
            <span className="text-white">Regan</span>
            <span className="text-[#FFD000]">.</span>
          </motion.div>

          {/* Large centred logo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 text-center"
          >
            <h1 className="display-font text-[5rem] sm:text-[8rem] md:text-[11rem] font-bold leading-none tracking-tight text-white">
              REGAN<span className="text-[#FFD000]">.EXE</span>
            </h1>
            <p className="studio-label mt-3 text-sm sm:text-base tracking-[0.3em] text-[#FFD000]">ACCESS GRANTED</p>
          </motion.div>

          {/* Terminal lines */}
          <div className="w-full max-w-lg space-y-1.5 font-mono text-xs sm:text-sm text-white/40">
            {lines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {line}
              </motion.div>
            ))}
            {visibleLines < lines.length && (
              <span className="inline-block w-2 h-4 bg-white/40 animate-pulse" />
            )}
          </div>

          {/* Press enter prompt */}
          <AnimatePresence>
            {showPrompt && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-12 studio-label text-[11px] tracking-widest text-white/30"
              >
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  PRESS ENTER OR CLICK TO CONTINUE
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
