import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainFooter = () => {
    return (
        <footer className="bg-[#101828] text-[#D1D5DC] pt-16 pb-8 px-6 lg:px-12 overflow-hidden">
            <div className="mx-auto max-w-7xl">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="flex flex-col gap-6 max-w-[280px]">
                        <Link href="/" className="inline-block" aria-label="Partstore Home">
                            <Image
                                src="/Images/Icon.png"
                                alt="Partstore Logo"
                                width={132}
                                height={40}
                                className="brightness-0 invert object-contain"
                            />
                        </Link>
                        <p className="text-sm leading-[20px] tracking-[-0.15px]">
                            <Link href="/" className="underline hover:text-white transition-colors">Partstore.ae</Link> is a trusted UAE-based spare parts platform connecting car owners with genuine OEM and high-quality aftermarket parts. We ensure competitive pricing, fast delivery, and expert support — all through a simple WhatsApp enquiry system.
                        </p>
                    </div>

                    {/* Quick Links Column */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-lg font-medium text-white tracking-[-0.44px]">Quick Links</h3>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <Link href="/" className="text-sm hover:text-white transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm hover:text-white transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="#brands" className="text-sm hover:text-white transition-colors">Brands We Deal With</Link>
                            </li>
                            <li>
                                <Link href="#categories" className="text-sm hover:text-white transition-colors">Spare Parts Categories</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm hover:text-white transition-colors">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info Column */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-lg font-medium text-white tracking-[-0.44px]">Contact Info</h3>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5EB59A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span className="text-sm">Dubai, United Arab Emirates</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5EB59A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0" aria-hidden="true">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <a href="tel:+971XXXXXXXXX" className="text-sm hover:text-white transition-colors">
                                    +971 XX XXX XXXX
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5EB59A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0" aria-hidden="true">
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                                <a href="mailto:sales@partstore.ae" className="text-sm hover:text-white transition-colors">
                                    sales@partstore.ae
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Working Hours Column */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-lg font-medium text-white tracking-[-0.44px]">Working Hours</h3>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5EB59A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <div className="flex flex-col">
                                    <span className="text-sm">Monday - Saturday</span>
                                    <span className="text-sm text-[#99A1AF]">9:00 AM - 6:00 PM</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5EB59A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <div className="flex flex-col">
                                    <span className="text-sm">Sunday</span>
                                    <span className="text-sm text-[#99A1AF]">Closed</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#1E2939] text-center">
                    <p className="text-sm tracking-[-0.15px]">
                        © 2026 Partstore. All rights reserved. Right Parts @ Right Time
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;

