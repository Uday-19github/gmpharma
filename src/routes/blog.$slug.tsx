import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Folder, Share2, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { blogPosts } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = blogPosts.find((item) => item.slug === params.slug);
    const title = post ? `${post.title} — GM Pharma Blog` : "Article — GM Pharma Blog";
    const description = post?.excerpt ?? "Pharmaceutical manufacturing insights from GM Pharma.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-foreground">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-foreground">Article not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 size-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <article>
        {/* Hero Section */}
        <section className="bg-surface">
          <div className="container-page py-10 sm:py-14">
            <Reveal>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                <ArrowLeft className="size-4" />
                Back to Blog
              </Link>
            </Reveal>
            <Reveal delay={50}>
              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase">
                      <Folder className="size-3.5" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="size-3.5" />
                      {post.readingTime}
                    </span>
                  </div>
                  <h1 className="mt-4 max-w-3xl text-3xl leading-tight font-extrabold text-navy sm:text-4xl lg:text-5xl">
                    {post.title}
                  </h1>
                  <time className="mt-4 block text-sm text-muted-foreground">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-muted">
          <div className="container-page">
            <Reveal className="aspect-video overflow-hidden rounded-2xl">
              <img
                src={post.image}
                alt={post.imageAlt}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </Reveal>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-20">
          <div className="container-page max-w-3xl">
            {post.body.map((section, index) => (
              <Reveal key={index} delay={index * 50}>
                {section.heading && (
                  <h2 className="mt-12 text-2xl leading-tight font-bold text-navy first:mt-0">
                    {section.heading}
                  </h2>
                )}
                <div className={`space-y-4 ${section.heading ? "mt-6" : ""}`}>
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-base leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-6 space-y-3 list-none">
                    {section.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="flex gap-3 text-muted-foreground">
                        <span className="mt-1.5 flex-shrink-0 size-2 rounded-full bg-primary" />
                        <span className="text-base leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}

            {/* Share Section */}
            <Reveal delay={post.body.length * 50} className="mt-12 border-t border-border pt-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-navy">Share this article</p>
                  <p className="text-xs text-muted-foreground">
                    Spread knowledge in the pharma community
                  </p>
                </div>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: post.title,
                        text: post.excerpt,
                        url: window.location.href,
                      });
                    }
                  }}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-navy transition-all hover:border-primary hover:bg-surface"
                >
                  <Share2 className="size-4" />
                  Share
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-surface py-16 sm:py-20">
            <div className="container-page">
              <Reveal>
                <h2 className="text-2xl leading-tight font-bold text-navy">Related Articles</h2>
              </Reveal>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {relatedPosts.map((relatedPost, index) => (
                  <Reveal
                    key={relatedPost.slug}
                    delay={(index + 1) * 50}
                    asChild
                    className="group cursor-pointer"
                  >
                    <Link
                      to="/blog/$slug"
                      params={{ slug: relatedPost.slug }}
                      className="overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary hover:shadow-lift"
                    >
                      <div className="aspect-video overflow-hidden bg-muted">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.imageAlt}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5">
                        <span className="text-xs font-semibold text-primary uppercase">
                          {relatedPost.category}
                        </span>
                        <h3 className="mt-2 font-display text-base font-bold text-navy line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="gradient-teal py-14 text-primary-foreground sm:py-16">
          <div className="container-page flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl font-bold">Have a manufacturing requirement?</h2>
              <p className="mt-2 text-sm text-primary-foreground/85">
                Share your product and let our team respond with capability and commercials.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-white text-navy font-semibold hover:bg-white/90"
            >
              <Link to="/rfq">
                Request a Quote
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </section>
      </article>
    </>
  );
}
