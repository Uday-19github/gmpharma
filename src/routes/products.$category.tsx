import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getCategory, productsByCategory, type Product } from "@/data/products";

export const Route = createFileRoute("/products/$category")({
  component: ProductCategoryPage,
});

function ProductCategoryPage() {
  const { category } = Route.useParams();
  const categoryData = getCategory(category);
  const products = productsByCategory(category);

  if (!categoryData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-foreground">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-foreground">Category not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The product category you're looking for doesn't exist.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link to="/products">
                <ArrowLeft className="mr-2 size-4" />
                Back to Products
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const statusBadgeVariant = (status: Product["status"]) => {
    return status === "published" ? "default" : "secondary";
  };

  const statusBadgeText = (status: Product["status"]) => {
    return status === "published" ? "In Stock" : "Available on Request";
  };

  return (
    <>
      <PageHero
        eyebrow="Products"
        title={categoryData.name}
        description={categoryData.description}
        crumb={categoryData.name}
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <Reveal className="mb-8 flex items-center justify-between">
            <div>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                <ArrowLeft className="size-4" />
                Back to Products
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                {products.length} product{products.length !== 1 ? "s" : ""} in this category
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Reveal
                key={`${product.category}-${product.slug}`}
                delay={index * 50}
                className="card-hover rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-navy">{product.name}</h3>
                    <p className="mt-1 text-xs font-medium text-muted-foreground uppercase">
                      {product.dosageForm}
                    </p>
                  </div>
                  <Badge variant={statusBadgeVariant(product.status)} className="flex-shrink-0">
                    {statusBadgeText(product.status)}
                  </Badge>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>

                {product.applications && product.applications.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold text-navy">Applications:</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {product.applications.map((app) => (
                        <Badge key={app} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {product.specifications && product.specifications.length > 0 && (
                  <div className="mt-4 space-y-2 border-t border-border/50 pt-4">
                    {product.specifications.map((spec) => (
                      <div key={spec.label} className="flex justify-between gap-4">
                        <span className="text-xs font-medium text-muted-foreground">
                          {spec.label}
                        </span>
                        <span className="text-xs font-semibold text-navy">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {product.packaging && (
                  <div className="mt-4 border-t border-border/50 pt-4">
                    <p className="text-xs font-medium text-muted-foreground">
                      <span className="font-semibold text-navy">Packaging:</span>{" "}
                      {product.packaging}
                    </p>
                  </div>
                )}

                {product.pdf && (
                  <a
                    href={product.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    Download Datasheet
                    <ArrowRight className="size-3" />
                  </a>
                )}
              </Reveal>
            ))}
          </div>

          {products.length === 0 && (
            <Reveal className="rounded-2xl border border-border bg-surface p-12 text-center">
              <p className="text-muted-foreground">No products found in this category.</p>
            </Reveal>
          )}
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl leading-tight font-bold text-navy sm:text-3xl">
              Need a custom formulation or specification?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our development team can work with you to create tailored solutions for your specific
              requirements.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/rfq">Request Custom Solution</Link>
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
