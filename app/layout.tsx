import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-base",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dhaqsopay.com"),
  title: "DhaqsoPay - Buy USDT with Mobile Money Across Africa",
  description:
    "Purchase USDT using M-Pesa, MTN Mobile Money, Airtel Money, and 20+ African mobile payment methods. Fast, secure, and available in 15+ countries.",
  keywords: [
    "buy USDT Africa",
    "mobile money crypto",
    "M-Pesa USDT",
    "African cryptocurrency",
    "DhaqsoPay",
  ],
  openGraph: {
    title: "DhaqsoPay - Buy USDT with Mobile Money Across Africa",
    description:
      "Fast, secure, and trusted USDT purchases using mobile money across 15+ African countries.",
    url: "https://dhaqsopay.com",
    siteName: "DhaqsoPay",
    images: [
      {
        url: "/images/hero-graphic.svg",
        width: 1200,
        height: 630,
        alt: "DhaqsoPay mobile money to USDT illustration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DhaqsoPay - Buy USDT with Mobile Money Across Africa",
    description:
      "Join thousands of Africans buying USDT instantly with mobile money.",
    images: ["/images/hero-graphic.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} bg-white text-navy antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
