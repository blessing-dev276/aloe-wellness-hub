import { TIKTOK_PIXEL_ID } from "@/config/site";

type EventName =
  | "page_view"
  | "product_view"
  | "whatsapp_click"
  | "faq_open"
  | "cta_click";

type Payload = Record<string, string | number | boolean | undefined>;

/**
 * Central analytics hook. Forwards to TikTok Pixel when configured and to
 * gtag/dataLayer when present. Safe to call on the server (no-ops).
 */
export function track(event: EventName, payload: Payload = {}) {
  if (typeof window === "undefined") return;

  const w = window as unknown as {
    ttq?: { track: (e: string, p?: Payload) => void; page?: () => void };
    dataLayer?: unknown[];
  };

  if (TIKTOK_PIXEL_ID && w.ttq) {
    if (event === "page_view") w.ttq.page?.();
    else w.ttq.track(event, payload);
  }

  w.dataLayer?.push({ event, ...payload });

  if (import.meta.env.DEV) console.debug("[analytics]", event, payload);
}

export const trackWhatsAppClick = (location: string) =>
  track("whatsapp_click", { location });
export const trackCtaClick = (location: string) => track("cta_click", { location });
