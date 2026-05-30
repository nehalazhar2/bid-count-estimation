import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Clock, Wrench, DollarSign, ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/projects";
import { CTABanner } from "@/components/home/CTABanner";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/portfolio/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} | Construction Estimating Portfolio`,
    description: project.scope,
    alternates: {
      canonical: `https://bidcountestimation.com/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Bid Count Estimation`,
      description: project.scope,
      images: [{ url: project.image, alt: project.imageAlt }],
    },
  };
}

const typeColors: Record<string, string> = {
  Commercial: "bg-blue-100 text-blue-800",
  Residential: "bg-green-100 text-green-800",
  Industrial: "bg-orange-100 text-orange-800",
};

export default async function ProjectDetailPage(props: PageProps<"/portfolio/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#0B1F3D] pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-white/50">
            <Link href="/portfolio" className="hover:text-white/80 transition-colors">
              Portfolio
            </Link>
            <span>/</span>
            <span className="text-white/80 truncate">{project.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[#0B1F3D]">
        <div className="relative w-full aspect-[21/9] max-h-[520px] overflow-hidden">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover opacity-60"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3D] via-[#0B1F3D]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
            <span
              className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${typeColors[project.type]}`}
            >
              {project.type}
            </span>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 max-w-3xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-white/70">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#C9A961]" />
                {project.location}
              </span>
              <span className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-[#C9A961]" />
                Est. {project.estimatedValue}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C9A961]" />
                {project.duration}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#13315C] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {[
              { icon: DollarSign, label: "Estimated Value", value: project.estimatedValue },
              { icon: Clock, label: "Turnaround", value: project.duration },
              { icon: Wrench, label: "Trades Covered", value: project.trades.split(",").length + " trades" },
              { icon: MapPin, label: "Location", value: project.location },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="px-6 py-5 text-center">
                <Icon className="w-5 h-5 text-[#C9A961] mx-auto mb-1" />
                <div className="text-white font-semibold text-sm">{value}</div>
                <div className="text-white/50 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-16">
            {/* Left: narrative */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2
                  className="text-2xl font-bold text-[#0B1F3D] mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  The Challenge
                </h2>
                <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold text-[#0B1F3D] mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Our Approach
                </h2>
                <p className="text-gray-600 leading-relaxed">{project.solution}</p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold text-[#0B1F3D] mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Scope of Work
                </h2>
                <p className="text-gray-600 leading-relaxed">{project.scope}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold text-[#0B1F3D]">Trades covered:</span>{" "}
                    {project.trades}
                  </p>
                </div>
              </div>

              {/* Back nav */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-t border-gray-100">
                <Link
                  href="/portfolio"
                  className="flex items-center gap-2 text-sm font-semibold text-[#0B1F3D] hover:text-[#C9A961] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Portfolio
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "bg-[#C9A961] hover:bg-[#D9BD7C] text-[#0B1F3D] font-semibold border-none"
                  )}
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Right: sticky card */}
            <aside className="mt-10 lg:mt-0">
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* Services provided */}
                <div className="bg-[#FAF6EC] rounded-2xl p-6 border border-[#D9CFB8]">
                  <h3
                    className="text-base font-bold text-[#0B1F3D] mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Services Provided
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-semibold bg-[#0B1F3D] text-[#C9A961] px-3 py-1 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3
                    className="text-base font-bold text-[#0B1F3D] mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Deliverables
                  </h3>
                  <ul className="space-y-3">
                    {project.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#C9A961] shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA card */}
                <div className="bg-[#0B1F3D] rounded-2xl p-6 text-white">
                  <h3 className="font-semibold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                    Need a Similar Estimate?
                  </h3>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">
                    Get an accurate estimate in as little as 24 hours. No obligation.
                  </p>
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "w-full bg-[#C9A961] hover:bg-[#D9BD7C] text-[#0B1F3D] font-semibold border-none justify-center"
                    )}
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
