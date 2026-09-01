import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { RfqForm } from "@/components/site/RfqForm";
import { company } from "@/data/company";

const title = "Request a Quote — GM Pharma Manufacturing Enquiry";
const description =
  "Share your pharmaceutical or nutraceutical manufacturing requirement and GM Pharma will respond with capability, documentation and commercial details.";

export const Route = createFileRoute("/rfq")({
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
  component: RfqPage,
});

function RfqPage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Tell us what you need manufactured"
        description="A short three-step enquiry gives our team everything needed to respond with capability and commercials."
        crumb="Request a Quote"
      />
      <section className="bg-surface py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <RfqForm />
          <aside className="space-y-5">
            <div className="card-hover rounded-2xl border border-border bg-card p-6 shadow-soft">
              <p className="font-display text-base font-bold text-navy">Prefer to talk?</p>
              <div className="mt-3 space-y-2 text-sm text-muted-foreground">
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
                  className="block transition-colors hover:text-primary"
                >
                  {company.email}
                </a>
              </div>
            </div>
            <div className="gradient-navy rounded-2xl p-6 text-navy-foreground">
              <p className="font-display text-base font-bold">What happens next</p>
              <ol className="mt-3 space-y-2 text-sm text-navy-foreground/80">
                <li>1. We review your requirement and confirm feasibility.</li>
                <li>2. We share capability, documentation and indicative commercials.</li>
                <li>3. We agree scope, timelines and packaging approvals.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
