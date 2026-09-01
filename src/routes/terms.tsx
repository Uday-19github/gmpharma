import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { company } from "@/data/company";

const title = "Terms & Conditions — GM Pharma";
const description =
  "Terms governing the use of the GM Pharma website and manufacturing enquiries submitted through it.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    heading: "About this website",
    body: "This website is published by G M Pharma to describe its pharmaceutical and nutraceutical manufacturing services and to receive manufacturing enquiries. Content is provided for general information and does not constitute a binding offer to manufacture or supply any product.",
  },
  {
    heading: "Enquiries & quotations",
    body: "Submitting the Request a Quote form or contacting us does not create a manufacturing agreement. Commercial terms, specifications, minimum order quantities and timelines are confirmed separately in writing once your requirement has been reviewed.",
  },
  {
    heading: "Intellectual property",
    body: "The GM Pharma name, logo and website content are the property of G M Pharma and may not be reproduced without permission, other than for personal, non-commercial reference.",
  },
  {
    heading: "Accuracy of information",
    body: "We take care to keep information on this website accurate and current. Certificate numbers and validity dates are shown only once the underlying documents have been supplied to us for publication.",
  },
  {
    heading: "Governing law",
    body: "These terms are governed by the laws of India. Any dispute arising from use of this website is subject to the jurisdiction of the courts in Bangalore, Karnataka.",
  },
];

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Please read these terms before using this website or submitting a manufacturing enquiry."
        crumb="Terms & Conditions"
      />
      <section className="py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <div className="space-y-10">
            {sections.map((section, index) => (
              <Reveal key={section.heading} delay={index * 60}>
                <h2 className="font-display text-lg font-bold text-navy">{section.heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{section.body}</p>
              </Reveal>
            ))}
            <Reveal
              delay={sections.length * 60}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h2 className="font-display text-lg font-bold text-navy">
                Questions about these terms
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Write to{" "}
                <a href={`mailto:${company.email}`} className="font-semibold text-primary">
                  {company.email}
                </a>{" "}
                or call {company.phones[0]}.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
