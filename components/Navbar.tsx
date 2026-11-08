"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BuildBlock, Typed } from "@/components/build";

const links = [
  { href: "#about", id: "about", label: "About" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const nodes = links
      .map((link) => document.getElementById(link.id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.15, 0.4] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <BuildBlock
      as="header"
      id="nav"
      delay={1480}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070b14]/75 backdrop-blur-md"
    >
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="font-mono text-[12px] text-white/40" onClick={() => setOpen(false)}>
          <span className="text-white/90">
            <Typed text="Mohit" cps={22} />
          </span>
          <span className="mx-2 text-white/25">/</span>
          <Typed text="Portfolio" delay={50} cps={22} />
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {links.map((link, index) => (
            <a
              key={link.id}
              href={link.href}
              className={`font-mono text-[11px] uppercase tracking-[0.16em] ${
                active === link.id ? "text-[#7eb6ff]" : "text-white/70 hover:text-white"
              }`}
            >
              <Typed text={link.label} delay={80 + index * 70} cps={24} />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/70 lg:flex">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <Typed text="Available" delay={360} cps={22} />
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center border border-white/15 p-2 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-12 z-40 bg-[#070b14] px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="font-mono text-sm uppercase tracking-[0.18em] text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </BuildBlock>
  );
}
