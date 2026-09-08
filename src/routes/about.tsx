import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Eye, Target, UserRound } from "lucide-react";

import aboutLab from "@/assets/about-lab.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StatCounter } from "@/components/site/StatCounter";
import { Button } from "@/components/ui/button";
import {
  collaborationCapabilities,
  collaborationsStatement,
  company,
  coreValueSpecialization,
  coreValueStatement,
  coreValues,
  diversityStatement,
  mission,
  stats,
  trustQuote,
  vision,
  whatWeDo,
} from "@/data/company";

const title = "About GM Pharma";
const description =
  "GM Pharma is an emerging pharmaceutical and nutraceutical manufacturing company delivering quality-driven contract manufacturing, development and research services.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About GM Pharma"
        description={company.shortDescription}
        crumb="About Us"
      />

      <section className="py-16 sm:py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative">
            <img
              src={aboutLab}
              alt="GM Pharma analytical laboratory with scientists at work"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lift"
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-xs font-bold tracking-[0.24em] text-primary uppercase">
                <span aria-hidden="true" className="h-px w-8 bg-primary/60" />
                Who We Are
              </p>
            </Reveal>
            <div className="mt-6 space-y-4 text-[0.98rem] leading-relaxed text-muted-foreground">
              <p>
                {company.name} is an emerging Pharmaceutical &amp; Nutraceutical manufacturing
                company founded by {company.founders.join(" and ")}, who bring extensive experience
                and expertise in the pharmaceutical formulation domain.
              </p>
              <p>
                {company.name} is focused on the development, manufacturing, and commercialization
                of a diverse portfolio of pharmaceutical products and services. We specialize in the
                manufacturing and development of pharmaceutical products, including Tablets,
                Capsules, Injectables, Eye drops, Ointments, and API intermediates along with
                services in CMO (Contract Manufacturing Organization), CDMO (Contract Development
                and Manufacturing Organization), CRO (Contract Research Organization), API (Active
                Pharmaceutical Ingredients), Animal Health Products, Flavors &amp; Fragrances,
                Vitamins, Fine &amp; Specialty Chemicals.
              </p>
              <p>
                With our headquarters in India, {company.name} strives to be a trusted and reliable
                pharmaceutical manufacturing partner, delivering high-quality, cost-effective, and
                customer-centric solutions while creating long-term value and contributing to the
                growth of the domestic and global pharmaceutical industry.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/rfq">Request a Quote</Link>
              </Button>
              <Button asChild variant="quiet" size="lg">
                <Link to="/quality">Quality &amp; Compliance</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-2">
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

      {/* Leadership */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Leadership" title="Founded and led by industry experience" />
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            {company.founders.map((founder, index) => (
              <Reveal
                key={founder}
                delay={index * 80}
                className="card-hover flex items-center gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <span className="grid size-14 shrink-0 place-items-center rounded-full gradient-navy text-navy-foreground">
                  <UserRound className="size-6" />
                </span>
                <div>
                  <p className="font-display text-base font-bold text-navy">{founder}</p>
                  <p className="text-sm text-muted-foreground">Co-Founder, {company.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <Reveal className="gradient-navy rounded-2xl p-8 text-navy-foreground">
            <span className="grid size-12 place-items-center rounded-xl bg-primary-foreground/12 ring-1 ring-primary-foreground/25">
              <Eye className="size-5" />
            </span>
            <h2 className="mt-5 font-display text-xl font-bold">Our Vision</h2>
            <p className="mt-3 text-sm leading-relaxed text-navy-foreground/80">{vision}</p>
          </Reveal>
          <Reveal delay={100} className="gradient-teal rounded-2xl p-8 text-primary-foreground">
            <span className="grid size-12 place-items-center rounded-xl bg-primary-foreground/15 ring-1 ring-primary-foreground/25">
              <Target className="size-5" />
            </span>
            <h2 className="mt-5 font-display text-xl font-bold">Our Mission</h2>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85">{mission}</p>
          </Reveal>
        </div>
      </section>

      {/* Our Core Value */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Core Value"
            title="The principles behind every batch we make"
          />
          <Reveal delay={60} className="mx-auto mt-8 max-w-3xl space-y-4 text-center">
            <p className="text-base leading-relaxed text-muted-foreground">{coreValueStatement}</p>
            <p className="text-base leading-relaxed text-muted-foreground">
              {coreValueSpecialization}
            </p>
          </Reveal>
          <Reveal
            delay={100}
            className="mx-auto mt-8 max-w-2xl rounded-2xl border border-border bg-surface p-6 text-center"
          >
            <p className="font-display text-base leading-relaxed text-navy italic">
              "{trustQuote}"
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => (
              <Reveal
                key={value.title}
                delay={index * 70}
                className="card-hover rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <CheckCircle2 className="size-6 text-primary" />
                <h3 className="mt-4 font-display text-base font-bold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Diversity and Continuous Development */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Our Growth" title="Diversity and Continuous Development" />
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {diversityStatement.map((paragraph, index) => (
              <Reveal key={index} delay={index * 60}>
                <p className="text-base leading-relaxed text-muted-foreground">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Our Focus" title="What We Do" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {whatWeDo.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 70}
                className="card-hover rounded-2xl border border-border bg-card p-7"
              >
                <h3 className="font-display text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Partnerships"
            title="Collaborations"
            description={collaborationsStatement}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {collaborationCapabilities.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 70}
                className="card-hover rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <p className="font-display text-base font-bold text-navy">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden gradient-navy py-16 text-navy-foreground sm:py-20">
        <div aria-hidden="true" className="pattern-molecule absolute inset-0 opacity-20" />
        <div className="container-page relative flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Let's discuss your manufacturing requirement
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy-foreground/80">
              Share your product, dosage form and target market — our team will respond with
              capability and commercial details.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="hero" size="lg">
              <Link to="/rfq">Request a Quote</Link>
            </Button>
            <Button asChild variant="onDark" size="lg">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
