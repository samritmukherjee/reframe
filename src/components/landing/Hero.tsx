"use client";

import Link from "next/link";
import { FiArrowRight, FiShield, FiUserX, FiCloudOff, FiCode, FiTv } from "react-icons/fi";
import Sparkles from "./Sparkles";

export default function Hero() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-76px)] flex items-center py-12">
      <Sparkles />
      <div className="absolute top-0 left-1/4 -z-10 h-[420px] w-[600px] rounded-full bg-blue-500/8 blur-[120px] dark:bg-blue-400/5" />
      <div className="absolute bottom-10 right-1/4 -z-10 h-[350px] w-[550px] rounded-full bg-violet-400/8 blur-[100px] dark:bg-violet-400/4" />

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10 items-center">

          {/* Left copy */}
          <div className="lg:col-span-6 space-y-7">

            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/50 px-3.5 py-1 text-xs tracking-wide text-[var(--accent)] backdrop-blur-sm">
              <FiShield className="h-3.5 w-3.5" />
              <span>100% browser-based</span>
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight text-[var(--text)] leading-[1.1]">
                Edit videos, <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">
                  right in your browser.
                </span>
              </h1>
              <p className="max-w-md text-base text-[var(--muted)] leading-relaxed">
                Resize, trim, rotate, and export — all processed locally. Your files never touch a server.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/reframe"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 text-sm text-white shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 hover:bg-[var(--accent-hover)] transition-all hover:-translate-y-px active:translate-y-0"
              >
                Open Editor
                <FiArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#features"
                onClick={(e) => scrollTo(e, "features")}
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]/60 px-6 py-3 text-sm text-[var(--text)] hover:bg-[var(--surface)] transition-all hover:-translate-y-px active:translate-y-0"
              >
                See what it does
              </a>
            </div>

            {/* Trust chips */}
            <div className="flex items-center gap-6 pt-4">
              {[
                { icon: <FiUserX className="h-3.5 w-3.5" />, label: "No login" },
                { icon: <FiCloudOff className="h-3.5 w-3.5" />, label: "No uploads" },
                { icon: <FiCode className="h-3.5 w-3.5" />, label: "Open source" },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
                  <span className="text-[var(--accent)]">{t.icon}</span>
                  {t.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right mockup */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <div className="relative w-full max-w-md rounded-xl bg-[var(--surface)] p-4 shadow-xl ring-1 ring-[var(--border)]/50 transition-transform duration-500 hover:scale-[1.01]">

              {/* Window chrome */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border)]/50">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>
                <span className="text-[10px] text-[var(--muted)]">Reframe Studio</span>
                <FiTv className="h-3.5 w-3.5 text-[var(--muted)]/60" />
              </div>

              {/* Workspace */}
              <div className="grid grid-cols-12 gap-2.5 h-48">
                {/* Sidebar */}
                <div className="col-span-4 rounded-lg bg-[var(--bg)] ring-1 ring-[var(--border)]/40 p-2 flex flex-col justify-between">
                  <div>
                    <span className="block text-[8px] uppercase tracking-wider text-[var(--muted)] mb-2">Aspect Ratio</span>
                    <div className="space-y-1">
                      <div className="rounded px-2 py-1 text-[9px] bg-[var(--accent)]/10 ring-1 ring-[var(--accent)]/30 text-[var(--accent)]">9:16 Reels</div>
                      <div className="rounded px-2 py-1 text-[9px] text-[var(--muted)]">16:9 YouTube</div>
                      <div className="rounded px-2 py-1 text-[9px] text-[var(--muted)]">1:1 Square</div>
                    </div>
                  </div>
                  <div className="rounded bg-emerald-500/10 p-1.5 text-center">
                    <span className="text-[8px] text-emerald-600 dark:text-emerald-400">Local WASM</span>
                  </div>
                </div>

                {/* Preview */}
                <div className="col-span-8 rounded-lg bg-[var(--bg)] ring-1 ring-[var(--border)]/40 relative flex items-center justify-center overflow-hidden">
                  <div className="w-20 h-36 rounded border border-dashed border-film-400/60 flex flex-col items-center justify-center bg-black/30 relative">
                    <span className="absolute top-1 text-[6px] text-white/40 tracking-widest uppercase">9:16</span>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 animate-pulse flex items-center justify-center text-white">
                      <FiCode className="h-4 w-4" />
                    </div>
                    <div className="absolute bottom-1.5 inset-x-1.5 h-3 rounded bg-white/10 backdrop-blur-sm flex items-center justify-between px-1">
                      <span className="text-[6px] text-white/60 font-mono">0:04 / 0:15</span>
                      <div className="h-1 w-1 rounded-full bg-film-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="mt-2.5 pt-2.5 border-t border-[var(--border)]/40">
                <div className="flex items-center justify-between text-[9px] text-[var(--muted)] font-mono mb-1">
                  <span>Track 1</span>
                  <span>0:15</span>
                </div>
                <div className="relative h-7 w-full rounded bg-[var(--bg)] ring-1 ring-[var(--border)]/40 flex items-center px-0.5 overflow-hidden">
                  <div className="absolute left-6 right-16 top-0.5 bottom-0.5 rounded bg-film-600/10 border border-film-400/40 flex items-center justify-between px-0.5">
                    <div className="w-[2px] h-full bg-film-400/60 rounded-sm" />
                    <div className="flex gap-[2px] items-center h-3 opacity-40">
                      <div className="w-[2px] h-2.5 bg-film-400" />
                      <div className="w-[2px] h-3 bg-film-400" />
                      <div className="w-[2px] h-2 bg-film-400" />
                      <div className="w-[2px] h-3 bg-film-400" />
                      <div className="w-[2px] h-2 bg-film-400" />
                    </div>
                    <div className="w-[2px] h-full bg-film-400/60 rounded-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
