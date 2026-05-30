import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BcLogoDefs } from "@/components/brand/BcLogo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bidcountestimation.com"),
  title: {
    default: "Bid Count Estimation | Professional Construction Cost Estimating Services",
    template: "%s | Bid Count Estimation",
  },
  description:
    "Bid Count Estimation provides accurate construction cost estimating, quantity takeoffs, bid preparation, and project budgeting services nationwide. Win more bids with confidence.",
  keywords: [
    "construction cost estimating",
    "quantity takeoffs",
    "bid preparation",
    "construction estimator",
    "construction bidding services",
    "project budgeting",
    "construction consulting",
  ],
  authors: [{ name: "Bid Count Estimation" }],
  creator: "Bid Count Estimation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bidcountestimation.com",
    siteName: "Bid Count Estimation",
    title: "Bid Count Estimation | Professional Construction Cost Estimating",
    description:
      "Accurate construction cost estimating, quantity takeoffs, and bid preparation services nationwide. Win more bids with confidence.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bid Count Estimation - Construction Cost Estimating Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bid Count Estimation | Construction Cost Estimating Services",
    description:
      "Accurate construction cost estimating, quantity takeoffs, and bid preparation services nationwide.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bid Count Estimation",
  url: "https://bidcountestimation.com",
  logo: "https://bidcountestimation.com/og-image.png",
  description:
    "Professional construction cost estimating, quantity takeoffs, bid preparation, and project budgeting services nationwide.",
  areaServed: "US",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-800-BID-COUNT",
    contactType: "Customer Service",
    availableLanguage: "English",
    areaServed: "US",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Global SVG symbol library for logo variants */}
        <BcLogoDefs />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
