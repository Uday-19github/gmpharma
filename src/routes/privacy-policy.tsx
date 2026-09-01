import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { company } from "@/data/company";

const title = "Privacy Policy — GM Pharma";
const description =
  "How GM Pharma collects, uses and protects information shared through this website.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PrivacyPolicyPage,
});

const sections = [
  {
    heading: "Information we collect",
    body: "We collect information you provide directly — such as your name, company, email, phone number and enquiry details — when you submit our Request a Quote form, contact form, or write to us by email or WhatsApp. We do not knowingly collect sensitive personal data through this website.",
  },
  {
    heading: "How we use it",
    body: "Information you share is used solely to respond to your manufacturing enquiry, prepare quotations and documentation, and communicate with you about your requirement. We do not sell, rent or trade your personal information to third parties.",
  },
  {
    heading: "Cookies & analytics",
    body: "This website may use essential cookies required for the site to function, and aggregated analytics to understand how pages are used so we can improve content and performance. These do not identify you personally.",
  },
  {
    heading: "Data retention",
    body: "Enquiry and correspondence records are retained only as long as needed to service your request and meet our legitimate business and legal record-keeping needs.",
  },
  {
    heading: "Your rights",
    body: "You may ask us to access, correct or delete the personal information we hold about you at any time by contacting us using the details below.",
  },
];

function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: information on this page reflects how GM Pharma currently handles data submitted through this website."
        crumb="Privacy Policy"
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
              <h2 className="font-display text-lg font-bold text-navy">Contact us about privacy</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                For any privacy-related request, write to{" "}
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
