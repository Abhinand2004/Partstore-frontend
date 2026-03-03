"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const MainNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/", active: true },
        { name: "About Us", href: "/about-us", active: false },
        { name: "Brands", href: "/brands", active: false },
        { name: "Spare Parts", href: "/spare-parts", active: false },
        { name: "Contact", href: "/contact", active: false },
    ];

    const toggleMenu = useCallback(() => {
        setIsMenuOpen((prev) => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm font-sans">
            {/* Container */}
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-12">
                {/* Logo Section */}
                <Link href="/" className="flex flex-shrink-0 items-center" aria-label="Partstore Home">
                    <Image
                        src="/Images/Icon.png"
                        alt="Partstore Logo"
                        width={159}
                        height={48}
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            aria-current={link.active ? "page" : undefined}
                            className={`text-base font-normal tracking-tight transition-colors duration-200 ${link.active ? "text-[#2E7D68]" : "text-[#364153] hover:text-[#2E7D68]"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Call Us Action (Desktop) */}
                <div className="hidden lg:flex items-center">
                    <Link
                        href="tel:+1234567890"
                        className="flex items-center gap-2 text-[#364153] hover:text-[#2E7D68] transition-colors duration-200"
                        aria-label="Call us at +1234567890"
                    >
                        <div className="w-5 h-5 flex items-center justify-center" aria-hidden="true">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-full h-full"
                                aria-hidden="true"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </div>
                        <span className="text-base font-normal tracking-tight">Call Us</span>
                    </Link>
                </div>

                {/* Mobile menu toggle button */}
                <button
                    type="button"
                    onClick={toggleMenu}
                    className="inline-flex lg:hidden cursor-pointer items-center justify-center rounded-md p-2 text-[#364153] hover:bg-gray-100 hover:text-[#2E7D68] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2E7D68]"
                    aria-label="Toggle main menu"
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <span className="sr-only">Toggle main menu</span>
                    {/* Hamburger Icon */}
                    {!isMenuOpen && (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                    {/* Close Icon */}
                    {isMenuOpen && (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                id="mobile-menu"
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen
                    ? "max-h-96 opacity-100 border-t"
                    : "max-h-0 opacity-0 pointer-events-none"
                    }`}
            >
                <nav className="space-y-1 px-4 pb-3 pt-2 shadow-lg bg-white" aria-label="Mobile Navigation">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={closeMenu}
                            aria-current={link.active ? "page" : undefined}
                            className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${link.active ? "bg-[#2E7D68]/10 text-[#2E7D68]" : "text-[#364153] hover:bg-gray-50 hover:text-[#2E7D68]"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="tel:+1234567890"
                        onClick={closeMenu}
                        className="flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium text-[#364153] hover:bg-gray-50 hover:text-[#2E7D68]"
                        aria-label="Call us at +1234567890"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        Call Us
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default MainNavbar;
