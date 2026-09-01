import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { resolveIcon } from "@/lib/icons";
import { capabilities, coreValues, services } from "@/data/company";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const service = services.find((item) => item.slug === params.slug);
    const title = service ? `${service.name} — ${service.full} | GM Pharma` : "Service — GM Pharma";
    const description = service?.description ?? "GM Pharma manufacturing services.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4 py-24">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-foreground">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-foreground">Service not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The service you're looking for doesn't exist.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link to="/services">
                <ArrowLeft className="mr-2 size-4" />
                Back to Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const Icon = resolveIcon(service.icon);
  const otherServices = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={service.name}
        description={service.full}
        crumb={service.name}
      />

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <Reveal className="flex items-center gap-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl gradient-teal text-primary-foreground shadow-soft">
                <Icon className="size-6" />
              </span>
              <div>
                <p className="text-xs font-bold tracking-[0.24em] text-primary uppercase">
                  About this service
                </p>
                <h2 className="mt-1 font-display text-2xl font-bold text-navy">{service.name}</h2>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </Reveal>

            <Reveal delay={140} className="mt-10">
              <p className="font-display text-base font-bold text-navy">
                Manufacturing capabilities we bring to this service
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {capabilities.map((capability) => (
                  <span
                    key={capability}
                    className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-navy shadow-soft"
                  >
                    {capability}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200} className="mt-10 grid gap-4 sm:grid-cols-2">
              {coreValues.slice(0, 4).map((value) => (
                <div
                  key={value.title}
                  className="flex gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-display text-sm font-bold text-navy">{value.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal delay={240} className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/rfq">Request a Quote for {service.name}</Link>
              </Button>
              <Button asChild variant="quiet" size="lg">
                <Link to="/contact">Talk to Our Team</Link>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={100} as="aside" className="space-y-5">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <p className="font-display text-base font-bold text-navy">Other services</p>
              <div className="mt-4 space-y-1">
                {otherServices.map((item) => {
                  const OtherIcon = resolveIcon(item.icon);
                  return (
                    <Link
                      key={item.slug}
                      to="/services/$slug"
                      params={{ slug: item.slug }}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-accent"
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent text-primary">
                        <OtherIcon className="size-4" />
                      </span>
                      <span className="text-sm font-semibold text-navy">{item.name}</span>
                    </Link>
                  );
                })}
              </div>
              <Link
                to="/services"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-primary uppercase"
              >
                View all services
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="gradient-navy rounded-2xl p-6 text-navy-foreground">
              <p className="font-display text-base font-bold">Need documentation?</p>
              <p className="mt-2 text-sm text-navy-foreground/80">
                Facility approvals and technical dossiers are shared with qualified partners on
                request.
              </p>
              <Button asChild variant="onDark" className="mt-5">
                <Link to="/quality">Quality &amp; Compliance</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
