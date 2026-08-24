import { cn } from "@/lib/utils";
import { whatsappUrl, WHATSAPP_MESSAGE } from "@/config/site";
import { trackCtaClick, trackWhatsAppClick } from "@/lib/analytics";

type Props = {
  /** Analytics label for where the click happened. */
  location: string;
  children: React.ReactNode;
  message?: string;
  variant?: "primary" | "outline";
  size?: "md" | "lg";
  className?: string;
};

export function WhatsAppButton({
  location,
  children,
  message = WHATSAPP_MESSAGE,
  variant = "primary",
  size = "lg",
  className,
}: Props) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        trackWhatsAppClick(location);
        trackCtaClick(location);
      }}
      className={cn(
        "inline-flex w-full items-center justify-center gap-2 rounded-full text-center font-bold tracking-tight transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto",
        size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-sm",
        variant === "primary"
          ? "bg-whatsapp text-whatsapp-foreground shadow-soft hover:brightness-105 hover:shadow-lift"
          : "border border-primary/25 bg-card text-primary hover:bg-secondary",
        className,
      )}
    >
      {children}
    </a>
  );
}
