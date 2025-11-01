"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import { paymentMethods } from "../lib/data";

export const LogoCarousel = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-center lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-navy/60">
          Supported Mobile Payment Methods
        </p>
        <h2 className="text-2xl font-heading font-semibold text-navy sm:text-3xl">
          Pay with your favorite mobile money provider
        </h2>
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={2.2}
          spaceBetween={24}
          loop
          freeMode
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={5000}
          className="mt-6 w-full"
          breakpoints={{
            640: { slidesPerView: 3.5 },
            768: { slidesPerView: 4.5 },
            1024: { slidesPerView: 5.5 },
          }}
        >
          {paymentMethods.map((method) => (
            <SwiperSlide key={method.name}>
              <div className="flex h-24 items-center justify-center rounded-2xl border border-navy/10 bg-white shadow-sm transition-transform hover:-translate-y-1">
                <div className="flex items-center gap-3 px-4">
                  <Image
                    src={method.logo}
                    alt={`${method.name} logo`}
                    width={48}
                    height={48}
                  />
                  <span className="text-base font-medium text-navy">
                    {method.name}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
