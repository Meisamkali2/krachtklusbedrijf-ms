export const ANALYTICS_CONSENT_KEY = "msk_analytics_consent";
export const ANALYTICS_CONSENT_MAX_AGE_MS = 180 * 24 * 60 * 60 * 1000;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsConsent = "accepted" | "rejected" | null;

export function readAnalyticsConsent(): AnalyticsConsent {
  if (typeof window === "undefined") return null;

  const stored = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
  if (!stored) return null;

  const [choice, savedAt] = stored.split(":");
  const savedAtMs = Number(savedAt);
  const isExpired =
    !Number.isFinite(savedAtMs) ||
    Date.now() - savedAtMs > ANALYTICS_CONSENT_MAX_AGE_MS;

  if (isExpired || (choice !== "accepted" && choice !== "rejected")) {
    window.localStorage.removeItem(ANALYTICS_CONSENT_KEY);
    return null;
  }

  return choice;
}

export function trackAnalyticsEvent(
  eventName: string,
  parameters: Record<string, string | number | boolean> = {}
) {
  try {
    if (readAnalyticsConsent() === "accepted") {
      window.gtag?.("event", eventName, parameters);
    }
  } catch {
    // Analytics or browser storage failures must not interrupt the form.
  }
}
