"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Target, BarChart3 } from "lucide-react";

function formatAED(value: number) {
  if (value >= 1000000) return `AED ${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `AED ${Math.round(value / 1000)}K`;
  return `AED ${Math.round(value).toLocaleString()}`;
}

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    const duration = 800;
    const start = displayed;
    const end = value;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span>
      {prefix}
      {displayed.toLocaleString()}
      {suffix}
    </span>
  );
}

export function RoiCalculator() {
  const [leadsPerMonth, setLeadsPerMonth] = useState(80);
  const [closeRate, setCloseRate] = useState(22);
  const [packageValue, setPackageValue] = useState(18000);
  const [costPerLead, setCostPerLead] = useState(900);

  const monthlyRevenue = Math.round((leadsPerMonth * closeRate) / 100) * packageValue;
  const monthlyVeloraCost = leadsPerMonth * costPerLead + 4000; // leads + tech fee
  const monthlyProfit = monthlyRevenue - monthlyVeloraCost;
  const roiMultiple = monthlyVeloraCost > 0 ? (monthlyRevenue / monthlyVeloraCost).toFixed(1) : "0";
  const clientsWon = Math.round((leadsPerMonth * closeRate) / 100);

  return (
    <div className="bg-[#0A0A0A] border border-white/6 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="p-8 border-b border-white/6">
        <p className="label-tag mb-3">ROI Calculator</p>
        <h3 className="text-2xl font-bold text-white">
          See your numbers. <span className="gradient-neon-text">Before you commit.</span>
        </h3>
        <p className="text-sm text-[#6B7280] mt-2">
          Adjust the sliders to match your business — watch your ROI calculate in real time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Inputs */}
        <div className="p-8 space-y-8 border-r border-white/6">
          {/* Leads per month */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-medium text-white/80">Leads per month</label>
              <span className="text-[#00E5FF] font-bold text-lg font-mono">{leadsPerMonth}</span>
            </div>
            <input
              type="range"
              min={20}
              max={300}
              step={5}
              value={leadsPerMonth}
              onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #00E5FF 0%, #00E5FF ${((leadsPerMonth - 20) / 280) * 100}%, rgba(255,255,255,0.1) ${((leadsPerMonth - 20) / 280) * 100}%, rgba(255,255,255,0.1) 100%)`,
              }}
            />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-[#6B7280]">20</span>
              <span className="text-xs text-[#6B7280]">300</span>
            </div>
          </div>

          {/* Close rate */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-medium text-white/80">Your close rate</label>
              <span className="text-[#00E5FF] font-bold text-lg font-mono">{closeRate}%</span>
            </div>
            <input
              type="range"
              min={5}
              max={50}
              step={1}
              value={closeRate}
              onChange={(e) => setCloseRate(Number(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #00E5FF 0%, #00E5FF ${((closeRate - 5) / 45) * 100}%, rgba(255,255,255,0.1) ${((closeRate - 5) / 45) * 100}%, rgba(255,255,255,0.1) 100%)`,
              }}
            />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-[#6B7280]">5%</span>
              <span className="text-xs text-[#6B7280]">50%</span>
            </div>
          </div>

          {/* Package value */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-medium text-white/80">Avg package value</label>
              <span className="text-[#00E5FF] font-bold text-lg font-mono">AED {packageValue.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={5000}
              max={50000}
              step={1000}
              value={packageValue}
              onChange={(e) => setPackageValue(Number(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #00E5FF 0%, #00E5FF ${((packageValue - 5000) / 45000) * 100}%, rgba(255,255,255,0.1) ${((packageValue - 5000) / 45000) * 100}%, rgba(255,255,255,0.1) 100%)`,
              }}
            />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-[#6B7280]">AED 5K</span>
              <span className="text-xs text-[#6B7280]">AED 50K</span>
            </div>
          </div>

          {/* Cost per lead */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-medium text-white/80">Cost per lead (Velora avg)</label>
              <span className="text-[#00E5FF] font-bold text-lg font-mono">AED {costPerLead}</span>
            </div>
            <input
              type="range"
              min={600}
              max={1200}
              step={50}
              value={costPerLead}
              onChange={(e) => setCostPerLead(Number(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #00E5FF 0%, #00E5FF ${((costPerLead - 600) / 600) * 100}%, rgba(255,255,255,0.1) ${((costPerLead - 600) / 600) * 100}%, rgba(255,255,255,0.1) 100%)`,
              }}
            />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-[#6B7280]">AED 600</span>
              <span className="text-xs text-[#6B7280]">AED 1,200</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="p-8 space-y-4">
          <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-widest mb-6">Your projected results</p>

          <motion.div
            key={`${leadsPerMonth}-${closeRate}-${packageValue}-${costPerLead}`}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="p-5 rounded-xl bg-[#050505] border border-white/5">
              <Target size={16} className="text-[#00E5FF] mb-3" />
              <p className="text-2xl font-black text-white mb-1">
                <AnimatedNumber value={clientsWon} />
              </p>
              <p className="text-xs text-[#6B7280]">clients won per month</p>
            </div>

            <div className="p-5 rounded-xl bg-[#050505] border border-white/5">
              <DollarSign size={16} className="text-[#00E5FF] mb-3" />
              <p className="text-xl font-black text-white mb-1">
                {formatAED(monthlyVeloraCost)}
              </p>
              <p className="text-xs text-[#6B7280]">Velora cost per month</p>
            </div>

            <div className="p-5 rounded-xl bg-[#050505] border border-[#00E5FF]/10">
              <BarChart3 size={16} className="text-[#00E5FF] mb-3" />
              <p className="text-xl font-black gradient-neon-text mb-1">
                {formatAED(monthlyRevenue)}
              </p>
              <p className="text-xs text-[#6B7280]">revenue generated</p>
            </div>

            <div className="p-5 rounded-xl bg-[#00E5FF]/5 border border-[#00E5FF]/20">
              <TrendingUp size={16} className="text-[#00E5FF] mb-3" />
              <p className="text-2xl font-black gradient-neon-text mb-1">
                {roiMultiple}×
              </p>
              <p className="text-xs text-[#6B7280]">return on investment</p>
            </div>
          </motion.div>

          {/* Net profit highlight */}
          <div className="mt-4 p-5 rounded-xl bg-gradient-to-r from-[#00E5FF]/10 to-transparent border border-[#00E5FF]/20">
            <p className="text-xs text-[#00E5FF] font-semibold mb-1">Net monthly profit</p>
            <p className="text-3xl font-black text-white">
              {formatAED(monthlyProfit)}
            </p>
            <p className="text-xs text-[#6B7280] mt-1">
              after all Velora costs
            </p>
          </div>

          <p className="text-xs text-[#6B7280] leading-relaxed pt-2">
            * Based on Velora average cost per lead of AED {costPerLead} plus AED 4,000/month platform fee.
            Actual results vary by firm, sales team, and package offering.
          </p>
        </div>
      </div>
    </div>
  );
}
