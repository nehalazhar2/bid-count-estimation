"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { submitContact } from "@/app/contact/actions";

type State = "idle" | "loading" | "success" | "error";

export function HeroForm() {
  const [state, setState] = useState<State>("idle");

  async function handleSubmit(formData: FormData) {
    setState("loading");
    const result = await submitContact(formData);
    setState(result.success ? "success" : "error");
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-8 px-6 h-full">
        <div className="w-14 h-14 bg-[#C9A961]/20 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-7 h-7 text-[#C9A961]" />
        </div>
        <h3 className="text-white font-bold text-lg mb-1">Request Received!</h3>
        <p className="text-white/60 text-sm leading-relaxed">
          We&apos;ll review your project and reach back within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="hf-firstName" className="block text-xs font-medium text-white/70 mb-1">
            First Name *
          </label>
          <input
            id="hf-firstName"
            name="firstName"
            required
            placeholder="John"
            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961] transition-colors"
          />
        </div>
        <div>
          <label htmlFor="hf-lastName" className="block text-xs font-medium text-white/70 mb-1">
            Last Name *
          </label>
          <input
            id="hf-lastName"
            name="lastName"
            required
            placeholder="Smith"
            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961] transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="hf-email" className="block text-xs font-medium text-white/70 mb-1">
          Email Address *
        </label>
        <input
          id="hf-email"
          name="email"
          type="email"
          required
          placeholder="john@company.com"
          className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961] transition-colors"
        />
      </div>

      <div>
        <label htmlFor="hf-phone" className="block text-xs font-medium text-white/70 mb-1">
          Phone Number
        </label>
        <input
          id="hf-phone"
          name="phone"
          type="tel"
          placeholder="(555) 000-0000"
          className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961] transition-colors"
        />
      </div>

      <div>
        <label htmlFor="hf-projectType" className="block text-xs font-medium text-white/70 mb-1">
          Project Type *
        </label>
        <select
          id="hf-projectType"
          name="projectType"
          required
          className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961] transition-colors appearance-none"
          style={{ colorScheme: "dark" }}
        >
          <option value="" className="bg-[#0B1F3D]">Select project type...</option>
          <option value="commercial" className="bg-[#0B1F3D]">Commercial</option>
          <option value="residential" className="bg-[#0B1F3D]">Residential</option>
          <option value="industrial" className="bg-[#0B1F3D]">Industrial</option>
          <option value="infrastructure" className="bg-[#0B1F3D]">Infrastructure / Civil</option>
          <option value="renovation" className="bg-[#0B1F3D]">Renovation / Remodel</option>
        </select>
      </div>

      {state === "error" && (
        <div className="flex items-center gap-2 text-red-300 text-xs bg-red-500/20 border border-red-400/30 px-3 py-2 rounded-lg">
          <AlertCircle className="w-4 h-4 shrink-0" />
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-[#C9A961] hover:bg-[#D9BD7C] disabled:opacity-70 text-[#0B1F3D] font-bold px-6 py-3 rounded-lg transition-all duration-200 text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:translate-y-0"
      >
        {state === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Get My Free Estimate
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-center text-white/40 text-xs">
        No obligation · Response within 24 hours
      </p>
    </form>
  );
}
