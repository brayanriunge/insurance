import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const phoneNumber = "254701842846";
  const message = encodeURIComponent(
    "Hello! I have a question about your services.",
  );
  const whatsappUrl = `https://wa.me${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* pulsing notification ring */}
      <span className="absolute -inset-1 rounded-full bg-green-500 opacity-75 animate-ping pointer-events-none" />

      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366]  rounded-full shadow-lg hover:bg-[#20bd5a] transition-transform hover:scale-105"
      >
        <FaWhatsapp color="white" size={30} />
      </Link>
    </div>
  );
}
