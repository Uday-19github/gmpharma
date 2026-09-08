import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";

import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { company } from "@/data/company";
import { productCategories } from "@/data/products";
import { services } from "@/data/company";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Quality", to: "/quality" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<"services" | "products" | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-navy text-navy-foreground lg:block">
        <div className="container-page flex h-10 items-center justify-between text-xs">
          <p className="font-medium tracking-wide text-navy-foreground/85">{company.positioning}</p>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${company.phones[0].replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Phone className="size-3.5" />
              {company.phones[0]}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Mail className="size-3.5" />
              {company.email}
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-b border-border/70 bg-background/95 backdrop-blur transition-shadow",
          scrolled && "shadow-header",
        )}
        onMouseLeave={() => setMenu(null)}
      >
        <div className="container-page flex h-18 items-center justify-between gap-4 py-3">
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            <NavItem to="/" label="Home" />
            <NavItem to="/about" label="About" />

            <MegaTrigger
              label="Services"
              active={pathname.startsWith("/services")}
              open={menu === "services"}
              onOpen={() => setMenu("services")}
            />
            <MegaTrigger
              label="Products"
              active={pathname.startsWith("/products")}
              open={menu === "products"}
              onOpen={() => setMenu("products")}
            />

            <NavItem to="/quality" label="Quality" />
            <NavItem to="/blog" label="Blog" />
            <NavItem to="/contact" label="Contact" />
          </nav>

          <div className="hidden lg:block">
            <Button asChild variant="hero" size="default">
              <Link to="/rfq">Request a Quote</Link>
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-lg border border-border text-navy lg:hidden"
          >
            {open ? <Menu className="size-5 hidden" /> : null}
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {menu ? (
          <div className="absolute inset-x-0 hidden border-b border-border bg-card shadow-lift lg:block">
            <div className="container-page grid gap-8 py-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-xs font-bold tracking-[0.24em] text-primary uppercase">
                  {menu === "services" ? "Our Services" : "Product Range"}
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {menu === "services"
                    ? services.map((service) => (
                        <Link
                          key={service.slug}
                          to="/services/$slug"
                          params={{ slug: service.slug }}
                          className="rounded-xl border border-transparent p-3 transition-colors hover:border-primary/30 hover:bg-accent"
                        >
                          <p className="font-display text-sm font-bold text-navy">{service.name}</p>
                          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                            {service.full}
                          </p>
                        </Link>
                      ))
                    : productCategories.map((category) => (
                        <Link
                          key={category.slug}
                          to="/products/$category"
                          params={{ category: category.slug }}
                          className="rounded-xl border border-transparent p-3 transition-colors hover:border-primary/30 hover:bg-accent"
                        >
                          <p className="font-display text-sm font-bold text-navy">
                            {category.name}
                          </p>
                          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                            {category.short}
                          </p>
                        </Link>
                      ))}
                </div>
              </div>
              <div className="rounded-2xl gradient-navy p-6 text-navy-foreground">
                <p className="font-display text-lg font-bold">
                  {menu === "services"
                    ? "Looking for a manufacturing partner?"
                    : "Need product specifications?"}
                </p>
                <p className="mt-2 text-sm text-navy-foreground/80">
                  Share your requirement and our team will respond with capability, documentation
                  and commercial details.
                </p>
                <Button asChild variant="onDark" className="mt-5">
                  <Link to="/rfq">Start an enquiry</Link>
                </Button>
                <Link
                  to={menu === "services" ? "/services" : "/products"}
                  className="mt-4 block text-xs font-semibold tracking-wide text-navy-foreground/80 underline underline-offset-4"
                >
                  View all {menu === "services" ? "services" : "products"}
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {open ? (
        <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-b border-border bg-card lg:hidden">
          <nav aria-label="Mobile" className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-lg px-3 py-3 font-display text-base font-semibold text-navy transition-colors hover:bg-accent"
              >
                {link.label}
              </Link>
            ))}

            <MobileGroup title="Services" basePath="/services">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent"
                >
                  {service.name}
                </Link>
              ))}
            </MobileGroup>

            <MobileGroup title="Products" basePath="/products">
              {productCategories.map((category) => (
                <Link
                  key={category.slug}
                  to="/products/$category"
                  params={{ category: category.slug }}
                  className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent"
                >
                  {category.name}
                </Link>
              ))}
            </MobileGroup>

            <Button asChild variant="hero" size="lg" className="mt-3">
              <Link to="/rfq">Request a Quote</Link>
            </Button>
            <a
              href={`tel:${company.phones[0].replace(/\s/g, "")}`}
              className="mt-2 inline-flex items-center justify-center gap-2 py-2 text-sm font-semibold text-primary"
            >
              <Phone className="size-4" /> {company.phones[0]}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      activeOptions={{ exact: to === "/" }}
      className="rounded-lg px-3 py-2 text-sm font-semibold text-navy/80 transition-colors hover:bg-accent hover:text-primary"
      activeProps={{ className: "text-primary bg-accent" }}
    >
      {label}
    </Link>
  );
}

function MegaTrigger({
  label,
  open,
  active,
  onOpen,
}: {
  label: string;
  open: boolean;
  active: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onOpen}
      onFocus={onOpen}
      onClick={onOpen}
      aria-expanded={open}
      className={cn(
        "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:bg-accent hover:text-primary",
        active || open ? "bg-accent text-primary" : "text-navy/80",
      )}
    >
      {label}
      <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
    </button>
  );
}

function MobileGroup({
  title,
  basePath,
  children,
}: {
  title: string;
  basePath: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-3 py-3 font-display text-base font-semibold text-navy"
      >
        {title}
        <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
      </button>
      {open ? (
        <div className="pb-2 pl-2">
          <Link
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            to={basePath as any}
            className="block rounded-lg px-3 py-2 text-sm font-semibold text-primary hover:bg-accent"
          >
            All {title}
          </Link>
          {children}
        </div>
      ) : null}
    </div>
  );
}
