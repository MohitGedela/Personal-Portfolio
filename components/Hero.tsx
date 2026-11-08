import { profile, statusItems } from "@/lib/data";
import { BlueprintField } from "@/components/BlueprintField";
import { BuildBlock, Typed } from "@/components/build";


const metrics = [
  { value: "09", label: "Projects" },
  { value: "10", label: "Roles" },
  { value: "04", label: "Flagships" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col justify-start overflow-hidden px-6 pb-8 pt-20 sm:px-8 lg:px-10 lg:pt-24"
    >
      <BlueprintField />
      <BuildBlock
        as="h1"
        id="wordmark"
        delay={760}
        hold={700}
        className="wordmark pointer-events-none relative z-10 -mb-2 lg:-mb-6"
      >
        <Typed text="PORTFOLIO" cps={22} />
      </BuildBlock>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-start gap-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <BuildBlock id="hello" delay={420}>
            <p className="font-serif text-4xl italic text-white sm:text-5xl">
              <Typed text="Hello, I'm" cps={40} />
            </p>
          </BuildBlock>
          <BuildBlock id="name" delay={1020} className="mt-3">
            <p className="inline-block bg-[#3b82f6] px-3.5 py-1.5 text-6xl font-black tracking-[-0.04em] text-white sm:text-7xl">
              <Typed text="MOHIT." cps={24} />
            </p>
          </BuildBlock>
          <BuildBlock id="role" delay={1320} className="mt-6">
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-white/80">
              <span className="h-1.5 w-1.5 bg-[#3b82f6]" />
              <Typed text={profile.school} cps={38} />
            </p>
          </BuildBlock>
          <BuildBlock id="copy" delay={560} className="mt-4 max-w-lg">
            <p className="text-justify text-base leading-relaxed text-[#9a9a9a]">
              <Typed
                text="Real-time systems, multimodal products, and accessible hardware."
                cps={100}
              />
            </p>
          </BuildBlock>
          <div className="mt-7 flex flex-wrap gap-3">
            <BuildBlock
              as="a"
              href="#projects"
              id="cta-projects"
              delay={1280}
              className="inline-flex items-center bg-[#3b82f6] px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-white hover:bg-[#60a5fa]"
            >
              <Typed text="View Projects" cps={32} />
            </BuildBlock>
            <BuildBlock
              as="a"
              href="#contact"
              id="cta-contact"
              delay={1460}
              className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] hover:border-[#3b82f6]"
            >
              <Typed text="Contact" cps={32} />
            </BuildBlock>
          </div>
          <dl className="mt-8 grid max-w-lg grid-cols-3 gap-2.5">
            {metrics.map((metric, index) => (
              <BuildBlock
                key={metric.label}
                id={`stat-${metric.label}`}
                delay={1580 + index * 140}
                className="border border-white/10 px-3.5 py-3.5"
              >
                <dd className="font-mono text-3xl text-[#3b82f6]">
                  <Typed text={metric.value} cps={18} />
                </dd>
                <dt className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#888]">
                  <Typed text={metric.label} delay={90} cps={22} />
                </dt>
              </BuildBlock>
            ))}
          </dl>
        </div>

        <BuildBlock as="figure" id="portrait" delay={1680} hold={1500} className="lg:col-span-3 lg:pt-2">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[300px] overflow-hidden bg-[#0c0c0c] lg:max-w-none">
            <BuildBlock id="photo" delay={2550} duration={1100} hold={900} className="absolute inset-0 bg-[#3b82f6]">
              <img
                src="/myWebPic.jpg"
                alt="Mohit Gedela"
                className="h-full w-full object-cover object-[center_18%] grayscale contrast-125 mix-blend-multiply"
              />
            </BuildBlock>
          </div>
          <figcaption className="mx-auto mt-3 flex w-full max-w-[300px] items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[#3b82f6] lg:max-w-none">
            <Typed text="Toronto, ON" delay={180} cps={28} />
            <span className="text-white/50">
              <Typed text="FIG.01" delay={320} cps={20} />
            </span>
          </figcaption>
        </BuildBlock>

        <BuildBlock
          as="aside"
          id="status"
          delay={1760}
          hold={900}
          className="border border-white/10 bg-black/50 lg:col-span-4 lg:mt-2"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em]">
              <Typed text="Status" cps={28} />
            </p>
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <Typed text="Live" delay={160} cps={18} />
            </span>
          </div>
          <ul>
            {statusItems.map((item, index) => (
              <li key={item} className="flex min-h-[72px] items-center gap-3 border-b border-white/10 px-5 py-5 last:border-b-0">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 bg-[#3b82f6]" aria-hidden="true" />
                <p className="text-[15px] font-medium leading-snug text-white/90">
                  <Typed text={item} delay={220 + index * 200} cps={36} />
                </p>
              </li>
            ))}
          </ul>
        </BuildBlock>
      </div>
    </section>
  );
}
