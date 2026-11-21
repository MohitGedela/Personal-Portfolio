import { profile, statusItems } from "@/lib/data";
import { BlueprintField } from "@/components/BlueprintField";
import { Wordmark } from "@/components/Wordmark";
import { serif } from "@/app/fonts";

const metrics = [
  { value: "09", label: "Projects" },
  { value: "06", label: "Roles" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[min(100svh,56.25vw)] w-full flex-col justify-start overflow-hidden px-6 pb-8 pt-20 sm:px-8 lg:px-10 lg:pt-24"
    >
      <BlueprintField />
      <h1 className="wordmark pointer-events-none relative z-0 -mb-2 lg:-mb-6">
        <Wordmark />
      </h1>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-start gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(180px,240px)] sm:gap-4 lg:grid-cols-[minmax(416px,1fr)_240px_minmax(240px,1fr)] lg:gap-6 xl:grid-cols-12 xl:gap-8">
        <div className="sm:min-w-0 xl:col-span-5">
          <p className={`${serif.className} text-4xl italic text-white sm:text-5xl`}>Hello, I&apos;m</p>
          <p className="mt-3 inline-block bg-[#3b82f6] px-3.5 py-1.5 text-6xl font-black tracking-[-0.04em] text-white sm:text-7xl">
            MOHIT.
          </p>
          <p className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-white/80">
            <span className="h-1.5 w-1.5 bg-[#3b82f6]" />
            {profile.school}
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#9a9a9a]">
            <span className="whitespace-nowrap">Real-time systems, multimodal products,</span>{" "}
            <span className="whitespace-nowrap">and accessible hardware.</span>
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center bg-[#3b82f6] px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-white hover:bg-[#60a5fa]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] hover:border-[#3b82f6]"
            >
              Contact
            </a>
          </div>
          <dl className="mt-8 grid max-w-lg grid-cols-2 gap-2.5">
            {metrics.map((metric) => (
              <div key={metric.label} className="border border-white/10 px-3.5 py-3.5">
                <dd className="font-mono text-3xl text-[#3b82f6]">{metric.value}</dd>
                <dt className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#888]">{metric.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <figure className="mx-auto mt-4 w-full max-w-[240px] -translate-x-2 sm:mx-0 sm:mt-8 sm:max-w-none sm:-translate-x-4 lg:mt-0 lg:translate-x-0 lg:pt-2 xl:col-span-3">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0c0c0c]">
            <img
              src="/myWebPic.jpg"
              alt="Mohit Gedela"
              className="absolute inset-0 h-full w-full scale-[1.55] object-cover object-[center_48%]"
            />
          </div>
          <figcaption className="mt-3 w-full text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[#3b82f6]">
            Toronto, ON
          </figcaption>
        </figure>

        <aside className="border border-white/10 bg-black/50 sm:col-span-2 lg:col-span-1 lg:mt-2 xl:col-span-4">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em]">Status</p>
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Live
            </span>
          </div>
          <ul>
            {statusItems.map((item) => (
              <li
                key={item}
                className="flex min-h-[72px] items-center gap-3 border-b border-white/10 px-5 py-5 last:border-b-0"
              >
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 bg-[#3b82f6]" aria-hidden="true" />
                <p className="text-[15px] font-medium leading-snug text-white/90">{item}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
