"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

export default function ScrambleText({
  text,
  className = "",
  delay = 0,
  speed = 40,
  trigger = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  trigger?: boolean;
}) {
  const [display, setDisplay] = useState("");
  const frame = useRef(0);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (!trigger) return;

    timeout.current = setTimeout(() => {
      let iteration = 0;
      clearInterval(frame.current);
      frame.current = setInterval(() => {
        setDisplay(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < iteration) return text[i];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );
        iteration += 0.6;
        if (iteration >= text.length) {
          clearInterval(frame.current);
          setDisplay(text);
        }
      }, speed) as unknown as number;
    }, delay);

    return () => {
      clearTimeout(timeout.current);
      clearInterval(frame.current);
    };
  }, [text, delay, speed, trigger]);

  return <span className={className}>{display}</span>;
}
