"use client";

import { ArrowUpRight } from "lucide-react";
import { featuredProject, projects, type OutLink } from "@/lib/data";
import { BuildBlock, Typed } from "@/components/build";
import { WireField } from "@/components/WireField";

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
          <Typed text={link.label} cps={24} />
          <ArrowUpRight className="h-3 w-3" />
        </a>
      ))}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative z-10 overflow-hidden px-5 py-24">
      <WireField />
      <div className="relative z-10 mx-auto max-w-6xl">
        <BuildBlock id="proj-kicker">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#60a5fa]">
            <Typed text="// 03    Projects" cps={36} />
          </p>
        </BuildBlock>
        <BuildBlock id="proj-title" delay={80} className="mt-3">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            <Typed text="Projects" cps={32} />
          </h2>
        </BuildBlock>

        <BuildBlock
          as="article"
          id="featured"
          delay={120}
          hold={500}
          className="deploy-card mt-10 overflow-hidden border border-white/10 border-l-[#60a5fa] bg-[#0b1220]/80 p-5 sm:p-7 lg:border-l-2"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#60a5fa]">
              <Typed text={`${featuredProject.code} · Live project`} cps={32} />
            </p>
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <Typed text="Active" delay={80} cps={18} />
            </span>
          </div>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            <Typed text={featuredProject.title} delay={60} cps={26} />
          </h3>
          <p className="mt-3 max-w-3xl text-justify text-sm leading-relaxed text-[#9a9a9a]">
            <Typed text={featuredProject.summary} delay={100} cps={100} />
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {featuredProject.tags.map((tag, index) => (
              <li
                key={tag}
                className="border border-[#60a5fa]/40 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#60a5fa]"
              >
                <Typed text={tag} delay={140 + index * 30} cps={24} />
              </li>
            ))}
          </ul>
          <Links links={featuredProject.links} />
        </BuildBlock>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <BuildBlock
              as="article"
              key={project.code}
              id={`project-${project.code}`}
              delay={index * 80}
              className="deploy-card relative flex h-full flex-col overflow-hidden border border-white/10 bg-[#0b1220]/75 p-5"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#60a5fa]">
                <Typed text={project.code} cps={24} />
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                <Typed text={project.title} delay={40} cps={32} />
              </h3>
              <p className="mt-2 flex-1 text-justify text-sm leading-relaxed text-[#9a9a9a]">
                <Typed text={project.summary} delay={80} cps={100} />
              </p>
              <Links links={project.links} />
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <li
                    key={tag}
                    className="border border-[#60a5fa]/40 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#60a5fa]"
                  >
                    <Typed text={tag} delay={120 + tagIndex * 30} cps={22} />
                  </li>
                ))}
              </ul>
            </BuildBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
