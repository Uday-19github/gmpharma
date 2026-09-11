import apiImage from "@/assets/prod-api.jpg";
import formulationsImage from "@/assets/prod-formulations.jpg";
import intermediatesImage from "@/assets/prod-intermediates.jpg";
import supplementsImage from "@/assets/prod-supplements.jpg";

/**
 * CMS-ready product structure.
 *
 * Only product names published on GM Pharma's existing website are listed.
 * Specifications, packaging and datasheet PDFs are intentionally left empty
 * where GM Pharma has not supplied them — the UI shows a clearly labelled
 * "available on request" state instead of invented data.
 */
export type ProductStatus = "published" | "on-request";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategorySlug;
  dosageForm: string;
  description: string;
  details?: string;
  specifications?: { label: string; value: string }[];
  packaging?: string;
  applications?: string[];
  pdf?: string;
  status: ProductStatus;
}

export type ProductCategorySlug = "supplements" | "api" | "formulations" | "intermediates";

export interface ProductCategory {
  slug: ProductCategorySlug;
  name: string;
  short: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const productCategories: ProductCategory[] = [
  {
    slug: "api",
    name: "API",
    short: "Active Pharmaceutical Ingredients",
    description:
      "Active Pharmaceutical Ingredients manufactured and supplied for domestic and international pharmaceutical customers.",
    image: apiImage,
    imageAlt: "Fine white active pharmaceutical ingredient powder in laboratory glassware",
  },
  {
    slug: "formulations",
    name: "Formulations",
    short: "Pharmaceutical formulations",
    description:
      "Finished dosage formulations including Tablets, Capsules, Injectables, Eye drops and Ointments.",
    image: formulationsImage,
    imageAlt: "Pharmaceutical tablets in blister packs beside a glass bottle",
  },
  {
    slug: "intermediates",
    name: "Intermediates",
    short: "Pharmaceutical intermediates",
    description:
      "API intermediates manufactured to customer specifications for onward pharmaceutical synthesis.",
    image: intermediatesImage,
    imageAlt: "Laboratory glassware used in pharmaceutical intermediate synthesis",
  },
  {
    slug: "supplements",
    name: "Supplements",
    short: "Pharmaceutical & nutraceutical supplements",
    description:
      "Nutraceutical and dietary supplement range covering vitamins, minerals, botanicals and probiotics.",
    image: supplementsImage,
    imageAlt: "Nutraceutical supplement capsules spilling from a white bottle",
  },
];

export const getCategory = (slug: string) =>
  productCategories.find((category) => category.slug === slug);

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const supplementNames: { name: string; form: string }[] = [
  { name: "Amla 500mg", form: "Capsules" },
  { name: "Apple Cider Vinegar", form: "Tablets" },
  { name: "Ashwagandha", form: "Capsules" },
  { name: "Bacopa, Ginkgo Biloba, Ginger Taurine", form: "Capsules" },
  { name: "Berberine and Kutki", form: "Capsules" },
  { name: "Bitter Melon, Cinnamon, Vitamins, Minerals and Carnitine", form: "Tablets" },
  { name: "Bowel Health Probiotic", form: "Capsules" },
  { name: "Calcium Citrate 250mg with Vitamin D3", form: "Tablets" },
  { name: "Calcium Citrate 500mg with Vitamin D3 1000 IU", form: "Tablets" },
  { name: "Calcium Citrate 100mg with Vitamin D3", form: "Tablets" },
  { name: "Calcium, Magnesium, Zinc, Vitamin C and Vitamin D", form: "Tablets" },
  { name: "Calcium, Magnesium, Zinc, Vitamin D3 and Vitamin K2", form: "Tablets" },
  { name: "Chromium 250 mcg", form: "Tablets" },
  { name: "Co-Enzyme Q10", form: "Capsules" },
  { name: "Cranberry 400mg", form: "Capsules" },
  { name: "Cranberry D-Mannose", form: "Capsules" },
];

const supplements: Product[] = supplementNames.map(({ name, form }) => ({
  slug: slugify(name),
  name,
  category: "supplements",
  dosageForm: form,
  description: `${name} ${form.toLowerCase()} manufactured by GM Pharma as part of our nutraceutical supplement range.`,
  status: "published",
}));

const onRequest = (
  category: ProductCategorySlug,
  name: string,
  dosageForm: string,
  description: string,
): Product => ({
  slug: slugify(name),
  name,
  category,
  dosageForm,
  description,
  status: "on-request",
});

export const products: Product[] = [
  ...supplements,
  onRequest(
    "formulations",
    "Tablets",
    "Oral solid dosage",
    "Tablet manufacturing for pharmaceutical brands and third-party partners. Product-level specifications are shared on enquiry.",
  ),
  onRequest(
    "formulations",
    "Capsules",
    "Oral solid dosage",
    "Hard and soft capsule manufacturing to customer formulations. Product-level specifications are shared on enquiry.",
  ),
  onRequest(
    "formulations",
    "Injectables",
    "Sterile dosage",
    "Injectable manufacturing supported by controlled manufacturing environments. Specifications are shared on enquiry.",
  ),
  onRequest(
    "formulations",
    "Eye Drops",
    "Ophthalmic",
    "Ophthalmic eye drop manufacturing. Specifications are shared on enquiry.",
  ),
  onRequest(
    "formulations",
    "Ointments",
    "Topical",
    "Topical ointment and semi-solid manufacturing. Specifications are shared on enquiry.",
  ),
  onRequest(
    "formulations",
    "Chemotherapy Drugs",
    "Oncology dosage",
    "Chemotherapy drug manufacturing for oncology formulations. Specifications are shared on enquiry.",
  ),
  onRequest(
    "api",
    "Active Pharmaceutical Ingredients",
    "API",
    "GM Pharma manufactures and supplies Active Pharmaceutical Ingredients. Share your molecule and volume requirement and our team will respond with availability and documentation.",
  ),
  onRequest(
    "intermediates",
    "API Intermediates",
    "Intermediate",
    "API intermediates manufactured to customer specifications. Share your requirement and our team will respond with availability and documentation.",
  ),
];

export const getProduct = (category: string, slug: string) =>
  products.find((product) => product.category === category && product.slug === slug);

export const productsByCategory = (category: string) =>
  products.filter((product) => product.category === category);
