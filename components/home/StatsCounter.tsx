const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "98%", label: "Estimate Accuracy" },
  { value: "24hr", label: "Average Turnaround" },
  { value: "50", label: "States Served" },
];

export function StatsCounter() {
  return (
    <section className="bg-[#0B1F3D] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-4">
              <div
                className="text-4xl lg:text-5xl font-bold text-[#C9A961] mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.value}
              </div>
              <div className="text-white/60 text-sm font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
