"use client";

import React, { useState, useMemo } from "react";
import {
  Calculator,
  X,
  Copy,
  Check,
  Sparkles,
  MessageSquare,
  HardHat,
  Info,
  RotateCcw,
  Layers,
} from "lucide-react";

interface ConcreteEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  engineerPhone?: string;
}

type Grade = "M15" | "M20" | "M25" | "M10";
type MemberType = "slab" | "column" | "beam" | "footing" | "custom";
type UnitSystem = "metric" | "feet";

export const ConcreteEstimatorModal: React.FC<ConcreteEstimatorModalProps> = ({
  isOpen,
  onClose,
  engineerPhone = "+977 9840000000",
}) => {
  const [unit, setUnit] = useState<UnitSystem>("metric");
  const [grade, setGrade] = useState<Grade>("M20");
  const [memberType, setMemberType] = useState<MemberType>("slab");

  // Metric inputs (meters)
  const [lengthM, setLengthM] = useState<number>(6);
  const [widthM, setWidthM] = useState<number>(5);
  const [thicknessM, setThicknessM] = useState<number>(0.125); // 125mm slab

  // Feet inputs (feet & inches)
  const [lengthFt, setLengthFt] = useState<number>(20);
  const [widthFt, setWidthFt] = useState<number>(16);
  const [thicknessIn, setThicknessIn] = useState<number>(5); // 5 inches slab

  // Custom Direct Volume input
  const [directVolumeM3, setDirectVolumeM3] = useState<number>(3.75);

  const [copied, setCopied] = useState(false);

  // Mix ratios [Cement, Sand, Aggregate]
  const mixRatios: Record<Grade, { cement: number; sand: number; agg: number; label: string; use: string }> = {
    M10: { cement: 1, sand: 3, agg: 6, label: "1 : 3 : 6", use: "PCC, Leveling course, Mass concrete" },
    M15: { cement: 1, sand: 2, agg: 4, label: "1 : 2 : 4", use: "General paving, Non-structural slabs" },
    M20: { cement: 1, sand: 1.5, agg: 3, label: "1 : 1.5 : 3", use: "Standard Nepal NBC RCC Slabs & Beams" },
    M25: { cement: 1, sand: 1, agg: 2, label: "1 : 1 : 2", use: "Heavy columns, Water tanks, Foundations" },
  };

  // Typical steel percentage by member type per IS 456
  const steelPercentages: Record<MemberType, number> = {
    slab: 1.0, // ~1.0% volume
    beam: 1.5, // ~1.5% volume
    column: 2.5, // ~2.5% volume
    footing: 0.8, // ~0.8% volume
    custom: 1.2,
  };

  // Calculate Wet Volume (in m³)
  const wetVolumeM3 = useMemo(() => {
    if (memberType === "custom") {
      return Math.max(0, directVolumeM3 || 0);
    }
    if (unit === "metric") {
      return Math.max(0, (lengthM || 0) * (widthM || 0) * (thicknessM || 0));
    } else {
      // Feet to m³: 1 ft = 0.3048 m, 1 inch = 0.0254 m
      const l = (lengthFt || 0) * 0.3048;
      const w = (widthFt || 0) * 0.3048;
      const t = (thicknessIn || 0) * 0.0254;
      return Math.max(0, l * w * t);
    }
  }, [unit, memberType, lengthM, widthM, thicknessM, lengthFt, widthFt, thicknessIn, directVolumeM3]);

  // Dry Volume factor: 1.54 for concrete
  const dryVolumeM3 = wetVolumeM3 * 1.54;

  // Material calculations
  const calculations = useMemo(() => {
    const ratio = mixRatios[grade];
    const totalParts = ratio.cement + ratio.sand + ratio.agg;

    // Cement volume in m³
    const cementVolumeM3 = (ratio.cement / totalParts) * dryVolumeM3;
    // Density of cement = 1440 kg/m³
    const cementWeightKg = cementVolumeM3 * 1440;
    const cementBags50kg = cementWeightKg / 50;

    // Sand volume in m³ and cft (1 m³ = 35.3147 cft)
    const sandVolumeM3 = (ratio.sand / totalParts) * dryVolumeM3;
    const sandVolumeCft = sandVolumeM3 * 35.3147;

    // Aggregate volume in m³ and cft
    const aggVolumeM3 = (ratio.agg / totalParts) * dryVolumeM3;
    const aggVolumeCft = aggVolumeM3 * 35.3147;

    // Steel Rebar estimate: Volume of steel = (percentage / 100) * wet volume. Density of steel = 7850 kg/m³
    const steelPct = steelPercentages[memberType];
    const steelWeightKg = (steelPct / 100) * wetVolumeM3 * 7850;

    // Water estimate: ~25-28 liters per bag of cement (W/C ratio ~ 0.5)
    const waterLiters = cementBags50kg * 27.5;

    return {
      wetVolumeM3: wetVolumeM3.toFixed(2),
      wetVolumeCft: (wetVolumeM3 * 35.3147).toFixed(1),
      dryVolumeM3: dryVolumeM3.toFixed(2),
      cementBags: Math.ceil(cementBags50kg),
      cementWeightKg: Math.round(cementWeightKg),
      sandCft: Math.round(sandVolumeCft),
      sandM3: sandVolumeM3.toFixed(2),
      aggCft: Math.round(aggVolumeCft),
      aggM3: aggVolumeM3.toFixed(2),
      steelKg: Math.round(steelWeightKg),
      steelTons: (steelWeightKg / 1000).toFixed(2),
      waterLiters: Math.round(waterLiters),
    };
  }, [wetVolumeM3, dryVolumeM3, grade, memberType]);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const summary = `--- CONCRETE & RCC MATERIAL ESTIMATE ---
Project Grade: ${grade} (${mixRatios[grade].label})
Member Type: ${memberType.toUpperCase()}
Wet Concrete Volume: ${calculations.wetVolumeM3} m³ (${calculations.wetVolumeCft} cft)
Dry Material Volume: ${calculations.dryVolumeM3} m³

ESTIMATED QUANTITIES:
1. Cement (50kg Bags): ${calculations.cementBags} bags (~${calculations.cementWeightKg} kg)
2. Fine Aggregate (Sand): ${calculations.sandCft} cft (${calculations.sandM3} m³)
3. Coarse Aggregate: ${calculations.aggCft} cft (${calculations.aggM3} m³)
4. Rebar Reinforcement: ~${calculations.steelKg} kg (${calculations.steelTons} MT)
5. Water Required: ~${calculations.waterLiters} Liters

*Calculated via Er. Denish Adhikari Civil Engineering Suite (NBC 105 / IS 456 standards)*`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppConsult = () => {
    const text = encodeURIComponent(
      `Hello Er. Denish, I used your site's Concrete Estimator for an ${memberType.toUpperCase()} (${grade} Mix, ${calculations.wetVolumeM3} m³ / ${calculations.cementBags} bags cement). Could you review this structural requirement for my site?`
    );
    const cleanPhone = engineerPhone.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#0f172a] border border-border/80 w-full max-w-4xl max-h-[92vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-text-primary">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-border/60 flex items-center justify-between bg-surface-dark/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-text-primary">
                  RCC Concrete &amp; Material Estimator
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/40">
                  NBC 105 / IS 456
                </span>
              </div>
              <p className="text-xs text-text-secondary">
                Interactive dry-mix volume and bill-of-quantities estimator for civil construction in Nepal.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-text-secondary hover:text-text-primary hover:bg-surface-light transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Controls Bar: Units & Mix Grade */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Unit Toggle */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-text-secondary font-medium">
                Dimension Units
              </label>
              <div className="flex rounded-xl bg-surface-dark border border-border p-1">
                <button
                  type="button"
                  onClick={() => setUnit("metric")}
                  className={`flex-1 py-1.5 text-xs font-mono font-semibold rounded-lg transition-all ${
                    unit === "metric"
                      ? "bg-accent text-white shadow-sm"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  Metric (Meters)
                </button>
                <button
                  type="button"
                  onClick={() => setUnit("feet")}
                  className={`flex-1 py-1.5 text-xs font-mono font-semibold rounded-lg transition-all ${
                    unit === "feet"
                      ? "bg-accent text-white shadow-sm"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  Imperial (Ft &amp; In)
                </button>
              </div>
            </div>

            {/* Concrete Mix Grade */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-text-secondary font-medium">
                Concrete Mix Grade
              </label>
              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value as Grade)}
                className="w-full px-3 py-2 rounded-xl bg-surface-dark border border-border text-xs font-mono text-text-primary focus:border-accent focus:outline-none"
              >
                <option value="M20">M20 (1 : 1.5 : 3) - Standard RCC Slabs &amp; Beams</option>
                <option value="M25">M25 (1 : 1 : 2) - Heavy Columns &amp; Foundations</option>
                <option value="M15">M15 (1 : 2 : 4) - General Paving &amp; Flooring</option>
                <option value="M10">M10 (1 : 3 : 6) - Plain Cement Concrete (PCC)</option>
              </select>
            </div>

            {/* Structural Member Type */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-text-secondary font-medium">
                Structural Member
              </label>
              <select
                value={memberType}
                onChange={(e) => setMemberType(e.target.value as MemberType)}
                className="w-full px-3 py-2 rounded-xl bg-surface-dark border border-border text-xs font-mono text-text-primary focus:border-accent focus:outline-none"
              >
                <option value="slab">RCC Slab (~1.0% Rebar)</option>
                <option value="beam">RCC Beam (~1.5% Rebar)</option>
                <option value="column">RCC Column (~2.5% Rebar)</option>
                <option value="footing">Isolated/Raft Footing (~0.8% Rebar)</option>
                <option value="custom">Custom Direct Volume (m³)</option>
              </select>
            </div>
          </div>

          {/* Dimension Inputs */}
          <div className="p-4 rounded-xl bg-surface-dark/70 border border-border/70 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-accent uppercase font-bold flex items-center gap-1.5">
                <Layers className="w-4 h-4" /> Member Dimensions
              </span>
              <span className="text-[11px] font-mono text-text-muted">
                {memberType === "custom"
                  ? "Direct Volume Input"
                  : unit === "metric"
                  ? "Length (m) × Width (m) × Thickness (m)"
                  : "Length (ft) × Width (ft) × Depth (in)"}
              </span>
            </div>

            {memberType === "custom" ? (
              <div className="max-w-xs space-y-1.5">
                <label className="text-xs font-mono text-text-secondary">
                  Total Wet Concrete Volume (m³)
                </label>
                <input
                  type="number"
                  min="0.1"
                  step="0.1"
                  value={directVolumeM3}
                  onChange={(e) => setDirectVolumeM3(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 rounded-lg bg-surface border border-border text-sm font-mono text-text-primary focus:border-accent focus:outline-none"
                />
              </div>
            ) : unit === "metric" ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-text-secondary">Length (meters)</label>
                  <input
                    type="number"
                    min="0.1"
                    step="0.1"
                    value={lengthM}
                    onChange={(e) => setLengthM(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-lg bg-surface border border-border text-sm font-mono text-text-primary focus:border-accent focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono text-text-secondary">Width (meters)</label>
                  <input
                    type="number"
                    min="0.1"
                    step="0.1"
                    value={widthM}
                    onChange={(e) => setWidthM(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-lg bg-surface border border-border text-sm font-mono text-text-primary focus:border-accent focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono text-text-secondary">
                    Thickness / Depth (meters)
                  </label>
                  <input
                    type="number"
                    min="0.05"
                    step="0.01"
                    value={thicknessM}
                    onChange={(e) => setThicknessM(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-lg bg-surface border border-border text-sm font-mono text-text-primary focus:border-accent focus:outline-none"
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-text-secondary">Length (feet)</label>
                  <input
                    type="number"
                    min="1"
                    step="0.5"
                    value={lengthFt}
                    onChange={(e) => setLengthFt(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-lg bg-surface border border-border text-sm font-mono text-text-primary focus:border-accent focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono text-text-secondary">Width (feet)</label>
                  <input
                    type="number"
                    min="1"
                    step="0.5"
                    value={widthFt}
                    onChange={(e) => setWidthFt(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-lg bg-surface border border-border text-sm font-mono text-text-primary focus:border-accent focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono text-text-secondary">
                    Thickness / Depth (inches)
                  </label>
                  <input
                    type="number"
                    min="1"
                    step="0.5"
                    value={thicknessIn}
                    onChange={(e) => setThicknessIn(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-lg bg-surface border border-border text-sm font-mono text-text-primary focus:border-accent focus:outline-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Results Grid */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-text-primary flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" /> Estimated Bill of Materials
              </h4>
              <div className="text-xs font-mono text-text-muted">
                Dry Volume Factor: <span className="text-accent font-bold">1.54×</span> (Dry: {calculations.dryVolumeM3} m³)
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* Cement */}
              <div className="p-4 rounded-xl bg-surface border border-border/80 text-center space-y-1">
                <span className="text-[11px] font-mono text-text-muted uppercase">Cement (50kg)</span>
                <div className="text-2xl font-black text-accent">{calculations.cementBags}</div>
                <div className="text-[11px] text-text-secondary">Bags (~{calculations.cementWeightKg} kg)</div>
              </div>

              {/* Sand */}
              <div className="p-4 rounded-xl bg-surface border border-border/80 text-center space-y-1">
                <span className="text-[11px] font-mono text-text-muted uppercase">Fine Sand</span>
                <div className="text-2xl font-black text-text-primary">{calculations.sandCft}</div>
                <div className="text-[11px] text-text-secondary">cft ({calculations.sandM3} m³)</div>
              </div>

              {/* Aggregate */}
              <div className="p-4 rounded-xl bg-surface border border-border/80 text-center space-y-1">
                <span className="text-[11px] font-mono text-text-muted uppercase">Coarse Aggregate</span>
                <div className="text-2xl font-black text-text-primary">{calculations.aggCft}</div>
                <div className="text-[11px] text-text-secondary">cft ({calculations.aggM3} m³)</div>
              </div>

              {/* Steel Rebar */}
              <div className="p-4 rounded-xl bg-surface border border-border/80 text-center space-y-1">
                <span className="text-[11px] font-mono text-text-muted uppercase">Rebar Steel</span>
                <div className="text-2xl font-black text-emerald-400">{calculations.steelKg}</div>
                <div className="text-[11px] text-text-secondary">kg ({calculations.steelTons} Tons)</div>
              </div>
            </div>

            {/* Supplementary Stats Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-surface-dark border border-border/60 text-xs font-mono text-text-secondary">
              <div>
                Wet Volume: <span className="text-text-primary font-bold">{calculations.wetVolumeM3} m³</span> ({calculations.wetVolumeCft} cft)
              </div>
              <div>
                Water Estimate: <span className="text-text-primary font-bold">~{calculations.waterLiters} Liters</span>
              </div>
              <div>
                Mix Proportion: <span className="text-accent font-bold">{mixRatios[grade].label}</span>
              </div>
            </div>
          </div>

          {/* Engineering Disclaimer */}
          <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-800/40 text-xs text-amber-200/90 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
            <span>
              <strong>Professional Notice:</strong> These calculations follow NBC 105 &amp; IS 456 standard empirical rules with 1.54 dry shrinkage allowance. On-site factors (aggregate grading, moisture content, bulking of sand, and structural detailing lap lengths) should be verified by a licensed engineer.
            </span>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-border/60 bg-surface-dark/50 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleCopySummary}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-light border border-border text-xs font-mono text-text-primary hover:border-accent transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy BOQ Summary</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleWhatsAppConsult}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-semibold transition-all shadow-md shadow-emerald-900/30"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Verify with Er. Denish on WhatsApp</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-surface border border-border text-xs font-mono text-text-secondary hover:text-text-primary hover:bg-surface-light transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
