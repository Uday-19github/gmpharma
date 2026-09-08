import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  Globe2,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import heroImage from "@/assets/hero-facility.jpg";
import aboutImage from "@/assets/about-lab.jpg";
import { HubSpoke } from "@/components/site/HubSpoke";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StatCounter } from "@/components/site/StatCounter";
import { Button } from "@/components/ui/button";
import { resolveIcon } from "@/lib/icons";
import {
  company,
  coreValues,
  countries,
  qualityStandards,
  services,
  stats,
  vision,
  mission,
  whyChooseUs,
} from "@/data/company";
import { blogPosts } from "@/data/blog";
import { productCategories } from "@/data/products";

const title = "GM Pharma — Pharmaceutical & Nutraceutical Manufacturing";
const description =
  "Premium contract manufacturing for pharmaceutical and nutraceutical brands. CMO, CDMO, CRO services. WHO-GMP and PIC/S compliant.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const exportMarkets = countries.filter((country) => country !== "Other");
const marqueeMarkets = [...exportMarkets, ...exportMarkets];

const qualityIcons = [ShieldCheck, Globe2, BadgeCheck, CheckCircle2];
const certBadges = [
  { icon: ShieldCheck, title: "WHO-GMP", subtitle: "Approved facilities" },
  { icon: BadgeCheck, title: "PIC/S", subtitle: "Compliant standards" },
  { icon: ClipboardCheck, title: "ISO 9001:2015", subtitle: "Certified systems" },
  { icon: Award, title: "Quality Excellence", subtitle: "Our commitment" },
];

