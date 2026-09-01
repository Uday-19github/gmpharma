import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  BadgeCheck,
  ClipboardCheck,
  FileSearch,
  FlaskConical,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";

import qualityImage from "@/assets/quality-cleanroom.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { qualityStandards } from "@/data/company";

const title = "Quality & Compliance — GM Pharma Manufacturing Standards";
const description =
  "GM Pharma manufactures to WHO-GMP and PIC/S-compliant standards with a commitment to international quality, safety and regulatory compliance.";

export const Route = createFileRoute("/quality")({
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
  component: QualityPage,
});

const standardIcons = [ShieldCheck, BadgeCheck, Award, ClipboardCheck];

const processSteps = [
  {
    icon: FlaskConical,
    title: "Raw Material Testing",
    description:
      "Incoming materials are checked for identity and quality before they enter production.",
  },
  {
    icon: ClipboardCheck,
    title: "In-Process Checks",
    description:
      "Manufacturing is monitored at defined checkpoints to keep every batch within specification.",
  },
  {
    icon: FileSearch,
    title: "Batch Release Testing",
    description:
      "Finished batches are tested against approved specifications before they are released.",
  },
  {
    icon: PackageCheck,
    title: "Documentation & Traceability",
    description:
      "Every batch carries complete manufacturing and testing records for full traceability.",
  },
];

const certBadges = [
  { icon: ShieldCheck, title: "WHO-GMP", subtitle: "Approved" },
  { icon: BadgeCheck, title: "PIC/S", subtitle: "Compliant" },
  { icon: ClipboardCheck, title: "ISO 9001:2015", subtitle: "Certified" },
  { icon: Award, title: "Quality Excellence", subtitle: "Our Commitment" },
];

function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Compliance"
        title="Quality that stands up to scrutiny"
        description="Our manufacturing is built around documented quality systems, controlled environments and regulatory discipline."
        crumb="Quality"
      />

      <section className="py-16 sm:py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Standards"
              title="Manufacturing standards we work to"
            />
            <div className="mt-8 space-y-4">
              {qualityStandards.map((standard, index) => {
                const Icon = standardIcons[index] ?? ShieldCheck;
                return (
                  <Reveal
                    key={standard.title}
                    delay={index * 70}
                    className="card-hover flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="font-display text-base font-bold text-navy">{standard.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {standard.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
          <Reveal delay={100} className="relative">
            <img
              src={qualityImage}
              alt="Controlled cleanroom environment used for pharmaceutical manufacturing"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      {/* Quality process */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Process"
            title="How we assure quality, batch after batch"
            description="A disciplined sequence of checks runs through every product we manufacture, from incoming material to finished dispatch."
          />
          <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div
              aria-hidden="true"
              className="absolute top-8 right-[12%] left-[12%] hidden h-px bg-border lg:block"
            />
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 70} className="relative text-center">
                <span className="relative z-10 mx-auto grid size-16 place-items-center rounded-2xl gradient-teal text-primary-foreground shadow-soft">
                  <step.icon className="size-7" />
                </span>
                <p className="mt-5 text-xs font-bold tracking-[0.2em] text-primary uppercase">
                  Step 0{index + 1}
                </p>
                <h3 className="mt-2 font-display text-base font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Certifications" title="Standards we manufacture to" />
          <Reveal delay={100} className="mt-10 rounded-2xl bg-surface p-8">
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

      <section className="bg-surface py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Documentation"
            title="Certificates and documentation on request"
            description="Facility approvals, product documentation and technical dossiers are shared with qualified partners on request. Tell us what your market requires and our regulatory team will respond."
          />
          <Reveal className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/rfq">Request documentation</Link>
            </Button>
            <Button asChild variant="quiet" size="lg">
              <Link to="/contact">Talk to our team</Link>
            </Button>
          </Reveal>
          <Reveal
            delay={100}
            className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-soft"
          >
            <BadgeCheck className="size-5 shrink-0 text-primary" />
            <p className="text-sm text-muted-foreground">
              We publish only verified information. No certificate numbers or validity dates are
              shown until documents are supplied for publication.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
