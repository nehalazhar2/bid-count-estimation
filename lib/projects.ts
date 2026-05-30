export type ProjectType = "Commercial" | "Residential" | "Industrial";

export interface Project {
  slug: string;
  title: string;
  type: ProjectType;
  location: string;
  estimatedValue: string;
  scope: string;
  challenge: string;
  solution: string;
  services: string[];
  deliverables: string[];
  duration: string;
  trades: string;
  image: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    slug: "westside-medical-office-complex",
    title: "Westside Medical Office Complex",
    type: "Commercial",
    location: "Phoenix, AZ",
    estimatedValue: "$4.2M",
    scope:
      "Full construction cost estimate and bid package for a 3-story medical office building including MEP systems and interior build-out.",
    challenge:
      "The general contractor needed a highly detailed, division-by-division cost estimate for a 3-story, 28,000 SF medical office building within a compressed 10-day turnaround. The project included complex MEP coordination for medical gas, imaging suites, and ADA-compliant exam rooms — specialty systems that carry significant cost variance if mis-estimated at bid time.",
    solution:
      "Our team performed a full CSI MasterFormat takeoff from the architectural and MEP drawings, cross-referencing local Phoenix subcontractor pricing data. We provided a granular line-item estimate with three bid alternates — allowing the GC to submit a competitive base bid while preserving margin on scope additions. The bid package included a scope-exclusion matrix to reduce RFI exposure.",
    services: ["Construction Cost Estimating", "Bid Package Preparation", "Quantity Takeoffs"],
    deliverables: [
      "CSI MasterFormat line-item cost estimate (28 divisions)",
      "Three priced bid alternates",
      "Scope-exclusion and clarification matrix",
      "Subcontractor scope sheets for 9 trade packages",
      "Executive cost summary with benchmark comparisons",
    ],
    duration: "10 days",
    trades: "General, MEP (Mechanical, Electrical, Plumbing), Medical Gas, Civil, Interiors",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
    imageAlt: "Modern commercial medical office building exterior",
  },
  {
    slug: "hotel-conference-center-las-vegas",
    title: "Hotel & Conference Center",
    type: "Commercial",
    location: "Las Vegas, NV",
    estimatedValue: "$22.1M",
    scope:
      "Pre-construction budget and bid package for a 180-key hotel with conference facilities, restaurant, and parking structure.",
    challenge:
      "A hospitality developer needed a bankable pre-construction budget to secure financing for a 180-key full-service hotel with a 12,000 SF conference center, ground-floor restaurant, and 400-stall parking structure. The estimate had to be defensible to lenders at the schematic design stage — before full construction documents were available.",
    solution:
      "Using schematic drawings and the program document, we built a parametric estimate anchored to RS Means hospitality benchmarks, adjusted for the Las Vegas labor market. We identified three high-risk cost areas — FF&E allowances, MEP infrastructure for the convention center, and the cast-in-place parking structure — and provided independent cost models for each with confidence ranges. The lender accepted the estimate without revision.",
    services: ["Pre-Construction Budgeting", "Construction Cost Estimating", "Bid Package Preparation"],
    deliverables: [
      "Schematic-level parametric cost estimate with confidence ranges",
      "Independent cost models for FF&E, MEP, and parking structure",
      "Lender-ready executive cost summary",
      "Market adjustment analysis (Las Vegas labor & materials)",
      "Risk register with mitigation cost allowances",
    ],
    duration: "3 weeks",
    trades: "General, Structural, MEP, FF&E, Parking/Civil, Interiors, Landscaping",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
    imageAlt: "Modern hotel conference center building",
  },
  {
    slug: "luxury-custom-home-estates",
    title: "Luxury Custom Home Estates",
    type: "Residential",
    location: "Scottsdale, AZ",
    estimatedValue: "$1.8M",
    scope:
      "Detailed quantity takeoffs and budget estimate for a 5,200 SF custom home with pool, guest house, and extensive landscaping.",
    challenge:
      "A custom home builder needed precise quantity takeoffs and a detailed budget estimate for a 5,200 SF luxury residence on a hillside lot. The project featured a negative-edge pool, 1,200 SF guest casita, and $200K+ in landscape/hardscape. Accurate framing, exterior skin, and finish takeoffs were critical to avoid costly change orders during construction.",
    solution:
      "We performed a comprehensive digital takeoff from architectural drawings, producing material quantities down to individual lumber pieces for framing and tile counts for all floor and wall finishes. Our cost model used current Arizona subcontractor pricing to produce a budget the builder could hand directly to subs for validation. We flagged five scope gaps in the drawings and issued RFIs before the estimate was finalized.",
    services: ["Quantity Takeoffs", "Construction Cost Estimating", "Project Budgeting"],
    deliverables: [
      "Full digital quantity takeoffs (framing, exterior, interior finishes)",
      "Line-item budget estimate with material and labor split",
      "Pool and landscape/hardscape cost model",
      "Five pre-construction RFI flags for scope gaps",
      "Allowance schedule for owner-selected finishes",
    ],
    duration: "1 week",
    trades: "General, Framing, Roofing, Pool/Hardscape, MEP, Millwork, Landscaping",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    imageAlt: "Modern luxury custom residential home",
  },
  {
    slug: "multi-family-housing-development",
    title: "Multi-Family Housing Development",
    type: "Residential",
    location: "Denver, CO",
    estimatedValue: "$6.3M",
    scope:
      "Full estimate for a 48-unit apartment complex with underground parking, amenity spaces, and site utilities.",
    challenge:
      "A Denver developer needed a full construction estimate to evaluate the feasibility of a 48-unit mid-rise apartment complex with one level of underground parking and shared amenity spaces. The estimate needed to reflect current Colorado material and labor costs, which had escalated significantly, and had to pass a third-party peer review before the development team would proceed to full design.",
    solution:
      "We built the estimate in parallel tracks — structural/shell, MEP rough-in, interiors, and site/underground — allowing us to complete a thorough estimate in 12 business days. Each track was independently benchmarked against comparable Denver multifamily projects completed in the prior 18 months. The estimate passed peer review without material revisions, and the developer proceeded to design development.",
    services: ["Construction Cost Estimating", "Feasibility Budgeting", "Quantity Takeoffs"],
    deliverables: [
      "Division-level estimate across four parallel work tracks",
      "Underground parking structure cost model",
      "Denver market escalation analysis",
      "Peer review-ready cost narrative",
      "Unit-count cost breakdown for investor presentation",
    ],
    duration: "12 business days",
    trades: "General, Structural, MEP, Interiors, Civil/Site, Underground Parking",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
    imageAlt: "Multi-family residential apartment complex",
  },
  {
    slug: "regional-distribution-warehouse",
    title: "Regional Distribution Warehouse",
    type: "Industrial",
    location: "Dallas, TX",
    estimatedValue: "$8.7M",
    scope:
      "Complete estimate for a 120,000 SF tilt-up warehouse including dock equipment, office space, and site development.",
    challenge:
      "A logistics company needed a complete estimate for a 120,000 SF tilt-up concrete distribution center with 32 dock doors, 4,000 SF of office space, and 8 acres of truck court and site development. They were evaluating two Dallas-area sites with different utility infrastructure and needed a cost comparison to make an acquisition decision within two weeks.",
    solution:
      "We produced a full estimate for each site simultaneously, with a shared base-building cost model and site-specific add/deduct schedules reflecting the utility infrastructure differences. The tilt-up panel takeoff and dock equipment pricing were completed using manufacturer schedules. The GC was able to make the site decision with cost confidence and submit a compelling bid to the owner.",
    services: ["Construction Cost Estimating", "Site Comparison Analysis", "Bid Package Preparation"],
    deliverables: [
      "Full base-building estimate (120,000 SF tilt-up)",
      "Site A vs. Site B cost comparison with add/deduct schedule",
      "Dock equipment and material handling cost model",
      "Truck court and site development estimate",
      "GC bid support package with scope sheets",
    ],
    duration: "2 weeks",
    trades: "General, Tilt-Up Concrete, MEP, Dock Equipment, Civil/Site, Paving",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80",
    imageAlt: "Large industrial distribution warehouse facility",
  },
  {
    slug: "food-processing-facility",
    title: "Food Processing Facility",
    type: "Industrial",
    location: "Chicago, IL",
    estimatedValue: "$15.9M",
    scope:
      "Detailed estimate for a 200,000 SF food-grade processing plant including cold storage, clean rooms, and specialized MEP systems.",
    challenge:
      "A food manufacturer needed a detailed estimate for a 200,000 SF food-grade processing facility including USDA-compliant clean rooms, blast freezers, refrigerated dock areas, and specialized process MEP — including washdown-rated electrical, high-sanitation plumbing, and industrial refrigeration. Standard construction cost databases provide minimal guidance for food-grade systems, making accurate estimating highly specialized.",
    solution:
      "Our team worked directly with equipment vendors and specialty subcontractors to develop direct-cost pricing for the process MEP and food-grade finishes. We modeled the cold storage and freezer systems using proprietary data from prior food facility projects, providing cost breakdowns the owner could use for CapEx planning and insurance valuation. The estimate was completed in three weeks including a full cost-risk register.",
    services: ["Specialty Facility Cost Estimating", "Quantity Takeoffs", "Project Budgeting", "Bid Package Preparation"],
    deliverables: [
      "Full 200,000 SF facility estimate (food-grade standards)",
      "Process MEP cost model (washdown electrical, industrial refrigeration)",
      "Cold storage and blast freezer cost breakdown",
      "CapEx planning summary for owner finance team",
      "Cost-risk register with probability-weighted contingency",
    ],
    duration: "3 weeks",
    trades: "General, Food-Grade MEP, Industrial Refrigeration, Specialty Finishes, Civil, Process Equipment",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    imageAlt: "Industrial food processing manufacturing facility",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
