import { cn } from "@/lib/utils";

/* Shared SVG defs — rendered once via a hidden element in layout */
export function BcLogoDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <pattern id="navyTex" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <rect width="6" height="6" fill="#0B1F3D" />
          <circle cx="1" cy="1" r=".5" fill="#13315C" opacity=".5" />
        </pattern>

        {/* PRIMARY MARK — navy shield + gold skyline + BC monogram */}
        <symbol id="bc-primary" viewBox="0 0 480 520">
          <path d="M 40 56 L 440 56 L 440 300 C 440 392 360 470 240 506 C 120 470 40 392 40 300 Z"
            fill="url(#navyTex)" stroke="#C9A961" strokeWidth="8" />
          <path d="M 60 76 L 420 76 L 420 296 C 420 378 350 446 240 482 C 130 446 60 378 60 296 Z"
            fill="none" stroke="#C9A961" strokeWidth="1.5" opacity=".55" />
          <g fill="#D9BD7C">
            <rect x="148" y="178" width="46" height="118" />
            <rect x="200" y="120" width="60" height="176" />
            <rect x="266" y="160" width="40" height="136" />
          </g>
          <g fill="#0B1F3D" opacity=".9">
            <rect x="158" y="190" width="26" height="2" /><rect x="158" y="204" width="26" height="2" />
            <rect x="158" y="218" width="26" height="2" /><rect x="158" y="232" width="26" height="2" />
            <rect x="158" y="246" width="26" height="2" /><rect x="158" y="260" width="26" height="2" />
            <rect x="210" y="134" width="40" height="2" /><rect x="210" y="148" width="40" height="2" />
            <rect x="210" y="162" width="40" height="2" /><rect x="210" y="176" width="40" height="2" />
            <rect x="210" y="190" width="40" height="2" /><rect x="210" y="204" width="40" height="2" />
            <rect x="210" y="218" width="40" height="2" /><rect x="210" y="232" width="40" height="2" />
            <rect x="210" y="246" width="40" height="2" /><rect x="210" y="260" width="40" height="2" />
            <rect x="274" y="172" width="24" height="2" /><rect x="274" y="186" width="24" height="2" />
            <rect x="274" y="200" width="24" height="2" /><rect x="274" y="214" width="24" height="2" />
            <rect x="274" y="228" width="24" height="2" /><rect x="274" y="242" width="24" height="2" />
            <rect x="274" y="256" width="24" height="2" />
          </g>
          <g stroke="#E8D29B" fill="none" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="120,304 168,272 208,288 252,242 308,196 348,150" />
          </g>
          <polygon points="338,138 372,134 364,168" fill="#E8D29B" />
          <g fill="#C9A961">
            <rect x="100" y="316" width="280" height="6" />
            <rect x="108" y="306" width="2" height="10" /><rect x="124" y="306" width="2" height="10" />
            <rect x="140" y="302" width="2" height="14" /><rect x="156" y="306" width="2" height="10" />
            <rect x="172" y="306" width="2" height="10" /><rect x="188" y="302" width="2" height="14" />
            <rect x="204" y="306" width="2" height="10" /><rect x="220" y="306" width="2" height="10" />
            <rect x="236" y="302" width="2" height="14" /><rect x="252" y="306" width="2" height="10" />
            <rect x="268" y="306" width="2" height="10" /><rect x="284" y="302" width="2" height="14" />
            <rect x="300" y="306" width="2" height="10" /><rect x="316" y="306" width="2" height="10" />
            <rect x="332" y="302" width="2" height="14" /><rect x="348" y="306" width="2" height="10" />
            <rect x="364" y="306" width="2" height="10" />
          </g>
          <text x="240" y="430" textAnchor="middle"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="98" fontWeight="700"
            fill="#E8D29B" letterSpacing="-2">BC</text>
          <rect x="180" y="446" width="120" height="2" fill="#C9A961" opacity=".7" />
        </symbol>

        {/* ICON ONLY — for dark backgrounds and favicon */}
        <symbol id="bc-icon" viewBox="0 0 480 520">
          <path d="M 40 56 L 440 56 L 440 300 C 440 392 360 470 240 506 C 120 470 40 392 40 300 Z"
            fill="#0B1F3D" stroke="#C9A961" strokeWidth="8" />
          <path d="M 60 76 L 420 76 L 420 296 C 420 378 350 446 240 482 C 130 446 60 378 60 296 Z"
            fill="none" stroke="#C9A961" strokeWidth="1.5" opacity=".55" />
          <g fill="#D9BD7C">
            <rect x="138" y="200" width="50" height="160" />
            <rect x="194" y="120" width="70" height="240" />
            <rect x="270" y="170" width="46" height="190" />
          </g>
          <g fill="#0B1F3D" opacity=".9">
            <rect x="148" y="216" width="30" height="2" /><rect x="148" y="232" width="30" height="2" />
            <rect x="148" y="248" width="30" height="2" /><rect x="148" y="264" width="30" height="2" />
            <rect x="148" y="280" width="30" height="2" /><rect x="148" y="296" width="30" height="2" />
            <rect x="148" y="312" width="30" height="2" /><rect x="148" y="328" width="30" height="2" />
            <rect x="204" y="136" width="50" height="2" /><rect x="204" y="152" width="50" height="2" />
            <rect x="204" y="168" width="50" height="2" /><rect x="204" y="184" width="50" height="2" />
            <rect x="204" y="200" width="50" height="2" /><rect x="204" y="216" width="50" height="2" />
            <rect x="204" y="232" width="50" height="2" /><rect x="204" y="248" width="50" height="2" />
            <rect x="204" y="264" width="50" height="2" /><rect x="204" y="280" width="50" height="2" />
            <rect x="204" y="296" width="50" height="2" /><rect x="204" y="312" width="50" height="2" />
            <rect x="204" y="328" width="50" height="2" />
            <rect x="278" y="184" width="30" height="2" /><rect x="278" y="200" width="30" height="2" />
            <rect x="278" y="216" width="30" height="2" /><rect x="278" y="232" width="30" height="2" />
            <rect x="278" y="248" width="30" height="2" /><rect x="278" y="264" width="30" height="2" />
            <rect x="278" y="280" width="30" height="2" /><rect x="278" y="296" width="30" height="2" />
            <rect x="278" y="312" width="30" height="2" /><rect x="278" y="328" width="30" height="2" />
          </g>
          <g stroke="#E8D29B" fill="none" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="110,388 168,348 220,366 272,310 332,250 376,200" />
          </g>
          <polygon points="362,184 400,180 392,220" fill="#E8D29B" />
          <g fill="#C9A961">
            <rect x="90" y="402" width="300" height="6" />
          </g>
        </symbol>

        {/* MONO LIGHT — bone on navy (for solid dark surfaces) */}
        <symbol id="bc-mono-light" viewBox="0 0 480 520">
          <path d="M 40 56 L 440 56 L 440 300 C 440 392 360 470 240 506 C 120 470 40 392 40 300 Z"
            fill="none" stroke="#F4ECD8" strokeWidth="8" />
          <path d="M 60 76 L 420 76 L 420 296 C 420 378 350 446 240 482 C 130 446 60 378 60 296 Z"
            fill="none" stroke="#F4ECD8" strokeWidth="1.5" opacity=".4" />
          <g fill="#F4ECD8">
            <rect x="148" y="178" width="46" height="118" />
            <rect x="200" y="120" width="60" height="176" />
            <rect x="266" y="160" width="40" height="136" />
          </g>
          <g stroke="#F4ECD8" fill="none" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="120,304 168,272 208,288 252,242 308,196 348,150" />
          </g>
          <polygon points="338,138 372,134 364,168" fill="#F4ECD8" />
          <g fill="#F4ECD8">
            <rect x="100" y="316" width="280" height="6" />
          </g>
          <text x="240" y="430" textAnchor="middle"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="98" fontWeight="700"
            fill="#F4ECD8" letterSpacing="-2">BC</text>
        </symbol>
      </defs>
    </svg>
  );
}

/* ---- Mark-only component (navbar / small usage) ---- */
interface MarkProps {
  variant?: "primary" | "icon" | "mono-light";
  className?: string;
}

export function BcMark({ variant = "primary", className }: MarkProps) {
  const id = variant === "icon" ? "bc-icon" : variant === "mono-light" ? "bc-mono-light" : "bc-primary";
  return (
    <svg viewBox="0 0 480 520" aria-hidden="true" className={className}>
      <use href={`#${id}`} />
    </svg>
  );
}

/* ---- Full wordmark lockup ---- */
interface LockupProps {
  dark?: boolean; // true = white text on navy bg
  className?: string;
}

export function BcWordmark({ dark = true, className }: LockupProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <BcMark variant={dark ? "primary" : "icon"} className="w-8 h-9" />
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-bold text-sm tracking-[0.06em]",
            dark ? "text-white" : "text-[#0B1F3D]"
          )}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Bid Count
        </span>
        <span
          className={cn(
            "text-[10px] tracking-[0.22em] uppercase",
            dark ? "text-[#C9A961]" : "text-[#A88547]"
          )}
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Estimation
        </span>
      </div>
    </div>
  );
}
