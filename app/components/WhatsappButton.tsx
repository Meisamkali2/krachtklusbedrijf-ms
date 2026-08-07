"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function WhatsappButton() {
  return (
    <Link
      href="https://wa.me/31 6 43680281"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110 hover:bg-green-600"
    >
      <MessageCircle size={34} />
    </Link>
  );
}