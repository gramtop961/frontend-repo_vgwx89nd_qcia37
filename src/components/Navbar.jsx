import React from 'react';
import { Shield, Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-500 text-slate-900">
              <Shield className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight">Al Noor Financial Consulting</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-2 text-slate-900 font-medium shadow-lg shadow-cyan-500/20 hover:shadow-emerald-500/20 transition"
          >
            <Phone className="h-4 w-4" /> Book Consultation
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
