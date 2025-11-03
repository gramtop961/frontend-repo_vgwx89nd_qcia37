import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="relative border-t border-white/10 mt-8">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-10 -top-8 h-36 w-36 rounded-full bg-cyan-500/10 blur-2xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Al Noor Financial Consulting</h3>
            <p className="mt-2 text-slate-300/90 max-w-sm">
              Independent financial consultancy serving startups, SMEs, family offices, and HNWIs across the UAE and GCC.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-slate-200">Contact</h4>
            <ul className="mt-3 space-y-2 text-slate-300/90 text-sm">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-cyan-400" /> hello@alnoor-finance.ae</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-cyan-400" /> +971 4 000 0000</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-400" /> DIFC, Dubai — United Arab Emirates</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-slate-200">Book a Call</h4>
            <p className="mt-3 text-slate-300/90 text-sm">Tell us about your goals and we’ll prepare an initial roadmap.</p>
            <a
              href="#home"
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-2 text-slate-900 font-medium shadow-lg shadow-cyan-500/20 hover:shadow-emerald-500/20 transition"
            >
              Get Started
            </a>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between text-xs text-slate-400/80">
          <p>© {new Date().getFullYear()} Al Noor Financial Consulting. All rights reserved.</p>
          <p>DFSA & ADGM compliant advisory</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
