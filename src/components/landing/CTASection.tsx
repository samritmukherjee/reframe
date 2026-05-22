"use client";

import Link from "next/link";
import { FiArrowRight, FiGithub, FiShield, FiHeart } from "react-icons/fi";
import BrandLogo from "@/components/BrandLogo";
import Sparkles from "./Sparkles";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-between pt-24 pb-6">
      <Sparkles />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/3 to-indigo-500/5 -z-10" />

      {/* CTA */}
      <div className="my-auto mx-auto w-full max-w-6xl px-6 md:px-10 text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--text)] mb-5 leading-tight">
          Ready to edit?
        </h2>
        <p className="mx-auto max-w-md text-base text-[var(--muted)] mb-10 leading-relaxed">
          No signups, no watermarks, no usage limits. Just you and your video.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/reframe"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-7 py-3 text-sm text-white shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 hover:bg-[var(--accent-hover)] transition-all hover:-translate-y-px"
          >
            Open Editor
            <FiArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="https://github.com/magic-peach/reframe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]/60 px-7 py-3 text-sm text-[var(--text)] hover:bg-[var(--surface)] transition-all hover:-translate-y-px"
          >
            <FiGithub className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full mt-auto pt-10 pb-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 px-6 md:px-10">

          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-1.5">
              <BrandLogo size={20} className="text-film-600" />
              <span className="text-sm font-medium tracking-tight text-[var(--text)]">Reframe</span>
            </div>
            <p className="text-xs text-[var(--muted)] leading-relaxed max-w-xs">
              Free, open-source video editor. Resize, trim, and format videos without uploading a single byte.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
              <FiShield className="h-3.5 w-3.5 text-emerald-500" />
              Videos never leave your computer.
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-8 space-y-3">
            <p className="text-[10px] uppercase tracking-widest text-[var(--muted)]">Product</p>
            <nav className="flex flex-col gap-1.5 text-xs text-[var(--muted)]">
              <Link href="/reframe" className="hover:text-[var(--text)] transition-colors">Open Editor</Link>
              <a href="#features" onClick={(e) => { e.preventDefault(); document.getElementById("features")?.scrollIntoView({ behavior: "smooth" }); }} className="hover:text-[var(--text)] transition-colors">Features</a>
              <a href="#workflow" onClick={(e) => { e.preventDefault(); document.getElementById("workflow")?.scrollIntoView({ behavior: "smooth" }); }} className="hover:text-[var(--text)] transition-colors">How It Works</a>
            </nav>
          </div>

          <div className="md:col-span-2 space-y-3">
            <p className="text-[10px] uppercase tracking-widest text-[var(--muted)]">Legal</p>
            <nav className="flex flex-col gap-1.5 text-xs text-[var(--muted)]">
              <Link href="/privacy" className="hover:text-[var(--text)] transition-colors">Privacy Policy</Link>
              <Link href="/contact" className="hover:text-[var(--text)] transition-colors">Contact</Link>
              <a href="https://github.com/magic-peach/reframe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[var(--text)] transition-colors">
                <FiGithub className="h-3.5 w-3.5" /> GitHub
              </a>
            </nav>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-[var(--border)]/30 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] text-[var(--muted)] px-6 md:px-10">
          <p>&copy; {new Date().getFullYear()} Reframe. MIT License.</p>
          <p className="flex items-center gap-1">
            Made with <FiHeart className="h-3 w-3 text-rose-500 fill-rose-500" /> for privacy.
          </p>
        </div>
      </footer>
    </section>
  );
}
