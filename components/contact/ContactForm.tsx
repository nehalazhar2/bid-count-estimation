"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContact } from "@/app/contact/actions";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(formData: FormData) {
    setState("loading");
    const result = await submitContact(formData);
    setState(result.success ? "success" : "error");
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3
          className="text-2xl font-bold text-[#0B1F3D] mb-2"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Message Received!
        </h3>
        <p className="text-gray-500 max-w-sm">
          Thank you for reaching out. Our team will review your project details and get back
          to you within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            name="firstName"
            required
            placeholder="John"
            className="border-gray-200 focus:border-[#C9A961] focus:ring-[#C9A961]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            name="lastName"
            required
            placeholder="Smith"
            className="border-gray-200 focus:border-[#C9A961] focus:ring-[#C9A961]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@yourcompany.com"
            className="border-gray-200 focus:border-[#C9A961] focus:ring-[#C9A961]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 000-0000"
            className="border-gray-200 focus:border-[#C9A961] focus:ring-[#C9A961]"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectType">Project Type *</Label>
        <select
          id="projectType"
          name="projectType"
          required
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/20 bg-white"
        >
          <option value="">Select project type...</option>
          <option value="commercial">Commercial</option>
          <option value="residential">Residential</option>
          <option value="industrial">Industrial</option>
          <option value="infrastructure">Infrastructure / Civil</option>
          <option value="renovation">Renovation / Remodel</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="budgetRange">Estimated Budget Range</Label>
        <select
          id="budgetRange"
          name="budgetRange"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/20 bg-white"
        >
          <option value="">Select budget range...</option>
          <option value="under-100k">Under $100,000</option>
          <option value="100k-500k">$100,000 – $500,000</option>
          <option value="500k-1m">$500,000 – $1,000,000</option>
          <option value="1m-5m">$1,000,000 – $5,000,000</option>
          <option value="5m-plus">$5,000,000+</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Project Description *</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe your project, timeline, and any specific estimating needs..."
          className="border-gray-200 focus:border-[#C9A961] focus:ring-[#C9A961] resize-none"
        />
      </div>

      {state === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 px-4 py-3 rounded-lg">
          <AlertCircle className="w-4 h-4 shrink-0" />
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <Button
        type="submit"
        disabled={state === "loading"}
        className="w-full bg-[#C9A961] hover:bg-[#D9BD7C] text-[#0B1F3D] font-bold py-3 text-base"
      >
        {state === "loading" ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="w-4 h-4" />
            Send Message
          </span>
        )}
      </Button>
    </form>
  );
}
