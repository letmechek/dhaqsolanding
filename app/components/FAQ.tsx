"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { faqs } from "../lib/data";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section id="faq" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-navy/60">
            Frequently Asked Questions
          </p>
          <h2 className="mt-4 text-3xl font-heading font-semibold text-navy sm:text-4xl">
            Everything you need to know before your first purchase
          </h2>
          <p className="mt-4 text-base text-navy/70">
            Can’t find what you’re looking for? Reach out to our 24/7 support
            team via live chat, WhatsApp, or email.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-item-${index}`;

            return (
              <div
                key={item.question}
                className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 text-left"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span className="text-lg font-heading font-semibold text-navy">
                    {item.question}
                  </span>
                  <span
                    className={`mt-1 rounded-full bg-turquoise/10 p-2 text-turquoise transition-transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <HiChevronDown size={20} aria-hidden />
                  </span>
                </button>
                <div
                  id={contentId}
                  className={`grid overflow-hidden text-sm text-navy/70 transition-all duration-300 ease-in-out ${
                    isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
