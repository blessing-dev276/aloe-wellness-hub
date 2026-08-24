// ---------------------------------------------------------------------------
// EDIT THESE VALUES — single configuration area for the landing page.
// ---------------------------------------------------------------------------

/** WhatsApp number in international format, digits only. */
export const WHATSAPP_NUMBER = "2347047318901";

/** Product price shown on the page. Use "₦[PRODUCT PRICE]" if unknown. */
export const PRODUCT_PRICE = "₦22,750";

/** TikTok Pixel ID — leave empty to disable pixel loading. */
export const TIKTOK_PIXEL_ID = "";

/** Seller name used in copy and the WhatsApp message. */
export const SELLER_NAME = "Blessing";

/** Pre-filled WhatsApp message. */
export const WHATSAPP_MESSAGE = `Hi ${SELLER_NAME} 👋 I came from your Aloe Vera Plus page and I'm interested in ordering. Please send me the current price and ordering details.`;

export const whatsappUrl = (message: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const PRODUCT = {
  name: "Aloe Vera Plus",
  brand: "NeoLife",
  code: "2783",
  size: "1 litre",
  dosage: "50–100 ml daily",
  storage: "Keep refrigerated",
} as const;

/** Replace these with your own images at any time. */
import productImage from "@/assets/aloe-vera-plus.png.asset.json";
import bottleImage from "@/assets/aloe-vera-bottle.png.asset.json";

export const PRODUCT_IMAGE = productImage.url;
export const PRODUCT_IMAGE_ALT = bottleImage.url;

/** Set to true once real, permission-based testimonials are available. */
export const TESTIMONIALS_ENABLED = false;
