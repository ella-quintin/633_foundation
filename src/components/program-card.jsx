"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SiSpotify } from "react-icons/si";

export function ProgramCard({ program, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col gap-6 rounded-3xl border border-line bg-white/70 p-6 shadow-sm shadow-ink/5 transition-shadow hover:shadow-xl hover:shadow-ink/10 sm:flex-row sm:items-start sm:p-7"
    >
      {program.image ? (
        <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 sm:w-40 md:w-44">
          <Image
            src={program.image}
            alt={`${program.name} cover art`}
            fill
            sizes="(min-width: 640px) 176px, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col">
        <span className="font-display text-sm text-green-deep">
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className="mt-2 font-display text-2xl text-ink">{program.name}</h3>
        {program.tagline ? (
          <p className="mt-1 text-sm font-medium uppercase tracking-wide text-red-deep">
            {program.tagline}
          </p>
        ) : null}

        <p className="mt-3 flex-1 text-ink-soft">{program.description}</p>

        <a
          href={program.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Listen to ${program.name} on Spotify (opens in a new tab)`}
          className="mt-6 inline-flex w-fit items-center gap-2.5 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-green-deep"
        >
          <SiSpotify className="h-4 w-4" aria-hidden="true" />
          Listen on Spotify
        </a>
      </div>
    </motion.article>
  );
}
