import type { Metadata } from "next";
import Script from "next/script";
import { inter, mono, serif } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohit Gedela — Portfolio",
  description:
    "Portfolio of Mohit Gedela, a software engineering student at McMaster building real-time systems, multimodal AI products, and accessible hardware interfaces.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${serif.variable}`}>
      <body className="font-sans text-white antialiased">
        {children}
        {/* Cloudflare Web Analytics */}
        <Script
          type="module"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "f1dcf8ab3853414b837770e5fe15b335"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
