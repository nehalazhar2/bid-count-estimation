import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12",
        centered && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block text-[#C9A961] text-sm font-semibold tracking-[0.15em] uppercase mb-3">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl font-bold leading-tight mb-4",
          light ? "text-white" : "text-[#0B1F3D]"
        )}
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg leading-relaxed",
            light ? "text-white/70" : "text-gray-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
