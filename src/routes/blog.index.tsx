import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Folder } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { blogPosts } from "@/data/blog";

const title = "Blog — GM Pharma Pharmaceutical Manufacturing Insights";
const description =
  "Latest articles on pharmaceutical manufacturing, contract manufacturing, nutraceuticals and industry insights from GM Pharma.";

export const Route = createFileRoute("/blog/")({
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
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights & Knowledge"
        description="Articles on pharmaceutical manufacturing, contract development, nutraceuticals and industry best practices."
        crumb="Blog"
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 50} asChild className="group cursor-pointer">
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="card-hover overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/40"
                >
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase">
                        <Folder className="size-3.5" />
                        {post.category}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="size-3.5" />
                        {post.readingTime}
                      </div>
                    </div>
                    <h2 className="mt-4 font-display text-lg font-bold text-navy line-clamp-3">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <time className="text-xs text-muted-foreground">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                      <span className="text-primary transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
