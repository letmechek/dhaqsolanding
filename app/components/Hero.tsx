"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { paymentMethods } from "../lib/data";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-br from-navy via-navy-light to-[#1f2c58] pt-32 text-white"
    >
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-turquoise/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-turquoise/10 blur-3xl" />
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-20" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 pb-24 pt-16 lg:flex-row lg:items-center lg:gap-20 lg:px-10">
        <motion.div
          className="flex w-full max-w-xl flex-col gap-8"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.24em] text-turquoise">
            Fast • Secure • Pan-African
          </span>
          <motion.h1
            className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Buy USDT Across Africa with Your Mobile Money
          </motion.h1>
          <motion.p
            className="text-lg text-white/80 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Access cryptocurrency instantly with M-Pesa, MTN Mobile Money,
            Airtel Money, Opay, Telebirr, and 20+ African mobile payment
            methods. No card required—just seamless, secure transfers.
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <Link
              href="#cta"
              className="flex items-center justify-center rounded-full bg-turquoise px-8 py-4 text-base font-semibold text-navy shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:bg-turquoise-light"
            >
              Get Started
            </Link>
            <Link
              href="#how-it-works"
              className="flex items-center justify-center rounded-full border-2 border-turquoise px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-turquoise hover:text-navy"
            >
              Learn More
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-4 text-sm text-white/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-white">
              <span className="text-lg font-semibold text-turquoise">50,000+</span>{" "}
              trusted users
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
              Across <span className="font-semibold text-white">15+ countries</span>
            </div>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-col gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            <span className="text-sm uppercase tracking-[0.3em] text-white/60">
              Pay with your favorite mobile money
            </span>
            <div className="flex flex-wrap items-center gap-4">
              {paymentMethods.slice(0, 5).map((method) => (
                <div
                  key={method.name}
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
                >
                  <Image
                    src={method.logo}
                    alt={`${method.name} logo`}
                    width={32}
                    height={32}
                  />
                  <span className="text-sm text-white/90">{method.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex w-full justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          <div className="relative w-full max-w-xl">
            <div className="absolute -left-10 top-10 hidden h-32 w-32 rounded-3xl border border-turquoise/30 lg:block" />
            <div className="absolute -right-4 bottom-10 hidden h-24 w-24 rounded-full border border-white/20 lg:block" />
            <div className="relative rounded-[32px] bg-white/5 p-6 shadow-2xl backdrop-blur-lg">
              <Image
                src="/images/hero-graphic.svg"
                alt="Illustration of DhaqsoPay mobile experience"
                width={560}
                height={540}
                className="w-full"
                priority
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-10 left-1/2 hidden w-60 -translate-x-1/2 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md lg:block"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                Instant confirmations
              </p>
              <p className="mt-2 text-base font-semibold text-white">
                Receive USDT in under 60 seconds
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
