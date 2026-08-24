import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  PRODUCT,
  PRODUCT_IMAGE,
  PRODUCT_IMAGE_ALT,
  PRODUCT_PRICE,
  SELLER_NAME,
  TESTIMONIALS_ENABLED,
} from "@/config/site";
import { track } from "@/lib/analytics";

const ASK_MESSAGE = `Hi ${SELLER_NAME} 👋 I have a question about Aloe Vera Plus before ordering.`;

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/70 bg-background/90 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-md md:inset-x-auto md:right-6 md:bottom-6 md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none">
      <WhatsAppButton location="sticky_bar" className="md:w-auto md:shadow-lift">
        💬 ORDER ON WHATSAPP
      </WhatsAppButton>
    </div>
  );
}

export function Hero() {
  useEffect(() => {
    track("page_view", { page: "aloe_vera_plus_landing" });
    track("product_view", { product: PRODUCT.name, code: PRODUCT.code });
  }, []);

  return (
    <header className="bg-hero-gradient relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pt-12 pb-16 md:grid-cols-2 md:items-center md:gap-8 md:pt-20 md:pb-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] text-primary uppercase">
            🌿 NeoLife Aloe Vera Plus
          </span>
          <h1 className="mt-5 text-[2.1rem] leading-[1.08] font-extrabold text-foreground sm:text-5xl md:text-[3.25rem]">
            Make Aloe Vera Part of Your Daily Wellness Routine.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            A simple daily wellness drink made with 100% pure filtered Aloe Vera, enhanced
            with a Herbal Tea Blend and formulated for convenient daily use.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton location="hero">
              ORDER ALOE VERA PLUS ON WHATSAPP
            </WhatsAppButton>
          </div>
          <p className="mt-4 text-sm font-medium text-muted-foreground">
            1 litre • 50–100 ml daily • Keep refrigerated
          </p>
          <dl className="mt-7 flex flex-wrap gap-x-8 gap-y-3 border-t border-primary/10 pt-6 text-sm">
            <div>
              <dt className="text-muted-foreground">Product code</dt>
              <dd className="font-bold text-foreground">{PRODUCT.code}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Size</dt>
              <dd className="font-bold text-foreground">1 litre</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Brand</dt>
              <dd className="font-bold text-foreground">NeoLife</dd>
            </div>
          </dl>
        </div>

        <div className="relative flex justify-center">
          <div
            aria-hidden
            className="bg-leaf-soft absolute top-1/2 left-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          />
          <img
            src={PRODUCT_IMAGE}
            alt="Aloe Vera Plus 1 litre bottle by NeoLife surrounded by fresh aloe vera leaves, oranges and chamomile"
            width={1024}
            height={1536}
            fetchPriority="high"
            decoding="async"
            className="relative w-full max-w-[320px] drop-shadow-2xl md:max-w-[420px]"
          />
        </div>
      </div>
    </header>
  );
}

