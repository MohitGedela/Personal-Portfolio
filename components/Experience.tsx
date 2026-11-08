"use client";

import { roles } from "@/lib/data";
import { BuildBlock, Typed } from "@/components/build";
import { HighlightMatrix } from "@/components/HighlightMatrix";

export function Experience() {
  return (
    <section id="experience" className="relative z-10 overflow-hidden px-4 py-24 sm:px-6 lg:px-10">
      <HighlightMatrix />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <BuildBlock id="exp-kicker">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#60a5fa]">
            <Typed text="// 02    Experience" cps={36} />
          </p>
        </BuildBlock>
        <BuildBlock id="exp-title" delay={80} className="mt-3">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            <Typed text="Experience" cps={34} />
          </h2>
        </BuildBlock>
        <BuildBlock id="exp-lead" delay={120} className="mt-3 max-w-2xl">
          <p className="text-justify text-sm leading-relaxed text-[#888]">
            <Typed text="Newest first." cps={60} />
          </p>
        </BuildBlock>

        <div className="relative mx-auto mt-12 max-w-5xl">
          <span
            className="pointer-events-none absolute bottom-0 left-3 top-0 w-px bg-[#60a5fa]/50 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-6 md:space-y-4">
            {roles.map((role, index) => {
              const right = index % 2 === 1;
              return (
                <BuildBlock
                  as="li"
                  key={`${role.org}-${role.title}`}
                  id={`role-${index}`}
                  delay={index * 45}
                  className={`relative flex md:min-h-[7.5rem] ${
                    right ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  <span
                    className="absolute left-3 top-5 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#60a5fa] bg-[#070b14] md:left-1/2"
                    aria-hidden="true"
                  />

                  <article
                    className={`ml-8 w-full border border-white/10 bg-[#0b1220]/85 px-4 py-4 md:ml-0 md:w-[calc(50%-1.75rem)] ${
                      right ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#60a5fa]">
                      <Typed text={role.dates} cps={36} />
                    </p>
                    <h3 className="mt-2 text-base font-medium tracking-tight sm:text-lg">
                      <Typed text={role.title} delay={30} cps={40} />
                    </h3>
                    <p className="mt-1 text-sm text-[#9ab0c8]">
                      <Typed text={role.org} delay={50} cps={34} />
                    </p>
                    <p className={`mt-3 text-justify text-sm leading-relaxed text-[#9a9a9a] ${right ? "" : "md:ml-auto"}`}>
                      <Typed text={role.summary} delay={70} cps={100} />
                    </p>
                  </article>
                </BuildBlock>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
