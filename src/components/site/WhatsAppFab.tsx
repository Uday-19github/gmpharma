import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/company";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with GM Pharma on WhatsApp"
      className="fixed right-5 bottom-5 z-50 grid size-13 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:scale-110"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
