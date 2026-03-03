import React from "react";
import Image from "next/image";
import Link from "next/link";

const WhatsAppFloatingButton = () => {
    return (
        <Link
            href="https://wa.me/yournumber"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform duration-300"
            aria-label="Chat with us on WhatsApp"
        >
            {/* Pulse ring animation */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-whatsapp-pulse" aria-hidden="true" />

            {/* Icon */}
            <Image
                src="/icons/whatsapp-icon.svg"
                alt=""
                width={32}
                height={32}
                className="relative z-10 w-8 h-8"
                aria-hidden="true"
            />
        </Link>
    );
};

export default WhatsAppFloatingButton;
