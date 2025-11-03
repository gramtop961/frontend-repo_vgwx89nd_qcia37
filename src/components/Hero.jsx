import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 mb-4">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            Trusted by SMEs and HNWIs across the UAE
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">
            Strategic Financial Consulting for the UAE Market
          </h1>
          <p className="mt-5 text-slate-300/90 text-base sm:text-lg max-w-xl">
            We help you structure, scale, and safeguard your wealth with compliant, data‑driven strategies tailored to Dubai, Abu Dhabi, and the wider GCC.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-3 text-slate-900 font-medium shadow-lg shadow-cyan-500/20 hover:shadow-emerald-500/20 transition"
            >
              Book a Free Discovery Call <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-white hover:bg-white/5 transition"
            >
              Explore Services
            </a>
          </div>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300/90">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> DFSA & ADGM aligned</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Cross‑border tax planning</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Corporate structuring</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Private wealth advisory</li>
          </ul>
        </div>

        {/* Right 3D Spline scene */}
        <div className="relative h-[380px] sm:h-[480px] md:h-[560px] lg:h-[640px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/0">
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Subtle gradient overlays that don't block interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
          <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-48 w-[110%] rounded-[40%] bg-cyan-500/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
