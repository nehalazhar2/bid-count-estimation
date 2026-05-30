"use client";

import { Star } from "lucide-react";
import { FadeUp } from "@/components/motion";

const reviews = [
  {
    name: "Marcus T.",
    company: "Trident General Contracting",
    location: "Phoenix, AZ",
    text: "Bid Count Estimation delivered a detailed, division-by-division takeoff for our medical office project in under 48 hours. The accuracy was remarkable — we came in within 1.5% of final costs. We've used them on every project since.",
  },
  {
    name: "Sandra K.",
    company: "Keystone Build Group",
    location: "Dallas, TX",
    text: "Our team was scrambling to meet a bid deadline and Bid Count stepped in with a complete estimate package overnight. Their professionalism and speed saved the job for us. Highly recommend to any GC looking for a reliable estimating partner.",
  },
  {
    name: "James R.",
    company: "Summit Development LLC",
    location: "Denver, CO",
    text: "We needed a lender-ready budget for a 48-unit apartment complex and Bid Count nailed it on the first pass. The estimate was thorough, well-organized, and gave our lender full confidence in the numbers. Outstanding work.",
  },
  {
    name: "Priya M.",
    company: "Meridian Construction",
    location: "Atlanta, GA",
    text: "I've worked with several estimating firms over the years and Bid Count is in a league of their own. They flagged scope gaps in our drawings before we even sent them out for bid — that kind of proactive insight is invaluable.",
  },
  {
    name: "Derek H.",
    company: "Horizon Industrial Builders",
    location: "Chicago, IL",
    text: "The food processing facility estimate they produced was incredibly detailed — food-grade MEP, cold storage systems, everything. It's clear they actually understand construction, not just numbers on a spreadsheet.",
  },
  {
    name: "Claudia V.",
    company: "Vega Custom Homes",
    location: "Scottsdale, AZ",
    text: "Bid Count handled our luxury custom home takeoff with precision I've never seen from an outside firm. Every finish material, every framing member — nothing was missed. Our client was thrilled with the accuracy of the final budget.",
  },
  {
    name: "Troy B.",
    company: "Blueprint Commercial",
    location: "Las Vegas, NV",
    text: "We submitted our hotel project bid using Bid Count's estimate and won the contract. Their numbers were competitive and defensible, and the bid package they prepared was one of the most professional we've ever submitted.",
  },
  {
    name: "Anita L.",
    company: "Lakeside Builders",
    location: "Portland, OR",
    text: "Fast, accurate, and genuinely easy to work with. Bid Count turned around a quantity takeoff for our warehouse project in 24 hours. We've already referred them to three other GCs in our network.",
  },
  {
    name: "Kevin O.",
    company: "Oakwood Structures",
    location: "Nashville, TN",
    text: "Their estimates are thorough enough that our subs rarely come back with questions. That alone saves us hours of back-and-forth on every project. Bid Count has become an essential part of our pre-construction process.",
  },
  {
    name: "Rachel F.",
    company: "Frontier Development Group",
    location: "Houston, TX",
    text: "We used Bid Count for the first time on a $6M multi-family project and were blown away. The level of detail in the estimate — down to individual allowance line items — gave us total control over our margin. Won't bid without them.",
  },
  {
    name: "Carlos M.",
    company: "Mesa Pacific Construction",
    location: "San Diego, CA",
    text: "Bid Count Estimation helped us win a competitive commercial renovation project we almost passed on because we didn't have estimating capacity. Their turnaround was incredible and the quality was top-notch. Game changer for our business.",
  },
  {
    name: "Stephanie W.",
    company: "Westfield Building Co.",
    location: "Seattle, WA",
    text: "I was skeptical about outsourcing estimating at first, but Bid Count completely changed my mind. They understood our project better than some of the subs we've worked with for years. The estimate was clean, detailed, and delivered on time.",
  },
  {
    name: "Nathan D.",
    company: "Durafort Construction",
    location: "Minneapolis, MN",
    text: "Three of my last four winning bids came from estimates prepared by Bid Count. The accuracy is consistent, the communication is excellent, and they always deliver when they say they will. Couldn't ask for more from an estimating partner.",
  },
  {
    name: "Yolanda P.",
    company: "Pinnacle GC",
    location: "Miami, FL",
    text: "Bid Count prepared a complete bid package for our retail renovation project on a very tight timeline. Every document was formatted perfectly and the scope exclusions they wrote saved us from two potential disputes. Exceptional service.",
  },
  {
    name: "Brian C.",
    company: "Cedar Ridge Contractors",
    location: "Charlotte, NC",
    text: "We've been in business for 18 years and Bid Count is the most reliable estimating service we've found. They understand construction costs at a regional level, which makes a huge difference when you're bidding competitive markets.",
  },
  {
    name: "Monica S.",
    company: "Solaris Build Partners",
    location: "Austin, TX",
    text: "Their project budgeting consulting saved us from a significant overrun on a tilt-up warehouse. They identified three value engineering opportunities we hadn't considered and got us back on budget without cutting scope. Truly professional.",
  },
  {
    name: "Thomas G.",
    company: "GreenStone Development",
    location: "Columbus, OH",
    text: "Bid Count turned around a full pre-construction budget for our mixed-use development in less than a week. The detail level was incredible and our lender approved financing without requesting any revisions. That's a first for us.",
  },
  {
    name: "Felicia A.",
    company: "Apex Commercial Builders",
    location: "Kansas City, MO",
    text: "We brought Bid Count in on a fast-track industrial project where we had less than five days to submit. Not only did they hit the deadline, the estimate was more thorough than what our in-house team would have produced in two weeks.",
  },
  {
    name: "Ryan J.",
    company: "Ironclad Contracting",
    location: "Sacramento, CA",
    text: "The quantity takeoffs Bid Count produces are so detailed that our material vendors actually comment on them. Clean, organized, and accurate every single time. They've made our procurement process significantly more efficient.",
  },
  {
    name: "Dana N.",
    company: "Northgate Building Solutions",
    location: "Denver, CO",
    text: "After one project with Bid Count Estimation, we cancelled our subscription to two other estimating tools. Everything we needed — accuracy, speed, professionalism — was already there. Best decision we've made for our estimating workflow.",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-[#C9A961] text-[#C9A961]" />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className="w-[340px] shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mx-3">
      <StarRating />
      <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-4">{review.text}</p>
      <div className="border-t border-gray-100 pt-3">
        <div className="font-semibold text-[#0B1F3D] text-sm">{review.name}</div>
        <div className="text-xs text-gray-400 mt-0.5">
          {review.company} · {review.location}
        </div>
      </div>
    </div>
  );
}

const row1 = reviews.slice(0, 10);
const row2 = reviews.slice(10, 20);

export function Testimonials() {
  return (
    <section className="relative py-20 lg:py-28 bg-gray-50 overflow-hidden">
      <FadeUp className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <span className="inline-block text-[#C9A961] text-sm font-semibold tracking-[0.15em] uppercase mb-4 border border-[#C9A961]/30 px-4 py-1.5 rounded-full bg-white">
          Client Reviews
        </span>
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#0B1F3D] mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Trusted by Contractors Nationwide
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          From solo GCs to regional developers — contractors across all 50 states rely on
          Bid Count Estimation to win more work.
        </p>
      </FadeUp>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-4">
        <div className="flex animate-marquee-left">
          {[...row1, ...row1].map((r, i) => (
            <ReviewCard key={`r1-${i}`} review={r} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <div className="flex animate-marquee-right">
          {[...row2, ...row2].map((r, i) => (
            <ReviewCard key={`r2-${i}`} review={r} />
          ))}
        </div>
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
    </section>
  );
}
