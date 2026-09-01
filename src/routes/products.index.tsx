import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/data/products";

const title = "Products — GM Pharma Manufacturing";
const description =
  "Browse APIs, formulations, intermediates and nutraceutical supplements manufactured by GM Pharma.";

export const Route = createFileRoute("/products/")({
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
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="150+ Pharmaceutical & Nutraceutical Products"
        description="APIs, finished formulations, supplements and intermediates manufactured to international quality standards."
        crumb="Products"
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2">
            {productCategories.map((category, index) => (
              <Reveal key={category.slug} delay={index * 50} asChild>
                <Link
                  to="/products/$category"
                  params={{ category: category.slug }}
                  className="card-hover group overflow-hidden rounded-2xl border border-border bg-card shadow-soft hover:border-primary/40"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={category.image}
                      alt={category.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/0 to-navy/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-2xl font-bold text-navy">{category.name}</h2>
                    <p className="mt-1 text-sm font-medium text-primary">{category.short}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {category.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-primary transition-transform group-hover:translate-x-1">
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="container-page">
          <Reveal className="max-w-3xl mx-auto text-center">
            <SectionHeading
              eyebrow="Looking for something specific?"
              title="Can't find what you need?"
              description="Our manufacturing capabilities extend across many pharmaceutical and nutraceutical products. If you don't see your requirement listed, contact our team to discuss custom manufacturing options."
            />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/rfq">Request a Quote</Link>
              </Button>
              <Button asChild variant="quiet" size="lg">
                <Link to="/contact">
                  Get in Touch
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
