import Link from "next/link";
import Image from "next/image";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTelegramLine,
  RiTwitterXFill,
} from "react-icons/ri";
import { footerLinks, socialLinks } from "../lib/data";

const socialIconMap = {
  twitter: RiTwitterXFill,
  facebook: RiFacebookFill,
  linkedin: RiLinkedinFill,
  instagram: RiInstagramLine,
  telegram: RiTelegramLine,
};

export const Footer = () => {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr,1fr,1fr,1fr]">
          <div>
            <Link href="#home" className="flex items-center gap-3 text-lg font-semibold">
              <Image src="/logo.svg" alt="DhaqsoPay Logo" width={40} height={40} />
              DhaqsoPay
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              DhaqsoPay is Africa&apos;s fastest way to buy USDT using local
              mobile money wallets. Trusted by thousands of users across 15+
              countries.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon =
                  socialIconMap[social.icon as keyof typeof socialIconMap];
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-turquoise hover:text-navy"
                  >
                    {Icon && <Icon size={18} aria-hidden />}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">
              Product
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-turquoise"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">
              Support
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-turquoise"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">
              Resources
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-turquoise"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-sm text-white/60">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p>© 2025 DhaqsoPay. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em]">
              <span>English</span>
              <span className="h-4 w-px bg-white/20" />
              <span>Pan-African</span>
            </div>
          </div>
          <p className="mt-6 text-sm text-white/50">
            Need help? Email{" "}
            <a
              href="mailto:support@dhaqsopay.com"
              className="font-medium text-turquoise transition-colors hover:text-turquoise-light"
            >
              support@dhaqsopay.com
            </a>{" "}
            or chat with us any time.
          </p>
        </div>
      </div>
    </footer>
  );
};
