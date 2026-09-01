import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { company, mapsQuery, whatsappLink } from "@/data/company";

const title = "Contact GM Pharma — Bangalore Office & Hindupur Factory";
const description =
  "Reach GM Pharma in Hebbal, Bangalore or our manufacturing facility in Hindupur, Andhra Pradesh. Call, email or message us on WhatsApp.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's build the right solution together"
        description="Our team responds to manufacturing enquiries from India and international markets."
        crumb="Contact Us"
      />

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          {[company.offices.office, company.offices.factory].map((office, index) => (
            <Reveal
              key={office.label}
              delay={index * 80}
              className="card-hover rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="size-6" />
              </span>
              <p className="mt-4 font-display text-base font-bold text-navy">{office.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {office.lines.join(" ")}
              </p>
            </Reveal>
          ))}
          <Reveal
            delay={160}
            className="card-hover rounded-2xl border border-border bg-card p-6 shadow-soft"
          >
            <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <Phone className="size-6" />
            </span>
            <p className="mt-4 font-display text-base font-bold text-navy">Call or email</p>
            <div className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              {company.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/[\s-]/g, "")}`}
                  className="block transition-colors hover:text-primary"
                >
                  {phone}
                </a>
              ))}
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="size-4" /> {company.email}
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer noopener"
                className="block font-semibold text-primary underline underline-offset-4"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Enquiries"
              title="Send a detailed manufacturing enquiry"
              description="The request-a-quote form captures your service, product, quantity and market so we can respond precisely."
            />
            <Button asChild variant="hero" size="lg" className="mt-7">
              <Link to="/rfq">Request a Quote</Link>
            </Button>
          </div>
          <Reveal className="overflow-hidden rounded-2xl border border-border shadow-lift">
            <iframe
              title="GM Pharma office location map"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              loading="lazy"
              className="h-80 w-full"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
