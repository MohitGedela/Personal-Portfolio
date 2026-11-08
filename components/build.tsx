"use client";

import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

export const AGENT_COLORS = [
  "#22d3ee",
  "#4ade80",
  "#facc15",
  "#fb7185",
  "#c084fc",
  "#60a5fa",
  "#fb923c",
  "#e879f9",
  "#2dd4bf",
  "#fde047",
  "#f472b6",
  "#a3e635",
  "#38bdf8",
  "#f43f5e",
  "#34d399",
  "#818cf8",
  "#fda4af",
  "#67e8f9",
];

export function publishLive(_id: string, _value: boolean) {}
export function publishCount(_id: string, _value: number) {}
export function publishTyping(_id: string, _value: boolean) {}
export function readLive(_id: string) {
  return true;
}
export function readCount(_id: string) {
  return Number.POSITIVE_INFINITY;
}
export function resetBuild() {}

type BuildProps<T extends ElementType> = {
  id: string;
  delay?: number;
  hold?: number;
  duration?: number;
  as?: T;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
} & Omit<ComponentPropsWithoutRef<T>, "id" | "className" | "children" | "style" | "as">;

export function BuildBlock<T extends ElementType = "div">({
  id,
  delay = 0,
  hold = 0,
  as,
  className,
  children,
  style,
  ...rest
}: BuildProps<T>) {
  const Tag = (as ?? "div") as ElementType;

  return (
    <Tag data-build={id} data-delay={delay} data-hold={hold || undefined} className={className} style={style} {...rest}>
      {children}
    </Tag>
  );
}

export function Typed({
  text,
  delay = 0,
  cps = 96,
  className,
}: {
  text: string;
  delay?: number;
  cps?: number;
  className?: string;
}) {
  return (
    <span data-type="" data-delay={delay} data-len={text.length} data-cps={cps} className={className}>
      {text}
    </span>
  );
}
