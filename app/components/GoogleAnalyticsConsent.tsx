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
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };

  window.gtag("consent", "default", { analytics_storage: "granted" });
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
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
      aria-live="polite"
      className="fixed inset-x-4 bottom-4 z-[10000] mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 text-slate-900 shadow-2xl sm:inset-x-6 sm:p-6"
    >
      <h2 id="cookie-consent-title" className="text-lg font-bold">
        Uw privacykeuze
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-700">
        M.S. Kracht Klusbedrijf wil met Google Analytics begrijpen welke
        pagina’s worden bekeken en of bezoekers contact opnemen. Analytics
        wordt alleen geladen als u toestemming geeft. We sturen geen naam,
        e-mailadres, telefoonnummer of bericht uit het offerteformulier naar
        Analytics. U kunt analytics weigeren en de website blijven gebruiken.
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-700">
        Uw keuze wordt zes maanden op dit apparaat onthouden. U kunt deze later
        wijzigen via ‘Cookievoorkeuren’ onderaan de website.
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => saveChoice(false)}
          className="min-h-12 flex-1 rounded-xl border-2 border-slate-400 bg-white px-5 py-3 text-center font-semibold text-slate-900 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          Weigeren
        </button>
        <button
          type="button"
          onClick={() => saveChoice(true)}
          className="min-h-12 flex-1 rounded-xl border-2 border-blue-700 bg-blue-700 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          Accepteren
        </button>
      </div>
      <Link
        href="/cookies"
        className="mt-4 inline-block text-sm font-semibold text-blue-800 underline underline-offset-4 hover:text-blue-950"
      >
        Lees privacy- en cookie-informatie
      </Link>
    </section>
  );
}
