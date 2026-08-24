import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader, getRequestIP } from "@tanstack/react-start/server";
import { TIKTOK_PIXEL_ID } from "@/config/site";

type TikTokEventInput = {
  event: "Contact" | "ClickButton" | "ViewContent";
  eventId: string;
  url: string;
  properties?: Record<string, unknown>;
};

/**
 * Mirrors a browser pixel event to TikTok's server-side Events API, using the
 * same event_id so TikTok deduplicates the two signals. Improves match rate
 * when browser-side tracking is blocked (ad blockers, ITP, etc.).
 */
export const sendTikTokEvent = createServerFn({ method: "POST" })
  .validator((input: TikTokEventInput) => input)
  .handler(async ({ data }) => {
    const accessToken = process.env["TIKTOK_EVENTS_ACCESS_TOKEN"];
    if (!accessToken || !TIKTOK_PIXEL_ID) return { skipped: true };

    const ip = getRequestIP({ xForwardedFor: true });
    const userAgent = getRequestHeader("user-agent");
    const referrer = getRequestHeader("referer");

    try {
      const response = await fetch("https://business-api.tiktok.com/open_api/v1.3/event/track/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Token": accessToken,
        },
        body: JSON.stringify({
          event_source: "web",
          event_source_id: TIKTOK_PIXEL_ID,
          data: [
            {
              event: data.event,
              event_time: Math.floor(Date.now() / 1000),
              event_id: data.eventId,
              user: {
                ...(ip ? { ip } : {}),
                ...(userAgent ? { user_agent: userAgent } : {}),
              },
              page: {
                url: data.url,
                ...(referrer ? { referrer } : {}),
              },
              properties: data.properties ?? {},
            },
          ],
        }),
      });

      const json = (await response.json().catch(() => null)) as { code?: number; message?: string } | null;
      if (!response.ok || json?.code !== 0) {
        console.error("[tiktok-events-api]", response.status, json?.code, json?.message);
      }
      return { ok: response.ok && json?.code === 0 };
    } catch (error) {
      console.error("[tiktok-events-api] request failed", error);
      return { ok: false };
    }
  });