function Index() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 gradient-navy" />
        <div aria-hidden="true" className="pattern-molecule absolute inset-0 opacity-30" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="container-page relative py-20 sm:py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Reveal className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 backdrop-blur-sm">
                <Sparkles className="size-3.5 text-primary" />
                <span className="text-xs font-bold tracking-[0.2em] text-navy-foreground/90 uppercase">
                  {company.positioning}
                </span>
              </Reveal>

              <Reveal delay={60}>
                <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold text-navy-foreground sm:text-5xl lg:text-[3.4rem]">
                  Empowering a<span className="text-gradient-teal block">healthier world</span>
                  without boundaries
                </h1>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/75">
                  {company.name} delivers reliable pharmaceutical and nutraceutical manufacturing
                  solutions backed by quality, innovation, regulatory excellence, and global
                  partnerships.
                </p>
              </Reveal>

              <Reveal delay={180} className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="hero" size="lg">
                  <Link to="/products">
                    Explore Our Products
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button asChild variant="onDark" size="lg">
                  <Link to="/rfq">Request a Quote</Link>
                </Button>
              </Reveal>

              <Reveal
                delay={240}
                className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-primary-foreground/15 pt-6"
              >
                {["WHO-GMP Approved", "PIC/S Compliant", "150+ Products"].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 text-xs font-semibold tracking-wide text-navy-foreground/70 uppercase"
                  >
                    <CheckCircle2 className="size-4 text-primary" />
                    {item}
                  </span>
                ))}
              </Reveal>
            </div>

            <Reveal delay={150} className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/20 blur-2xl"
              />
              <div className="overflow-hidden rounded-2xl ring-1 ring-primary-foreground/15 shadow-lift">
                <img
                  src={heroImage}
                  alt="GM Pharma manufacturing facility production line"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card px-6 py-5 shadow-lift sm:block">
                <p className="font-display text-3xl font-extrabold text-navy">500+</p>
                <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  Customers served
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 -mt-10 sm:-mt-14">
        <div className="container-page">
          <Reveal className="grid gap-4 rounded-2xl gradient-teal p-6 shadow-lift sm:grid-cols-3 sm:p-8">
            {stats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </Reveal>
        </div>
      </section>

      {/* Our Capabilities Hub */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Capabilities"
            title="What We Manufacture"
            description="A single manufacturing partner across pharmaceutical and nutraceutical dosage forms, development and research services."
          />
          <HubSpoke />
        </div>
      </section>

      {/* Export markets marquee */}
      <section className="overflow-hidden py-14 sm:py-16">
        <Reveal className="container-page mb-6 text-center">
          <p className="text-xs font-bold tracking-[0.24em] text-primary uppercase">
            Serving Global Markets
          </p>
          <p className="mt-2 font-display text-lg font-bold text-navy sm:text-xl">
            Trusted across {exportMarkets.length}+ countries
          </p>
        </Reveal>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />
          <div className="marquee-track gap-3">
            {marqueeMarkets.map((country, index) => (
              <span
                key={`${country}-${index}`}
                className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-navy shadow-soft"
              >
                <Globe2 className="size-3.5 text-primary" />
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-2xl shadow-lift">
              <img
                src={aboutImage}
                alt="GM Pharma analytical laboratory with scientists at work"
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <p className="text-xs font-bold tracking-[0.24em] text-primary uppercase">About Us</p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {company.name} is an emerging Pharmaceutical &amp; Nutraceutical manufacturing
                company founded by {company.founders.join(" and ")}, who bring extensive experience
                and expertise in the pharmaceutical formulation domain.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {["Tablets", "Capsules", "Injectables", "Eye Drops", "Ointments", "API"].map(
                  (item) => (
                    <span
                      key={item}
                      className="flex items-center gap-2 text-sm font-medium text-navy"
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-primary" />
                      {item}
                    </span>
                  ),
                )}
              </div>
              <Button asChild variant="hero" size="lg" className="mt-8">
                <Link to="/about">
                  More About Us
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Products & Our Services */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Products & Our Services"
            description="From formulation and development through to commercial supply, we deliver end-to-end pharmaceutical and nutraceutical products and services."
          />

          <Reveal className="mt-14 text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
              Our Services
            </p>
          </Reveal>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = resolveIcon(service.icon);
              return (
                <Reveal
                  key={service.slug}
                  delay={index * 50}
                  asChild
                  className="card-hover group rounded-2xl border border-border bg-card p-6"
                >
                  <Link to="/services/$slug" params={{ slug: service.slug }}>
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                        <Icon className="size-6" />
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-navy">
                      {service.name}
                    </h3>
                    <p className="text-sm font-medium text-primary">{service.full}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more
                      <ArrowRight className="size-3.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-16 text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
              Our Products
            </p>
          </Reveal>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category, index) => (
              <Reveal
                key={category.slug}
                delay={index * 50}
                asChild
                className="card-hover group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card"
              >
                <Link to="/products/$category" params={{ category: category.slug }}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={category.image}
                      alt={category.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-navy/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-navy">{category.name}</h3>
                    <p className="mt-1 text-xs font-medium text-primary">{category.short}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Choose GM Pharma"
            description="We deliver quality-driven manufacturing with scientific rigor and uncompromising standards."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => {
              const Icon = resolveIcon(item.icon);
              return (
                <Reveal
                  key={item.number}
                  delay={index * 50}
                  className="card-hover relative overflow-hidden rounded-2xl border border-border bg-card p-8"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-4 right-6 font-display text-6xl font-extrabold text-primary/10"
                  >
                    {item.number}
                  </span>
                  <span className="relative grid size-12 place-items-center rounded-xl gradient-teal text-primary-foreground shadow-soft">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="relative mt-5 font-display text-lg font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-grid-navy relative overflow-hidden gradient-navy py-16 sm:py-20 text-navy-foreground">
        <div className="container-page relative grid gap-8 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8 backdrop-blur-sm">
            <span className="grid size-12 place-items-center rounded-xl bg-primary-foreground/12 ring-1 ring-primary-foreground/25">
              <Eye className="size-6 text-primary" />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold">Our Vision</h3>
            <p className="mt-4 text-base leading-relaxed text-navy-foreground/80">{vision}</p>
          </Reveal>
          <Reveal
            delay={100}
            className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8 backdrop-blur-sm"
          >
            <span className="grid size-12 place-items-center rounded-xl bg-primary-foreground/12 ring-1 ring-primary-foreground/25">
              <Sparkles className="size-6 text-primary" />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold">Our Mission</h3>
            <p className="mt-4 text-base leading-relaxed text-navy-foreground/80">{mission}</p>
          </Reveal>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Quality & Compliance"
            title="International Standards & Certifications"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {qualityStandards.map((standard, index) => {
              const Icon = qualityIcons[index] ?? ShieldCheck;
              return (
                <Reveal
                  key={standard.title}
                  delay={index * 50}
                  className="card-hover rounded-2xl border border-border bg-card p-6 text-center"
                >
                  <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-7" />
                  </span>
                  <h3 className="mt-4 font-semibold text-navy">{standard.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{standard.description}</p>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200} className="mt-10 rounded-2xl bg-surface p-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {certBadges.map((badge) => (
                <div
                  key={badge.title}
                  className="flex flex-col items-center justify-center gap-3 text-center"
                >
                  <span className="grid size-14 place-items-center rounded-full gradient-teal text-primary-foreground shadow-soft">
                    <badge.icon className="size-6" />
                  </span>
                  <p className="font-semibold text-navy">{badge.title}</p>
                  <p className="text-xs text-muted-foreground">{badge.subtitle}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Our Values" title="Integrity, Quality & Innovation" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {coreValues.map((value, index) => (
              <Reveal
                key={value.title}
                delay={index * 50}
                className="card-hover flex gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-display font-bold text-navy">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Latest Insights"
            title="Knowledge from the Pharma Industry"
            description="Stay updated with pharmaceutical manufacturing trends, regulatory insights and industry best practices."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, index) => (
              <Reveal
                key={post.slug}
                delay={index * 50}
                asChild
                className="card-hover group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card"
              >
                <Link to="/blog/$slug" params={{ slug: post.slug }}>
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold text-primary uppercase">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readingTime}</span>
                    </div>
                    <h3 className="mt-3 font-display text-base font-bold text-navy line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150} className="mt-10 flex justify-center">
            <Button asChild variant="quiet" size="lg">
              <Link to="/blog">
                View All Articles
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden gradient-teal py-16 sm:py-20 text-primary-foreground">
        <div aria-hidden="true" className="pattern-molecule absolute inset-0 opacity-20" />
        <div className="container-page relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <Reveal>
            <h2 className="text-3xl leading-tight font-extrabold sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/85">
              Share your requirements and let's build the right solution together.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-navy font-semibold hover:bg-white/90"
              >
                <Link to="/rfq">Request a Quote</Link>
              </Button>
              <Button asChild variant="onDark" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={100} className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={`tel:${company.phones[0].replace(/\s/g, "")}`}
              className="flex items-center gap-3 rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 px-5 py-4 backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
            >
              <Phone className="size-5 shrink-0" />
              <div>
                <p className="text-xs text-primary-foreground/75 uppercase">Call us</p>
                <p className="font-semibold">{company.phones[0]}</p>
              </div>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-3 rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 px-5 py-4 backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
            >
              <Mail className="size-5 shrink-0" />
              <div>
                <p className="text-xs text-primary-foreground/75 uppercase">Email us</p>
                <p className="font-semibold">{company.email}</p>
              </div>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
