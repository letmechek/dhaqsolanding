"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { HiStar } from "react-icons/hi2";
import { testimonials } from "../lib/data";

const renderStars = (count: number) =>
  Array.from({ length: 5 }).map((_, index) => (
    <HiStar
      key={index}
      className={`h-5 w-5 ${
        index < count ? "text-turquoise" : "text-white/20"
      }`}
      aria-hidden
    />
  ));

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-navy/60">
            What Our Users Say
          </p>
          <h2 className="mt-4 text-3xl font-heading font-semibold text-navy sm:text-4xl">
            Stories from businesses and individuals across the continent
          </h2>
          <p className="mt-4 text-base text-navy/70">
            DhaqsoPay powers merchants, freelancers, and crypto enthusiasts with
            a reliable way to access stablecoins in minutes.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          loop
          autoplay={{ delay: 7000 }}
          pagination={{ clickable: true }}
          className="mt-14 !pb-12"
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
              <article className="flex h-full flex-col justify-between rounded-3xl border border-navy/10 bg-white p-8 text-left shadow-sm transition-shadow hover:shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-turquoise/20 text-base font-semibold text-navy">
                    {testimonial.name
                      .split(" ")
                      .map((segment) => segment[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-base font-heading font-semibold text-navy">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-navy/60">
                      {testimonial.role} • {testimonial.country}
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-base text-navy/80">{testimonial.quote}</p>
                <div className="mt-6 flex items-center gap-1">
                  {renderStars(testimonial.rating)}
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
