"use client";

import { Check, Copy, FileText, Github, Globe, Linkedin } from "lucide-react";
import { useState } from "react";
import { profile } from "@/lib/data";
import { BuildBlock, Typed } from "@/components/build";
import { ToolBench } from "@/components/ToolBench";

const socials = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Devpost", href: profile.devpost, icon: Globe },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <footer id="contact" className="relative z-10 overflow-hidden px-5 pb-28 pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px]">
        <div className="flex h-full items-center">
          <div className="w-full">
            <ToolBench />
          </div>
        </div>
      </div>
      <BuildBlock
        id="contact-card"
        hold={500}
        className="relative z-20 mx-auto flex min-h-[560px] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center"
      >
        <div className="contact-type w-full max-w-2xl px-6 py-12 sm:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#9ecaff]">
            <Typed text="// 04    Direct Channel" cps={32} />
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.65)] sm:text-5xl">
            <Typed text="Let's build something extraordinary." delay={80} cps={28} />
          </h2>
          <p className="mx-auto mt-4 max-w-md text-justify text-sm leading-relaxed text-[#e7eef8]">
            <Typed
              text="Real-time systems, multimodal products, and hardware that has to work outside a demo. Send the brief."
              delay={160}
              cps={90}
            />
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <p className="font-mono text-sm font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              <Typed text={profile.email} delay={240} cps={28} />
            </p>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 bg-[#3b82f6] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              <Typed text={copied ? "Copied" : "Copy Email Address"} delay={300} cps={30} />
            </button>
          </div>
          <p className="sr-only" aria-live="polite">
            {copied ? "Email copied" : ""}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 bg-[#070b14]/55 px-3 py-2 text-xs text-white hover:border-[#60a5fa]"
                >
                  <Icon className="h-3.5 w-3.5" />
                  <Typed text={social.label} delay={360 + index * 70} cps={24} />
                </a>
              );
            })}
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 bg-[#070b14]/55 px-3 py-2 text-xs text-white hover:border-[#60a5fa]"
            >
              <FileText className="h-3.5 w-3.5" />
              <Typed text="Resume" delay={560} cps={20} />
            </a>
          </div>
        </div>
      </BuildBlock>

      <BuildBlock
        id="contact-meta"
        delay={200}
        className="relative z-20 mx-auto mt-4 flex max-w-6xl flex-col gap-2 border-t border-white/10 bg-[#070b14] py-6 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c5d4e8] sm:flex-row sm:justify-between"
      >
        <p>
          <Typed text="Mohit Gedela · McMaster University" cps={36} />
        </p>
        <p>
          <Typed text="Core Active · 2026" delay={80} cps={28} />
        </p>
      </BuildBlock>
    </footer>
  );
}
