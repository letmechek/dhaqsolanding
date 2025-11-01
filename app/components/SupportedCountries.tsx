"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { supportedCountries } from "../lib/data";

export const SupportedCountries = () => {
  return (
    <section
      id="supported-countries"
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full bg-turquoise/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-navy/60">
              Available Across Africa
            </p>
            <h2 className="mt-4 text-3xl font-heading font-semibold text-navy sm:text-4xl">
              Localized for every market, from Nairobi to Lagos
            </h2>
            <p className="mt-4 text-base text-navy/70">
              Whether you use M-Pesa in Kenya, MTN Mobile Money in Ghana, or
              Telebirr in Ethiopia, DhaqsoPay connects the mobile payments you
              trust with the USDT liquidity you need.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-navy/10 bg-navy/5 px-5 py-3 text-sm font-medium text-navy">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-turquoise/20 text-navy">
                15+
              </span>
              Countries live today • More launching soon
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative hidden w-full max-w-md lg:block"
          >
            <div className="relative rounded-[32px] border border-navy/10 bg-gradient-to-br from-white via-white to-turquoise/10 p-6 shadow-lg">
              <Image
                src="/images/africa-map.svg"
                alt="Map of Africa highlighting supported countries"
                width={420}
                height={420}
                className="w-full"
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {supportedCountries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05, duration: 0.45 }}
              className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{country.flag}</span>
                <span className="rounded-full bg-turquoise/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-turquoise">
                  Live
                </span>
              </div>
              <h3 className="mt-4 text-xl font-heading font-semibold text-navy">
                {country.name}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-navy/70">
                {country.methods.map((method) => (
                  <li key={method} className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-turquoise" />
                    {method}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
