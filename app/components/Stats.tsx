"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  HiBanknotes,
  HiClock,
  HiCreditCard,
  HiGlobeAlt,
  HiUserGroup,
} from "react-icons/hi2";
import { stats } from "../lib/data";

const iconMap = {
  users: HiUserGroup,
  transactions: HiBanknotes,
  countries: HiGlobeAlt,
  payments: HiCreditCard,
  uptime: HiClock,
};

const useCountUp = (target: number, inView: boolean) => {
  const [displayValue, setDisplayValue] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) {
      return;
    }

    const duration = 1400;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = target * progress;
      const formatted =
        target % 1 !== 0 ? Number(value.toFixed(1)) : Math.round(value);

      setDisplayValue(formatted);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      }
    };

    animationRef.current = requestAnimationFrame(step);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [target, inView]);

  return displayValue;
};

type StatCardProps = {
  stat: (typeof stats)[number];
  index: number;
  active: boolean;
};

const StatCard = ({ stat, index, active }: StatCardProps) => {
  const Icon = iconMap[stat.icon as keyof typeof iconMap];
  const value = useCountUp(stat.value, active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-turquoise/20 text-turquoise">
        {Icon && <Icon size={28} aria-hidden />}
      </div>
      <p className="mt-4 text-3xl font-heading font-semibold text-white">
        {stat.prefix ?? ""}
        {value}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm text-white/70">{stat.label}</p>
    </motion.div>
  );
};

export const Stats = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-16 h-64 w-64 rounded-full bg-turquoise/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-turquoise/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-turquoise">
            Social Proof
          </p>
          <h2 className="mt-4 text-3xl font-heading font-semibold text-white sm:text-4xl">
            Trusted infrastructure with the numbers to back it up
          </h2>
          <p className="mt-4 text-base text-white/70">
            Always-on liquidity, instant settlements, and enterprise-grade
            uptime keep our customers transacting confidently across borders.
          </p>
        </div>

        <div
          ref={containerRef}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
};
