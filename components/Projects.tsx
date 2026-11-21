import { ArrowUpRight } from "lucide-react";
import { featuredProject, projects, type OutLink } from "@/lib/data";
import { WireField } from "@/components/WireField";

const tagClass =
  "border border-[#60a5fa]/40 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#60a5fa]";

function Links({ links }: { links: OutLink[] }) {
  if (links.length === 0) return null;
  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white hover:text-[#60a5fa]"
        >
          {link.label}
          <ArrowUpRight className="h-3 w-3" />
        </a>
      ))}
    </div>
  );
}

function Tags({ tags, className }: { tags: string[]; className: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <li key={tag} className={tagClass}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative z-10 overflow-hidden px-5 py-24">
      <WireField />
      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#60a5fa]">{"// 03    Projects"}</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Projects</h2>

        <article className="deploy-card mt-10 overflow-hidden border border-white/10 border-l-[#60a5fa] bg-[#0b1220]/80 p-5 sm:p-7 lg:border-l-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#60a5fa]">
              {featuredProject.code} · Live project
            </p>
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Active
            </span>
          </div>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{featuredProject.title}</h3>
          <p className="mt-3 max-w-3xl text-justify text-sm leading-relaxed text-[#9a9a9a]">
            {featuredProject.summary}
          </p>
          <Tags tags={featuredProject.tags} className="mt-5" />
          <Links links={featuredProject.links} />
        </article>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.code}
              className="deploy-card relative flex h-full flex-col overflow-hidden border border-white/10 bg-[#0b1220]/75 p-5"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#60a5fa]">{project.code}</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{project.title}</h3>
              <p className="mt-2 flex-1 text-justify text-sm leading-relaxed text-[#9a9a9a]">{project.summary}</p>
              <Links links={project.links} />
              <Tags tags={project.tags} className="mt-4" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
