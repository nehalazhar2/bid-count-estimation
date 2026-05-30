"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, DollarSign, ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import type { ProjectType } from "@/lib/projects";

type FilterType = "All" | ProjectType;

const filters: FilterType[] = ["All", "Commercial", "Residential", "Industrial"];

const typeColors: Record<ProjectType, string> = {
  Commercial: "bg-blue-100 text-blue-800",
  Residential: "bg-green-100 text-green-800",
  Industrial: "bg-orange-100 text-orange-800",
};

export function ProjectGrid() {
  const [active, setActive] = useState<FilterType>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              active === f
                ? "bg-[#0B1F3D] text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute top-3 left-3">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${typeColors[project.type]}`}
                >
                  {project.type}
                </span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3
                className="font-bold text-[#0B1F3D] text-base mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {project.title}
              </h3>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#C9A961]" />
                  {project.location}
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3 h-3 text-[#C9A961]" />
                  Est. {project.estimatedValue}
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
                {project.scope}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#C9A961] group-hover:gap-2 transition-all">
                View Case Study
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
