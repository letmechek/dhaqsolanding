"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2";
import { navLinks } from "../lib/data";

const navVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0 },
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const brandColor = isScrolled ? "text-navy" : "text-white";
  const linkColor = isScrolled
    ? "text-navy/80 hover:text-navy"
    : "text-white/80 hover:text-white";
  const ctaClasses = isScrolled
    ? "rounded-full bg-turquoise px-6 py-3 text-sm font-semibold text-navy transition-all hover:bg-turquoise-light hover:shadow-lg"
    : "rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-navy transition-all hover:bg-white hover:shadow-lg";
  const menuButtonClasses = isScrolled
    ? "flex items-center justify-center rounded-full border border-navy/10 bg-white/80 p-2 text-navy shadow-sm"
    : "flex items-center justify-center rounded-full border border-white/30 bg-white/10 p-2 text-white shadow-sm";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={`mx-auto flex h-20 max-w-7xl items-center justify-between px-6 transition-all duration-300 lg:px-10 ${
          isScrolled
            ? "bg-white/95 shadow-md backdrop-blur-lg"
            : "bg-navy/5 backdrop-blur-md"
        }`}
      >
        <Link
          href="#home"
          className={`flex items-center gap-3 text-xl font-semibold transition-colors ${brandColor}`}
        >
          <span
            className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border transition-colors ${
              isScrolled
                ? "border-navy bg-navy"
                : "border-white/30 bg-white/10"
            }`}
          >
            <Image
              src="/logo.svg"
              alt="DhaqsoPay logo"
              width={28}
              height={28}
              className={`h-7 w-auto object-contain transition-all ${
                isScrolled ? "drop-shadow-[0_2px_6px_rgba(26,37,71,0.25)]" : ""
              }`}
              priority
            />
          </span>
          <span className="hidden md:inline">DhaqsoPay</span>
        </Link>

        <div className="hidden items-center gap-10 text-sm font-medium text-navy/80 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative transition-colors ${linkColor}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link href="#cta" className={ctaClasses}>
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className={`${menuButtonClasses} lg:hidden`}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <HiMiniXMark size={24} /> : <HiMiniBars3 size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden"
          >
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="bg-white px-6 pb-6 pt-4 shadow-lg"
            >
              <div className="flex flex-col space-y-4 text-base font-medium text-navy/80">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-2 py-2 transition-colors hover:bg-turquoise/10 hover:text-navy"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="#cta"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-turquoise px-6 py-3 text-center font-semibold text-navy transition-colors hover:bg-turquoise-light"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
