/**
 * Central business-information configuration.
 * Every component reads company facts from here so the site can never show
 * conflicting addresses, phone numbers, emails or copyright years.
 * Only verified information supplied by GM Pharma belongs in this file.
 */

export const company = {
  name: "GM Pharma",
  legalName: "G M Pharma",
  tagline: "Empowering a healthier world without boundaries.",
  positioning: "Pharmaceutical & Nutraceutical Manufacturing",
  establishedYear: 2018,
  shortDescription:
    "GM Pharma is an emerging Pharmaceutical & Nutraceutical manufacturing company delivering high-quality, cost-effective and customer-centric manufacturing solutions for domestic and global markets.",
  founders: ["Mr. G. H. K. Reddy", "Ms. K. Shanthala"],
  email: "gm@gmpharma.us",
  phones: ["+91 94480 84119", "+91 91132 75641", "080-28468919", "080-42093529"],
  whatsapp: {
    number: "919448084119",
    display: "+91 94480 84119",
    message:
      "Hello GM Pharma, I would like to discuss a pharmaceutical / nutraceutical manufacturing requirement.",
  },
  offices: {
    office: {
      label: "Office Address",
      lines: [
        "G M Pharma, #29, B J Complex, First Floor,",
        "Hebbal, Bangalore - 560024, Karnataka, India",
      ],
    },
    factory: {
      label: "Factory Address",
      lines: ["Sy no 142/2, Sathyasai dst, Gollapuram,", "Hindupur, Andhra Pradesh, India"],
    },
    us: {
      label: "US Address",
      lines: ["3202 McKnight East Dr PMB 200,", "Pittsburgh, PA 15237, USA"],
    },
  },
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
    { label: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
    { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
  ],
} as const;

export const whatsappLink = `https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(
  company.whatsapp.message,
)}`;

export const mapsQuery = encodeURIComponent(
  "G M Pharma, #29, B J Complex, First Floor, Hebbal, Bangalore 560024, Karnataka",
);

export const stats = [
  { value: 50, suffix: "+", label: "Locations" },
  { value: 500, suffix: "+", label: "Customers" },
  { value: 150, suffix: "+", label: "Products" },
] as const;

export const capabilities = [
  "Pharmaceutical Manufacturing",
  "Nutraceutical Manufacturing",
  "API",
  "CMO",
  "CDMO",
  "CRO",
  "Animal Health Products",
  "Vitamins",
  "Flavors & Fragrances",
  "Fine & Specialty Chemicals",
] as const;

export const services = [
  {
    slug: "cmo",
    name: "CMO",
    full: "Contract Manufacturing Organization",
    icon: "factory",
    description:
      "Reliable contract manufacturing of pharmaceutical and nutraceutical dosage forms to your brand and specifications.",
  },
  {
    slug: "cdmo",
    name: "CDMO",
    full: "Contract Development & Manufacturing Organization",
    icon: "flask",
    description:
      "Development and manufacturing under one partnership, from formulation work through to commercial supply.",
  },
  {
    slug: "cro",
    name: "CRO",
    full: "Contract Research Organization",
    icon: "microscope",
    description:
      "Research support for pharmaceutical development programmes, delivered with scientific and regulatory rigour.",
  },
  {
    slug: "pharmaceutical-manufacturing",
    name: "Pharmaceutical Manufacturing",
    full: "Tablets, Capsules, Injectables, Eye Drops, Ointments",
    icon: "pill",
    description:
      "Manufacturing of Tablets, Capsules, Injectables, Eye drops, Ointments and API intermediates.",
  },
  {
    slug: "nutraceutical-manufacturing",
    name: "Nutraceutical Manufacturing",
    full: "Supplements & Vitamins",
    icon: "leaf",
    description:
      "Nutraceutical and supplement manufacturing, including vitamin and mineral formulations.",
  },
  {
    slug: "global-services",
    name: "Global Services",
    full: "API, Animal Health, Flavors & Fragrances, Vitamins, Fine & Specialty Chemicals",
    icon: "globe",
    description:
      "CMO, CDMO, CRO, API, Animal Health Products, Flavors & Fragrances, Vitamins, Fine & Specialty Chemicals.",
  },
] as const;

export const coreValues = [
  {
    title: "Integrity & Trust",
    description:
      "An uncompromising commitment to doing what is right for patients, partners and communities.",
  },
  {
    title: "Accountability",
    description: "We take responsibility for our commitments, our quality and our outcomes.",
  },
  {
    title: "Teamwork",
    description: "We work as one team across development, manufacturing and quality functions.",
  },
  {
    title: "Continuous Improvement",
    description: "We relentlessly improve processes, standards and capabilities.",
  },
  {
    title: "Customer Success",
    description: "Our partners' success defines ours — from first enquiry to commercial supply.",
  },
] as const;

export const collaborationCapabilities = [
  {
    title: "Innovation & Technology",
    description: "Pioneering technology applied to formulation and manufacturing challenges.",
  },
  {
    title: "Process Development",
    description: "Scalable process development from pilot batches to commercial volumes.",
  },
  {
    title: "Project Management",
    description: "Flawless project execution with clear ownership and transparent timelines.",
  },
  {
    title: "Regulatory Mastery",
    description: "Rigorous regulatory support across domestic and international markets.",
  },
  {
    title: "Quality Excellence",
    description: "Unyielding quality systems across testing, manufacturing and transfer.",
  },
] as const;

export const whyChooseUs = [
  {
    number: "01",
    title: "Commitment to Innovation",
    description:
      "We embrace innovation to advance manufacturing excellence, delivering smarter, better reliable pharmaceutical manufacturing products and creating greater value for our partners.",
    icon: "lightbulb",
  },
  {
    number: "02",
    title: "Drug Development & Testing",
    description:
      "We combine scientific expertise, advanced technology, and innovation to develop safe, effective medicines that improve patient health and well-being.",
    icon: "flask",
  },
  {
    number: "03",
    title: "Pharmaceutical Manufacturing",
    description:
      "We support pharmaceutical companies throughout clinical development with reliable manufacturing solutions, maintaining the highest standards of quality, safety, and compliance across testing, manufacturing, and product transfer.",
    icon: "factory",
  },
] as const;

export const vision =
  "Empowering a healthier world without boundaries, GM Pharma pioneers transformative healthcare through cutting-edge science, uncompromising quality, and relentless innovation, shaping a brighter, disease-free future for all humanity.";

export const mission =
  "To deliver exceptional pharmaceutical solutions that address unmet medical needs and elevate global healthcare through relentless innovation without compromising standards.";

export const coreValueStatement =
  "Driven by an uncompromising commitment to Integrity & Trust, we foster a culture of Accountability and Teamwork to relentlessly pursue Continuous Improvement and Customer Success. To uphold the highest standards of safety, quality, and regulatory compliance to deliver life-enhancing pharmaceutical solutions that protect health and improve patient lives worldwide.";

export const coreValueSpecialization =
  "We specialize in the manufacturing and development of pharmaceutical products, including Tablets, Capsules, Injectables, Eye drops, Ointments, and API intermediates along with services in CMO, CDMO, CRO, API, Animal Health Products, Flavors & Fragrances, Vitamins, Fine & Specialty Chemicals.";

export const trustQuote =
  "Our goal is to contribute to better healthcare while building lasting trust with our customers, partners, healthcare professionals, and communities";

export const diversityStatement = [
  "Established in 2018, GM Pharma is a global Pharmaceutical and Nutraceutical company delivering high-quality, reliable, and innovative healthcare solutions. With a portfolio of 150+ Pharmaceutical and Nutraceutical products, we are committed to meeting international standards of quality, safety, and regulatory compliance.",
  "Our Manufacturing Capabilities are supported by WHO-GMP-approved facilities, and PIC/S-compliant manufacturing standards, enabling us to serve diverse international markets with confidence. Our global services encompass CMO, CDMO, CRO, API, Animal Health Products, Flavors & Fragrances, Vitamins, Fine & Specialty Chemicals, and other specialized healthcare solutions.",
  "Driven by quality, innovation, regulatory excellence, and global partnerships, GM Pharma strives to be a trusted partner.",
] as const;

export const collaborationsStatement =
  "We accelerate global growth through strategy, powerful partnerships, and collaborating seamlessly with multi-national enterprises, agile startups, and premier research institutes. Our unmatched value proposition is forged by the synergy of five core capabilities: pioneering Innovation & Technology, scalable Process Development, flawless Project Management, rigorous Regulatory Mastery, and unyielding Quality Excellence.";

export const whatWeDo = [
  {
    title: "Pharmaceutical and Nutraceutical Manufacturing",
    description:
      "Manufacturers of 150+ Pharmaceutical & Nutraceutical Products with EU, US FDA Regulatory Standards.",
  },
  {
    title: "Global Services",
    description:
      "CMO, CDMO, CRO, API, Animal Health Products, Flavors & Fragrances, Vitamins, Fine & Specialty Chemicals.",
  },
] as const;

export const excellenceStatement = [
  "At GM Pharma, we are committed to advancing healthcare through innovation, quality, and patient-focused solutions. With integrity, expertise, and a focus on continuous improvement, we strive to deliver reliable pharmaceutical solutions that contribute to healthier lives worldwide.",
  "We also believe in empowering people through healthcare education and awareness. By providing clear and reliable information through articles, videos, brochures, and digital platforms, we help healthcare professionals, patients, and communities make informed decisions and build a better understanding of health and wellness.",
] as const;

/**
 * Quality & compliance claims supplied by GM Pharma.
 * Certificate documents are not supplied yet — the certifications page shows
 * these standards without fabricating certificate numbers or validity dates.
 */
export const qualityStandards = [
  {
    title: "WHO-GMP Approved Facilities",
    description: "Manufacturing capabilities supported by WHO-GMP-approved facilities.",
  },
  {
    title: "PIC/S-Compliant Standards",
    description: "Manufacturing carried out to PIC/S-compliant manufacturing standards.",
  },
  {
    title: "EU & US FDA Regulatory Standards",
    description:
      "Manufacturer of 150+ Pharmaceutical & Nutraceutical products with EU, US FDA regulatory standards.",
  },
  {
    title: "Quality, Safety & Regulatory Compliance",
    description:
      "Committed to meeting international standards of quality, safety and regulatory compliance.",
  },
] as const;

export const countries = [
  "India",
  "United States",
  "United Kingdom",
  "United Arab Emirates",
  "Germany",
  "France",
  "Netherlands",
  "Australia",
  "Canada",
  "Singapore",
  "Malaysia",
  "South Africa",
  "Nigeria",
  "Kenya",
  "Brazil",
  "Mexico",
  "Japan",
  "Other",
] as const;
