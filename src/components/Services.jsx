import React from 'react';
import { BarChart3, Landmark, ShieldCheck, CreditCard } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Financial Strategy & FP&A',
    desc: 'Forecasting, budgeting, and KPI dashboards tailored to the UAE’s dynamic market to support confident decision‑making.',
  },
  {
    icon: Landmark,
    title: 'Corporate Structuring',
    desc: 'Free zone vs. mainland advisory, holding structures, and bank account setup across Dubai, Abu Dhabi, and the GCC.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk & Compliance',
    desc: 'DFSA, ADGM, and UAE Corporate Tax alignment with robust governance frameworks for scale and resilience.',
  },
  {
    icon: CreditCard,
    title: 'Fintech & Payments',
    desc: 'Licensing support, payment flows, and PSP integrations with a modern, secure approach to digital finance.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-40 w-[90%] rounded-[40%] bg-emerald-500/10 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">
            Advisory built for growth
          </h2>
          <p className="mt-3 text-slate-300/90">
            Practical guidance backed by data, delivered by consultants who understand the UAE business landscape.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition shadow-sm shadow-black/10"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-500 text-slate-900 shadow-lg shadow-cyan-500/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90 leading-relaxed">{desc}</p>
              <div className="mt-4 text-xs text-slate-400/80">Tailored UAE deliverables</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
