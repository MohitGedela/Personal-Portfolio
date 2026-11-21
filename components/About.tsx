import { about } from "@/lib/data";
import { OrbitField } from "@/components/OrbitField";
import { SkillsGlobe } from "@/components/SkillsGlobe";

export function About() {
  return (
    <section
      id="about"
      className="relative z-10 flex min-h-[min(100svh,56.25vw)] flex-col justify-center overflow-x-clip px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
    >
      <OrbitField />
      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#60a5fa]">{"// 01    About"}</p>
        <h2 className="mt-2 text-4xl font-semibold tracking-[-0.03em] sm:mt-3 sm:text-5xl">About</h2>

        <div className="mt-4 grid items-center gap-6 sm:mt-5 sm:gap-8 lg:mt-6 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <div className="relative z-20 space-y-6 border-l-2 border-[#60a5fa] bg-[#070b14]/55 pl-5 backdrop-blur-[2px] sm:space-y-8 sm:pl-6 lg:space-y-10">
            {[about.lead, about.body, about.aside].map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-2xl text-justify text-base leading-7 text-[#c8c8c8] sm:text-lg sm:leading-8"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="relative z-10 min-w-0">
            <SkillsGlobe />
          </div>
        </div>
      </div>
    </section>
  );
}
