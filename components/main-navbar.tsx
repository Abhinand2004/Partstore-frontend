import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainNavbar = () => {
    const navLinks = [
        { name: "Home", href: "/", active: true },
        { name: "About Us", href: "/about-us", active: false },
        { name: "Brands", href: "/brands", active: false },
        { name: "Spare Parts", href: "/spare-parts", active: false },
        { name: "Contact", href: "/contact", active: false },
    ];

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
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            aria-current={link.active ? "page" : undefined}
                            className={`text-base font-normal tracking-tight transition-colors duration-200 ${link.active ? "text-[#5EB59A]" : "text-[#364153] hover:text-[#5EB59A]"
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
                        className="flex items-center gap-2 text-[#364153] hover:text-[#5EB59A] transition-colors duration-200"
                        aria-label="Call us at +1234567890"
                    >
                        <div className="w-5 h-5 flex items-center justify-center">
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
                                role="img"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </div>
                        <span className="text-base font-normal tracking-tight">Call Us</span>
                    </Link>
                </div>

                {/* Mobile menu toggle (Checkbox hack) */}
                <div className="flex lg:hidden">
                    <input type="checkbox" id="nav-toggle" className="peer hidden" aria-hidden="true" />
                    <label
                        htmlFor="nav-toggle"
                        className="inline-flex cursor-pointer items-center justify-center rounded-md p-2 text-[#364153] hover:bg-gray-100 hover:text-[#5EB59A] focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#5EB59A]"
                        aria-label="Toggle main menu"
                    >
                        <span className="sr-only">Toggle main menu</span>
                        {/* Hamburger Icon */}
                        <svg
                            className="block h-6 w-6 peer-checked:hidden"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        {/* Close Icon (only visible when peer is checked) */}
                        <svg
                            className="hidden h-6 w-6 peer-checked:block"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </label>

                    {/* Mobile Navigation (using peer to show/hide) */}
                    <div
                        id="mobile-menu"
                        className="absolute left-0 top-20 z-40 w-full translate-y-[-100%] bg-white opacity-0 transition-all duration-300 ease-in-out peer-checked:translate-y-0 peer-checked:opacity-100 peer-checked:border-t lg:hidden"
                    >
                        <div className="space-y-1 px-4 pb-3 pt-2 shadow-lg">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    aria-current={link.active ? "page" : undefined}
                                    className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${link.active ? "bg-[#5EB59A]/10 text-[#5EB59A]" : "text-[#364153] hover:bg-gray-50 hover:text-[#5EB59A]"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="tel:+1234567890"
                                className="flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium text-[#364153] hover:bg-gray-50 hover:text-[#5EB59A]"
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
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MainNavbar;
