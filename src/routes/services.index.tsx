import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { resolveIcon } from "@/lib/icons";
import { services } from "@/data/company";

const title = "Services — GM Pharma Contract Manufacturing";
const description =
  "CMO, CDMO, CRO and pharmaceutical & nutraceutical manufacturing services from GM Pharma, delivered to WHO-GMP and PIC/S-compliant standards.";

export const Route = createFileRoute("/services/")({
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
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete Manufacturing & Development Services"
        description="From formulation and development through to commercial supply, GM Pharma delivers end-to-end pharmaceutical and nutraceutical manufacturing services under one roof."
        crumb="Services"
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = resolveIcon(service.icon);
              return (
                <Reveal key={service.slug} delay={index * 60} asChild>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-10 -right-10 size-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150"
                    />
                    <div className="relative flex items-start justify-between">
                      <span className="grid size-14 place-items-center rounded-2xl gradient-teal text-primary-foreground shadow-soft transition-transform group-hover:scale-105">
                        <Icon className="size-6" />
                      </span>
                      <ArrowUpRight className="size-5 text-muted-foreground/50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </div>
                    <h2 className="relative mt-6 font-display text-xl font-bold text-navy">
                      {service.name}
                    </h2>
                    <p className="relative mt-1 text-xs font-semibold tracking-wide text-primary uppercase">
                      {service.full}
                    </p>
                    <p className="relative mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Learn more
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading
              eyebrow="Not sure which service fits?"
              title="Talk to our manufacturing team"
              description="Tell us about your product, dosage form and target market — we'll recommend the right service and share capability details."
            />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/rfq">Request a Quote</Link>
              </Button>
              <Button asChild variant="quiet" size="lg">
                <Link to="/contact">
                  Contact Our Team
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
