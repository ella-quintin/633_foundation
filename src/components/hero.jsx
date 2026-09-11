"use client";

import { motion } from "framer-motion";
import { Headphones } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,var(--cream-soft),transparent)]"
      />

      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-16 text-center sm:py-20">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-full border border-green/25 bg-green/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-green-deep"
        >
          {site.name}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-balance font-display text-4xl leading-[1.1] text-ink sm:text-5xl md:text-6xl"
        >
          {site.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-4 font-display text-base italic text-brown"
        >
          — {site.verse}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.26 }}
          className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-ink-soft"
        >
          {site.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="mt-8"
        >
          <a
            href="#programs"
            className="inline-flex items-center gap-2.5 rounded-full bg-green px-8 py-4 text-sm font-semibold text-cream shadow-lg shadow-green/20 transition-all hover:-translate-y-0.5 hover:bg-green-deep hover:shadow-xl hover:shadow-green/25"
          >
            <Headphones className="h-4 w-4" aria-hidden="true" />
            Listen to our programs
          </a>
        </motion.div>
      </div>
    </section>
  );
}
