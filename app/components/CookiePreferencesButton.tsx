"use client";

type Props = {
  className?: string;
};

export default function CookiePreferencesButton({ className = "" }: Props) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-cookie-preferences"))}
      className={className}
    >
      Cookievoorkeuren
    </button>
  );
}
