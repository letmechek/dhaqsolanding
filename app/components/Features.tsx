"use client";

import { motion } from "framer-motion";
import {
  HiArrowTrendingUp,
  HiBolt,
  HiCheckBadge,
  HiDevicePhoneMobile,
  HiGlobeAlt,
  HiLifebuoy,
  HiShieldCheck,
} from "react-icons/hi2";
import { LuSmartphone } from "react-icons/lu";
import { featureCards } from "../lib/data";

const iconMap = {
  lightning: HiBolt,
  globe: HiGlobeAlt,
  shield: HiShieldCheck,
  trending: HiArrowTrendingUp,
  support: HiLifebuoy,
  smartphone: LuSmartphone,
  check: HiCheckBadge,
  mobile: HiDevicePhoneMobile,
};

export const Features = () => {
  return (
    <section id="features" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-navy/60">
            Why Choose DhaqsoPay?
          </p>
          <h2 className="mt-4 text-3xl font-heading font-semibold text-navy sm:text-4xl">
            Built for mobile-first crypto access across Africa
          </h2>
          <p className="mt-4 text-base text-navy/70 sm:text-lg">
            From instant settlements to multi-language support, DhaqsoPay gives
            you everything you need to buy USDT safely with the mobile money you
            already use every day.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <motion.article
                key={feature.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group relative overflow-hidden rounded-3xl border border-transparent bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-turquoise/0 via-transparent to-turquoise/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-turquoise/10 text-turquoise">
                  {Icon && <Icon size={28} aria-hidden />}
                </div>
                <h3 className="mt-6 text-lg font-heading font-semibold text-navy">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-navy/70">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
