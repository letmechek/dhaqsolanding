"use client";

import { motion } from "framer-motion";
import { howItWorksSteps } from "../lib/data";

export const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-navy py-24 text-white"
    >
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-turquoise/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-turquoise/10 blur-3xl" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 text-center lg:flex-row lg:items-start lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-turquoise">
            Get Started in 3 Simple Steps
          </p>
          <h2 className="mt-5 text-3xl font-heading font-semibold sm:text-4xl">
            Mobile-first onboarding built for speed and trust
          </h2>
          <p className="mt-4 text-base text-white/70">
            DhaqsoPay removes the complexity from crypto by guiding you with a
            streamlined flow from signup to instant USDT delivery. All you need
            is your mobile number and preferred payment method.
          </p>
          <motion.a
            href="#cta"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-turquoise px-8 py-4 text-base font-semibold text-navy transition-transform duration-200 hover:-translate-y-1 hover:bg-turquoise-light"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Buying USDT Now
          </motion.a>
        </motion.div>

        <div className="relative w-full max-w-xl">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-white/0 via-white/30 to-white/0 lg:block" />
          <div className="space-y-10">
            {howItWorksSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-left backdrop-blur-lg lg:flex-row lg:items-start"
              >
                <div className="flex items-center gap-4 lg:w-44 lg:flex-col lg:items-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-turquoise/20 text-2xl font-semibold text-turquoise">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
