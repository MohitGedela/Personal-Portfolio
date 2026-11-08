"use client";

import { about } from "@/lib/data";
import { BuildBlock, Typed } from "@/components/build";
import { OrbitField } from "@/components/OrbitField";
import { SkillsGlobe } from "@/components/SkillsGlobe";

export function About() {
  return (
    <section
      id="about"
      className="relative z-10 flex min-h-[100svh] flex-col justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-10"
    >
      <OrbitField />
      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        <BuildBlock id="about-kicker">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#60a5fa]">
            <Typed text="// 01    About" cps={36} />
          </p>
        </BuildBlock>
        <BuildBlock id="about-title" delay={80} className="mt-3">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            <Typed text="About" cps={34} />
          </h2>
        </BuildBlock>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] xl:gap-12">
          <div className="border-l-2 border-[#60a5fa] pl-5 sm:pl-6">
            <BuildBlock id="about-lead">
              <p className="max-w-2xl text-justify text-base leading-8 text-[#c8c8c8] sm:text-lg sm:leading-8">
                <Typed text={about.lead} cps={110} />
              </p>
            </BuildBlock>
            <BuildBlock id="about-body" delay={120} className="mt-5">
              <p className="max-w-2xl text-justify text-base leading-8 text-[#c8c8c8] sm:text-lg sm:leading-8">
                <Typed text={about.body} cps={110} />
              </p>
            </BuildBlock>
            <BuildBlock id="about-aside" delay={200} className="mt-5">
              <p className="max-w-2xl text-justify text-base leading-8 text-[#c8c8c8] sm:text-lg sm:leading-8">
                <Typed text={about.aside} cps={110} />
              </p>
            </BuildBlock>
          </div>

          <BuildBlock id="skills-globe" delay={100} className="min-w-0">
            <SkillsGlobe />
          </BuildBlock>
        </div>
      </div>
    </section>
  );
}
