import Link from "next/link";

export const CTASection = () => {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-[#1f2c58] py-24 text-white"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-6 h-60 w-60 rounded-full bg-turquoise/20 blur-3xl" />
        <div className="absolute bottom-6 right-12 h-72 w-72 rounded-full bg-turquoise/10 blur-3xl" />
      </div>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-turquoise-light">
          Ready to Buy USDT?
        </p>
        <h2 className="text-3xl font-heading font-semibold sm:text-4xl">
          Join thousands of Africans accessing cryptocurrency with mobile money
        </h2>
        <p className="text-base text-white/70">
          Sign up in minutes, complete fast verification, and start purchasing
          USDT with your preferred mobile payment method. No credit card needed.
        </p>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <Link
            href="#home"
            className="rounded-full bg-turquoise px-8 py-4 text-base font-semibold text-navy shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:bg-turquoise-light"
          >
            Get Started Now
          </Link>
          <Link
            href="#supported-countries"
            className="rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-white hover:text-navy"
          >
            View Supported Countries
          </Link>
        </div>
        <p className="text-sm text-white/60">
          No credit card required • Fast verification • Trusted support
        </p>
      </div>
    </section>
  );
};
