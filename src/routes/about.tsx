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
  company,
  coreValues,
  mission,
  stats,
  vision,
} from "@/data/company";

const title = "About GM Pharma — Third Party Pharma Manufacturing Company";
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
        title="Third Party Pharma Manufacturing Company"
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
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-border bg-card px-6 py-5 shadow-lift sm:block">
              <p className="font-display text-2xl font-extrabold text-navy">
                Est. {company.establishedYear}
              </p>
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Founder-led manufacturing
              </p>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="Quality-driven manufacturing, built on experience"
            />
            <div className="mt-6 space-y-4 text-[0.98rem] leading-relaxed text-muted-foreground">
              <p>
                GM Pharma was founded by {company.founders.join(" and ")}, with extensive experience
                in the pharmaceutical formulation domain. Established in {company.establishedYear},
                the company serves domestic and international customers with cost-effective,
                customer-centric manufacturing solutions.
              </p>
              <p>
                We specialise in Tablets, Capsules, Injectables, Eye Drops, Ointments and API
                intermediates, alongside services including CMO, CDMO, CRO, Animal Health Products,
                Flavors &amp; Fragrances, Vitamins and Fine &amp; Specialty Chemicals.
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

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Core Values" title="The principles behind every batch we make" />
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

      <section className="bg-surface py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Collaboration"
            title="How we work with partners"
            description="From first enquiry to commercial supply, our teams stay accountable for capability, compliance and timelines."
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
