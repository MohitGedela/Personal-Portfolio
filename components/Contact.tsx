"use client";

import { Check, Copy, FileText, Github, Globe, Linkedin } from "lucide-react";
import { useState } from "react";
import { profile } from "@/lib/data";
import { ToolBench } from "@/components/ToolBench";

const socials = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Devpost", href: profile.devpost, icon: Globe },
  { label: "Resume", href: profile.resume, icon: FileText },
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

      <div className="relative z-20 mx-auto flex min-h-[560px] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
        <div className="contact-type w-full max-w-2xl px-6 py-12 sm:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#9ecaff]">{"// 04    Direct Channel"}</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.65)] sm:text-5xl">
            Let&apos;s build something extraordinary.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-justify text-sm leading-relaxed text-[#e7eef8]">
            Real-time systems, multimodal products, and hardware that has to work outside a demo. Send the brief.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <p className="font-mono text-sm font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {profile.email}
            </p>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 bg-[#3b82f6] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "Copied" : "Copy Email Address"}
            </button>
          </div>
          <p className="sr-only" aria-live="polite">
            {copied ? "Email copied" : ""}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 bg-[#070b14]/55 px-3 py-2 text-xs text-white hover:border-[#60a5fa]"
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto mt-4 flex max-w-6xl flex-col gap-2 border-t border-white/10 bg-[#070b14] py-6 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c5d4e8] sm:flex-row sm:justify-between">
        <p>Mohit Gedela · McMaster University</p>
        <p>Core Active · 2026</p>
      </div>
    </footer>
  );
}
