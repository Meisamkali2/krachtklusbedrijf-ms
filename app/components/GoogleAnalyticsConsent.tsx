"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ANALYTICS_CONSENT_KEY,
  readAnalyticsConsent,
  trackAnalyticsEvent,
} from "../lib/analytics";

const GA_MEASUREMENT_ID = "G-S6Q6BW4DQQ";
const GOOGLE_TAG_SCRIPT_ID = "google-analytics-script";

function loadGoogleAnalytics() {
  if (typeof window === "undefined") return;

  if (window.gtag) {
    window.gtag("consent", "update", { analytics_storage: "granted" });
    return;
  }

  window.dataLayer = window.dataLayer || [];
  const gtag: NonNullable<Window["gtag"]> = function () {
    // Match the Arguments object used by Google's gtag.js snippet.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };
  window.gtag = gtag;

  gtag("consent", "default", { analytics_storage: "granted" });
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false,
    cookie_expires: 180 * 24 * 60 * 60,
  });

  if (!document.getElementById(GOOGLE_TAG_SCRIPT_ID)) {
    const script = document.createElement("script");
    script.id = GOOGLE_TAG_SCRIPT_ID;
    script.async = true;
    script.src =
      "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
    document.head.appendChild(script);
  }
}

function clearGoogleAnalyticsCookies() {
  if (typeof document === "undefined") return;

  const names = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_") || name === "_gid");

  for (const name of names) {
    const domains = [undefined, window.location.hostname, ".krachtklusbedrijf-ms.nl"];
    for (const domain of domains) {
      const domainAttribute = domain ? " domain=" + domain + ";" : "";
      document.cookie =
        name + "=; Max-Age=0; path=/;" + domainAttribute + " SameSite=Lax";
    }
  }
}

export default function GoogleAnalyticsConsent() {
  const pathname = usePathname();
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const choice = readAnalyticsConsent();

    if (choice === "accepted") {
      setAnalyticsEnabled(true);
    } else {
      clearGoogleAnalyticsCookies();
      setAnalyticsEnabled(false);
    }

    setBannerOpen(choice === null);
    setInitialized(true);

    const openPreferences = () => setBannerOpen(true);
    window.addEventListener("open-cookie-preferences", openPreferences);

    return () =>
      window.removeEventListener("open-cookie-preferences", openPreferences);
  }, []);

  useEffect(() => {
    if (!analyticsEnabled) return;

    loadGoogleAnalytics();
    trackAnalyticsEvent("page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [analyticsEnabled, pathname]);

  useEffect(() => {
    if (!analyticsEnabled) return;

    const handleContactClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      const contactMethod = href.startsWith("tel:")
        ? "phone"
        : href.startsWith("https://wa.me/")
          ? "whatsapp"
          : null;

      if (!contactMethod) return;

      trackAnalyticsEvent("contact_click", {
        contact_method: contactMethod,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", handleContactClick, true);
    return () => document.removeEventListener("click", handleContactClick, true);
  }, [analyticsEnabled]);

  function saveChoice(accepted: boolean) {
    window.localStorage.setItem(
      ANALYTICS_CONSENT_KEY,
      (accepted ? "accepted" : "rejected") + ":" + Date.now()
    );

    if (accepted) {
      loadGoogleAnalytics();
      setAnalyticsEnabled(true);
    } else {
      window.gtag?.("consent", "update", { analytics_storage: "denied" });
      clearGoogleAnalyticsCookies();
      setAnalyticsEnabled(false);
    }

    setBannerOpen(false);
  }

  if (!initialized || !bannerOpen) return null;

  return (
    <section
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      aria-live="polite"
      className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-[10000] mx-auto max-h-[calc(100dvh-2rem)] max-w-lg overflow-y-auto rounded-2xl border border-slate-200 bg-white p-3 text-slate-900 shadow-xl sm:p-4"
    >
      <h2 id="cookie-consent-title" className="text-base font-bold">
        Analytische cookies
      </h2>
      <p id="cookie-consent-description" className="mt-1 text-sm leading-5 text-slate-700">
        Met uw toestemming meten we paginabezoek en contactacties met Google
        Analytics. U kunt uw keuze wijzigen via ‘Cookievoorkeuren’ onderaan de site.
      </p>
      <div className="mt-2 grid grid-cols-[repeat(auto-fit,minmax(min(100%,7rem),1fr))] gap-2">
        <button
          type="button"
          onClick={() => saveChoice(false)}
          className="min-h-11 rounded-lg border border-blue-800 px-2 py-2 text-center text-sm font-semibold text-blue-900 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        >
          Weigeren
        </button>
        <button
          type="button"
          onClick={() => saveChoice(true)}
          className="min-h-11 rounded-lg border border-blue-800 px-2 py-2 text-center text-sm font-semibold text-blue-900 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        >
          Accepteren
        </button>
      </div>
      <Link
        href="/cookies"
        className="mt-1 inline-flex min-h-6 items-center text-sm text-blue-800 underline underline-offset-4 hover:text-blue-950"
      >
        Privacy- en cookie-informatie
      </Link>
    </section>
  );
}
