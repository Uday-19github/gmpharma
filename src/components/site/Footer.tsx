import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "./Logo";
import { company, services, whatsappLink } from "@/data/company";
import { productCategories } from "@/data/products";

const iconMap = {
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
} as const;

export function Footer() {
  return (
    <footer className="gradient-navy text-navy-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-foreground/75">
            {company.shortDescription}
          </p>
          <div className="mt-6 flex items-center gap-3">
            {company.social.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={item.label}
                  className="grid size-9 place-items-center rounded-lg border border-navy-foreground/25 text-navy-foreground/85 transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>

        <FooterColumn title="Products">
          {productCategories.map((category) => (
            <Link
              key={category.slug}
              to="/products/$category"
              params={{ category: category.slug }}
              className="block py-1 text-sm text-navy-foreground/75 transition-colors hover:text-primary"
            >
              {category.name}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title="Information">
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/products">Products</FooterLink>
          <FooterLink to="/quality">Quality</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
          <FooterLink to="/contact">Contact Us</FooterLink>
        </FooterColumn>

        <FooterColumn title="Services">
          {services.map((service) => (
            <Link
              key={service.slug}
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="block py-1 text-sm text-navy-foreground/75 transition-colors hover:text-primary"
            >
              {service.name}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact Us">
          <p className="flex gap-3 py-1 text-sm text-navy-foreground/75">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>{company.offices.office.lines.join(" ")}</span>
          </p>
          <p className="flex gap-3 py-1 text-sm text-navy-foreground/75">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>Factory: {company.offices.factory.lines.join(" ")}</span>
          </p>
          <p className="flex gap-3 py-1 text-sm text-navy-foreground/75">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>US: {company.offices.us.lines.join(" ")}</span>
          </p>
          {company.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/[\s-]/g, "")}`}
              className="flex items-center gap-3 py-1 text-sm text-navy-foreground/75 transition-colors hover:text-primary"
            >
              <Phone className="size-4 shrink-0 text-primary" />
              {phone}
            </a>
          ))}
          <a
            href={`mailto:${company.email}`}
            className="flex items-center gap-3 py-1 text-sm text-navy-foreground/75 transition-colors hover:text-primary"
          >
            <Mail className="size-4 shrink-0 text-primary" />
            {company.email}
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-2 inline-block text-sm font-semibold text-primary underline underline-offset-4"
          >
            Chat on WhatsApp
          </a>
        </FooterColumn>
      </div>

      <div className="border-t border-navy-foreground/15">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-navy-foreground/65 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-primary">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-display text-xs font-bold tracking-[0.2em] text-navy-foreground uppercase">
        {title}
      </p>
      <div className="mt-4 space-y-0.5">{children}</div>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      className="block py-1 text-sm text-navy-foreground/75 transition-colors hover:text-primary"
    >
      {children}
    </Link>
  );
}
