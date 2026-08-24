import { PRODUCT, TIKTOK_PIXEL_ID } from "@/config/site";

/** This page has a single product, so every Contact/ClickButton event refers to it. */
const PRODUCT_CONTENT = {
  content_type: "product",
  content_id: PRODUCT.code,
  content_name: PRODUCT.name,
} as const;

type EventName =
  | "page_view"
  | "product_view"
  | "whatsapp_click"
  | "faq_open"
  | "cta_click";

type Payload = Record<string, string | number | boolean | undefined>;

/**
 * Maps our internal event names to TikTok's standard event codes so they
 * show up as real funnel events (ViewContent, ClickButton, Contact) in
 * TikTok Events Manager instead of being dropped as unrecognized custom
 * events. See https://business-api.tiktok.com/portal/docs?id=1741601162187777
 */
const TIKTOK_STANDARD_EVENT: Partial<Record<EventName, string>> = {
  product_view: "ViewContent",
  whatsapp_click: "Contact",
  cta_click: "ClickButton",
};

type Ttq = {
  track: (event: string, payload?: Payload, options?: { event_id?: string }) => void;
  page?: () => void;
};

function getTtq(): Ttq | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as unknown as { ttq?: Ttq }).ttq;
}

/** Unique id shared between a browser pixel event and its server-side mirror, so TikTok deduplicates them. */
export function generateEventId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

/**
 * Central analytics hook. Forwards to TikTok Pixel (mapped to a standard
 * event where one applies) and to gtag/dataLayer when present. Safe to call
 * on the server (no-ops).
 */
export function track(event: EventName, payload: Payload = {}, opts: { eventId?: string } = {}) {
  if (typeof window === "undefined") return;

  const ttq = getTtq();
  const w = window as unknown as { dataLayer?: unknown[] };

  if (TIKTOK_PIXEL_ID && ttq) {
    if (event === "page_view") {
      ttq.page?.();
    } else {
      const standardEvent = TIKTOK_STANDARD_EVENT[event];
      const options = opts.eventId ? { event_id: opts.eventId } : undefined;
      ttq.track(standardEvent ?? event, payload, options);
    }
  }

  w.dataLayer?.push({ event, ...payload });

  if (import.meta.env.DEV) console.debug("[analytics]", event, payload, opts);
}

export const trackWhatsAppClick = (location: string, eventId?: string) =>
  track("whatsapp_click", { ...PRODUCT_CONTENT, location }, eventId === undefined ? {} : { eventId });
export const trackCtaClick = (location: string, eventId?: string) =>
  track("cta_click", { ...PRODUCT_CONTENT, location }, eventId === undefined ? {} : { eventId });