export function Lifestyle() {
  return (
    <section className="reveal mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Your Everyday Routine Matters.
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              We live in a taxing and pressurised world and seek relief from a variety of
              symptoms related to this lifestyle. Our bodies become physically taxed and
              depleted of energy and necessary nutrients. Our metabolism is also affected.
            </p>
            <p>
              Many people are turning to pure, wholesome products in an effort to deal with
              some of the negative elements associated with our modern lifestyle — becoming
              more intentional about what they include in their daily routine.
            </p>
          </div>
          <p className="mt-6 border-l-2 border-leaf pl-4 text-lg font-bold text-primary">
            That's where a simple daily wellness habit can fit in.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-3">
          {[
            { icon: "⏰", label: "Busy mornings" },
            { icon: "💼", label: "Demanding work days" },
            { icon: "🌙", label: "Long, tiring evenings" },
            { icon: "🥤", label: "One simple daily glass" },
          ].map((item) => (
            <li
              key={item.label}
              className="rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <span className="text-2xl" aria-hidden>
                {item.icon}
              </span>
              <p className="mt-3 text-sm font-semibold text-foreground">{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ProductIntro() {
  const points = [
    {
      title: "100% Pure Filtered Aloe Vera",
      copy: "Aloe Vera Plus is made with 100% pure filtered Aloe Vera.",
    },
    {
      title: "Herbal Tea Blend",
      copy: "NeoLife's Herbal Tea Blend is included to enhance Aloe Vera's beneficial properties.",
    },
    {
      title: "Fructose",
      copy: "Fructose is included as a sweetener and is described in the supplied product information as providing sustained energy without the blood sugar surge associated with table sugar.",
    },
  ];

  return (
    <section id="product" className="bg-cream reveal border-y border-border/70">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <img
            src={PRODUCT_IMAGE_ALT}
            alt="Aloe Vera Plus 1 litre bottle label showing ingredients and directions"
            width={1024}
            height={1536}
            loading="lazy"
            decoding="async"
            className="mx-auto w-full max-w-[260px] md:max-w-[320px]"
          />
          <div>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
              Meet Aloe Vera Plus
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Aloe Vera Plus combines 100% pure filtered Aloe Vera with a Herbal Tea Blend in
              a convenient 1-litre drink designed to become part of a daily wellness routine.
            </p>
            <ul className="mt-8 space-y-4">
              {points.map((p) => (
                <li
                  key={p.title}
                  className="rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <h3 className="font-bold text-primary">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {p.copy}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <WhatsAppButton location="product_intro">
                💬 ORDER ON WHATSAPP
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Features() {
  const features = [
    { icon: "🌿", title: "100% Pure Filtered Aloe Vera", copy: "Made with pure, filtered Aloe Vera." },
    { icon: "🍃", title: "Herbal Tea Blend", copy: "NeoLife's Herbal Tea Blend enhances Aloe Vera's beneficial properties." },
    { icon: "🥤", title: "Convenient Daily Drink", copy: "Designed for easy, everyday use." },
    { icon: "🧴", title: "1L Bottle", copy: "A 1-litre bottle for regular daily servings." },
    { icon: "📏", title: "50–100 ml Daily", copy: "The suggested daily amount is 50–100 ml." },
    { icon: "❄️", title: "Keep Refrigerated", copy: "Store the bottle in the fridge." },
  ];

  return (
    <section className="reveal mx-auto max-w-6xl px-5 py-16 md:py-24">
      <h2 className="max-w-xl text-3xl font-extrabold text-foreground sm:text-4xl">
        What's Inside the Bottle.
      </h2>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <li
            key={f.title}
            className="group rounded-3xl border border-border bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="bg-leaf-soft flex h-11 w-11 items-center justify-center rounded-2xl text-xl" aria-hidden>
              {f.icon}
            </span>
            <h3 className="mt-4 font-bold text-foreground">{f.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.copy}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function WhyPeopleLikeIt() {
  const cards = [
    { title: "Simple Daily Routine", copy: "A straightforward way to include Aloe Vera in your everyday wellness habits." },
    { title: "Quality Ingredients", copy: "Made with 100% pure filtered Aloe Vera." },
    { title: "Easy to Use", copy: "A simple 50–100 ml daily serving." },
    { title: "Convenient Format", copy: "A 1-litre bottle designed for regular use." },
  ];

  return (
    <section className="bg-cream reveal border-y border-border/70">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="max-w-2xl text-3xl font-extrabold text-foreground sm:text-4xl">
          Simple. Wholesome. Easy to Add to Your Routine.
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {cards.map((c, i) => (
            <li key={c.title} className="rounded-3xl bg-card p-6 shadow-soft">
              <span className="text-xs font-bold tracking-[0.2em] text-leaf">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-lg font-bold text-foreground">{c.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.copy}</p>
            </li>
          ))}
        </ul>
        {TESTIMONIALS_ENABLED ? <TestimonialsPlaceholder /> : null}
      </div>
    </section>
  );
}

/**
 * TESTIMONIALS_PLACEHOLDER — enable via TESTIMONIALS_ENABLED in src/config/site.ts
 * once real, permission-based customer testimonials are available. Replace the
 * empty array below with those testimonials.
 */
export function TestimonialsPlaceholder() {
  const testimonials: { name: string; quote: string }[] = [];
  if (testimonials.length === 0) return null;
  return (
    <ul className="mt-10 grid gap-4 sm:grid-cols-2">
      {testimonials.map((t) => (
        <li key={t.name} className="rounded-3xl bg-card p-6 shadow-soft">
          <p className="text-sm leading-relaxed text-foreground">"{t.quote}"</p>
          <p className="mt-3 text-sm font-bold text-primary">{t.name}</p>
        </li>
      ))}
    </ul>
  );
}

export function HowToUse() {
  const steps = [
    { step: "01", title: "Pour 50–100 ml", copy: "Measure out your daily serving." },
    { step: "02", title: "Drink Daily", copy: "Enjoy it as part of your daily routine." },
    { step: "03", title: "Keep Refrigerated", copy: "Return the bottle to the fridge." },
  ];

  return (
    <section className="reveal mx-auto max-w-6xl px-5 py-16 md:py-24">
      <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">How To Use</h2>
      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <li key={s.step} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <span className="text-sm font-extrabold tracking-[0.2em] text-leaf">
              STEP {s.step}
            </span>
            <h3 className="mt-3 text-xl font-bold text-foreground">{s.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{s.copy}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm text-muted-foreground">
        Follow the product directions provided with the product.
      </p>
    </section>
  );
}

export function ProductDetails() {
  const rows = [
    ["Product", PRODUCT.name],
    ["Code", PRODUCT.code],
    ["Size", PRODUCT.size],
    ["Suggested daily amount", PRODUCT.dosage],
    ["Storage", PRODUCT.storage],
    ["Price", PRODUCT_PRICE],
  ];

  return (
    <section id="details" className="bg-cream reveal border-y border-border/70">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
          Product Details
        </h2>
        <dl className="mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          {rows.map(([label, value], i) => (
            <div
              key={label}
              className={`flex items-center justify-between gap-4 px-6 py-4 ${
                i % 2 ? "bg-muted/50" : ""
              }`}
            >
              <dt className="text-sm text-muted-foreground">{label}</dt>
              <dd className="text-right text-sm font-bold text-foreground">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8">
          <WhatsAppButton location="product_details">ORDER NOW</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

export function OrderThroughMe() {
  return (
    <section className="reveal mx-auto max-w-3xl px-5 py-16 md:py-24">
      <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
        Need Help Ordering? I'm Here to Help.
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        You can message me directly on WhatsApp to:
      </p>
      <ul className="mt-5 space-y-3">
        {[
          `Ask questions about ${PRODUCT.name}`,
          "Confirm the current price",
          "Learn how to order",
          "Get assistance with your purchase",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-foreground">
            <span className="bg-leaf-soft mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-primary">
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <WhatsAppButton location="order_through_me">
          💬 CHAT WITH {SELLER_NAME.toUpperCase()} ON WHATSAPP
        </WhatsAppButton>
      </div>
    </section>
  );
}

export function ConversionSection() {
  return (
    <section className="bg-deep-gradient reveal">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center md:py-24">
        <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">
          Ready to Try Aloe Vera Plus?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-primary-foreground/80">
          Send me a message on WhatsApp and I'll help you with the next step.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <WhatsAppButton location="conversion_section">ORDER NOW</WhatsAppButton>
          <WhatsAppButton
            location="conversion_section_question"
            message={ASK_MESSAGE}
            variant="outline"
            size="md"
          >
            ASK A QUESTION ON WHATSAPP
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const faqs = [
    {
      q: "What is Aloe Vera Plus?",
      a: "Aloe Vera Plus is a NeoLife drink made with 100% pure filtered Aloe Vera, with NeoLife's Herbal Tea Blend included to enhance Aloe Vera's beneficial properties. Fructose is included as a sweetener. It comes in a 1-litre bottle designed for convenient daily use.",
    },
    {
      q: "How much should I drink?",
      a: "The product information provided specifies 50–100 ml daily.",
    },
    { q: "How should I store it?", a: "Keep refrigerated." },
    { q: "How big is the bottle?", a: "1 litre." },
    {
      q: "How do I order?",
      a: `Click any WhatsApp button on this page and message ${SELLER_NAME} directly. Ordering is handled through the WhatsApp conversation.`,
    },
    {
      q: "Can I ask questions before ordering?",
      a: `Yes. Message ${SELLER_NAME} on WhatsApp with any question about the product or ordering before you decide.`,
    },
    {
      q: "I'm pregnant, on medication, or have a medical condition — can I take it?",
      a: "This page only provides general product information. For questions about pregnancy, medication, children, or any medical condition, please seek advice from a qualified healthcare professional.",
    },
  ];

  return (
    <section id="faq" className="reveal mx-auto max-w-3xl px-5 py-16 md:py-24">
      <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
        Frequently Asked Questions
      </h2>
      <Accordion
        type="single"
        collapsible
        className="mt-8 overflow-hidden rounded-3xl border border-border bg-card px-2 shadow-soft"
        onValueChange={(value) => value && track("faq_open", { question: value })}
      >
        {faqs.map((f) => (
          <AccordionItem key={f.q} value={f.q} className="last:border-b-0">
            <AccordionTrigger className="px-4 text-left text-base font-bold hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="px-4 text-sm leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="mt-8">
        <WhatsAppButton location="faq">💬 ORDER ON WHATSAPP</WhatsAppButton>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-cream reveal border-t border-border/70">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
        <h2 className="text-4xl leading-[1.1] font-extrabold text-foreground sm:text-5xl">
          Start Your Aloe Vera Plus Routine Today.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground">
          Message me on WhatsApp to check the current price and place your order.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton location="final_cta">💬 ORDER ON WHATSAPP</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-background pb-28 md:pb-12">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-6 border-b border-border pb-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-extrabold text-primary">Aloe Vera Plus</p>
            <p className="mt-1 text-sm text-muted-foreground">
              NeoLife • Product Code {PRODUCT.code} • {PRODUCT.size}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a className="hover:text-primary" href="#product">
              Product
            </a>
            <a className="hover:text-primary" href="#details">
              Details
            </a>
            <a className="hover:text-primary" href="#faq">
              FAQ
            </a>
            <a className="hover:text-primary" href="#privacy">
              Privacy Policy
            </a>
            <a className="hover:text-primary" href="#terms">
              Terms
            </a>
            <a className="hover:text-primary" href="#disclaimer">
              Disclaimer
            </a>
          </nav>
          <WhatsAppButton location="footer" size="md" variant="outline">
            💬 WhatsApp {SELLER_NAME}
          </WhatsAppButton>
        </div>
        <p id="disclaimer" className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Disclaimer: This page is for general product information and is not intended to
          diagnose, treat, cure, or prevent any disease. Product information should be
          considered alongside the official product packaging and applicable NeoLife
          guidance.
        </p>
      </div>
    </footer>
  );
}
