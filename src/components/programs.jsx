import { programs } from "@/lib/programs";
import { site } from "@/lib/site";
import { ProgramCard } from "@/components/program-card";

export function Programs() {
  return (
    <section id="programs" className="border-t border-line/70 bg-cream-soft/50">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-deep">
            Listen anytime
          </span>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            Our Programs
          </h2>
          <p className="mt-4 text-ink-soft">
            Teaching and prayer sessions from {site.name}, available to
            stream anytime on Spotify.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
