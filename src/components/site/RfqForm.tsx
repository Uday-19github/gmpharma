import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { countries, services } from "@/data/company";
import { productCategories } from "@/data/products";

const steps = ["Requirement", "Specifications", "Your details"] as const;

interface FormState {
  service: string;
  category: string;
  productDetail: string;
  quantity: string;
  timeline: string;
  market: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  notes: string;
}

const initialState: FormState = {
  service: "",
  category: "",
  productDetail: "",
  quantity: "",
  timeline: "",
  market: "",
  name: "",
  company: "",
  email: "",
  phone: "",
  notes: "",
};

export function RfqForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const set = (key: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const canContinue =
    step === 0
      ? Boolean(form.service && form.category)
      : step === 1
        ? Boolean(form.productDetail)
        : Boolean(form.name && form.company && form.email);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!canContinue) return;
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSubmitting(false);
    setDone(true);
    toast.success("Enquiry captured", {
      description: "Our team will respond with capability and commercial details.",
    });
  };

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-lift">
        <span className="mx-auto grid size-14 place-items-center rounded-full gradient-teal text-primary-foreground">
          <Check className="size-6" />
        </span>
        <h2 className="mt-5 font-display text-2xl font-bold text-navy">Thank you, {form.name}</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Your enquiry for {form.category || "our products"} has been recorded. A member of our
          business development team will contact you at {form.email}.
        </p>
        <Button
          variant="quiet"
          className="mt-7"
          onClick={() => {
            setForm(initialState);
            setStep(0);
            setDone(false);
          }}
        >
          Submit another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl border border-border bg-card p-6 shadow-lift sm:p-8"
    >
      <ol className="flex flex-wrap items-center gap-3">
        {steps.map((label, index) => (
          <li key={label} className="flex items-center gap-3">
            <span
              className={cn(
                "grid size-8 place-items-center rounded-full text-xs font-bold transition-colors",
                index <= step
                  ? "gradient-teal text-primary-foreground"
                  : "bg-muted text-muted-foreground",
              )}
            >
              {index + 1}
            </span>
            <span
              className={cn(
                "text-xs font-semibold tracking-wide uppercase",
                index === step ? "text-navy" : "text-muted-foreground",
              )}
            >
              {label}
            </span>
            {index < steps.length - 1 ? (
              <span aria-hidden="true" className="hidden h-px w-8 bg-border sm:block" />
            ) : null}
          </li>
        ))}
      </ol>

      <div className="mt-8 space-y-5">
        {step === 0 ? (
          <>
            <Field label="Service required">
              <select
                required
                value={form.service}
                onChange={(event) => set("service", event.target.value)}
                className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.slug} value={service.name}>
                    {service.name} — {service.full}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Product category">
              <div className="grid gap-3 sm:grid-cols-2">
                {productCategories.map((category) => (
                  <button
                    key={category.slug}
                    type="button"
                    onClick={() => set("category", category.name)}
                    className={cn(
                      "rounded-xl border px-4 py-3 text-left transition-colors",
                      form.category === category.name
                        ? "border-primary bg-accent"
                        : "border-border hover:border-primary/40",
                    )}
                  >
                    <p className="font-display text-sm font-bold text-navy">{category.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{category.short}</p>
                  </button>
                ))}
              </div>
            </Field>
          </>
        ) : null}

        {step === 1 ? (
          <>
            <Field label="Product / molecule details">
              <Textarea
                required
                rows={4}
                value={form.productDetail}
                onChange={(event) => set("productDetail", event.target.value)}
                placeholder="Describe the product, dosage form, strength or molecule."
              />
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Estimated quantity">
                <Input
                  value={form.quantity}
                  onChange={(event) => set("quantity", event.target.value)}
                  placeholder="e.g. 100,000 tablets / month"
                />
              </Field>
              <Field label="Required timeline">
                <Input
                  value={form.timeline}
                  onChange={(event) => set("timeline", event.target.value)}
                  placeholder="e.g. within 3 months"
                />
              </Field>
            </div>
            <Field label="Target market">
              <select
                value={form.market}
                onChange={(event) => set("market", event.target.value)}
                className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm"
              >
                <option value="">Select a market</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </Field>
          </>
        ) : null}

        {step === 2 ? (
          <>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name">
                <Input
                  required
                  value={form.name}
                  onChange={(event) => set("name", event.target.value)}
                />
              </Field>
              <Field label="Company">
                <Input
                  required
                  value={form.company}
                  onChange={(event) => set("company", event.target.value)}
                />
              </Field>
              <Field label="Business email">
                <Input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => set("email", event.target.value)}
                />
              </Field>
              <Field label="Phone">
                <Input value={form.phone} onChange={(event) => set("phone", event.target.value)} />
              </Field>
            </div>
            <Field label="Additional notes">
              <Textarea
                rows={3}
                value={form.notes}
                onChange={(event) => set("notes", event.target.value)}
                placeholder="Documentation, packaging or regulatory requirements."
              />
            </Field>
          </>
        ) : null}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <Button
          type="button"
          variant="quiet"
          disabled={step === 0}
          onClick={() => setStep((value) => Math.max(0, value - 1))}
        >
          <ArrowLeft /> Back
        </Button>
        {step < steps.length - 1 ? (
          <Button
            type="button"
            variant="hero"
            disabled={!canContinue}
            onClick={() => setStep((value) => value + 1)}
          >
            Continue <ArrowRight />
          </Button>
        ) : (
          <Button type="submit" variant="hero" disabled={!canContinue || submitting}>
            {submitting ? <Loader2 className="animate-spin" /> : null}
            Submit enquiry
          </Button>
        )}
      </div>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label className="text-xs font-bold tracking-wide text-navy uppercase">{label}</Label>
      {children}
    </div>
  );
}
