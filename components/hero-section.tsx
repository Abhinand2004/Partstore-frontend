import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section
            className="relative w-full min-h-[400px] lg:min-h-[474.09px] flex flex-col items-start overflow-hidden border-none bg-[#101828]"
            aria-labelledby="hero-title"
        >
            {/* Background Layer (Combined Image & Gradient) */}
            <div className="absolute inset-0 z-0 select-none">
                <Image
                    src="/Images/hero-bg.jpg"
                    alt=""
                    fill
                    priority
                    quality={75}
                    className="object-cover opacity-15 hidden md:block"
                    sizes="(min-width: 768px) 100vw, 1px"
                />
                {/* Single optimized gradient overlay */}
                <div
                    className="absolute inset-0 z-10 bg-gradient-to-r from-[#101828]/98 via-[#101828]/90 sm:via-[#101828]/85 to-transparent sm:to-[#101828]/40"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-0 lg:flex lg:items-center lg:h-[474.09px]">
                <div className="max-w-[672px] w-full">
                    {/* Label/Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 mb-6 sm:mb-8 rounded-full border border-[rgba(94,181,154,0.3)] bg-[rgba(94,181,154,0.2)]"
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                            aria-hidden="true"
                        >
                            <path d="M8.46755 3.53577C8.3454 3.66039 8.27698 3.82793 8.27698 4.00243C8.27698 4.17694 8.3454 4.34448 8.46755 4.4691L9.53422 5.53577C9.65884 5.65792 9.82638 5.72634 10.0009 5.72634C10.1754 5.72634 10.3429 5.65792 10.4676 5.53577L12.9809 3.02243C13.3161 3.76323 13.4176 4.58859 13.2719 5.38853C13.1261 6.18847 12.74 6.925 12.1651 7.49995C11.5901 8.07491 10.8536 8.46099 10.0536 8.60674C9.25371 8.75249 8.42835 8.65099 7.68755 8.31577L3.08089 12.9224C2.81567 13.1876 2.45596 13.3366 2.08089 13.3366C1.70581 13.3366 1.3461 13.1876 1.08089 12.9224C0.815669 12.6572 0.666672 12.2975 0.666672 11.9224C0.666672 11.5474 0.815669 11.1876 1.08089 10.9224L5.68755 6.31577C5.35233 5.57497 5.25083 4.74961 5.39658 3.94967C5.54233 3.14973 5.92841 2.4132 6.50337 1.83825C7.07832 1.26329 7.81485 0.877212 8.61479 0.731461C9.41473 0.58571 10.2401 0.687209 10.9809 1.02243L8.47422 3.5291L8.46755 3.53577Z" stroke="#5EB59A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[10px] sm:text-xs font-medium text-[#5EB59A] tracking-wider uppercase">
                            Premium OEM & Aftermarket Parts
                        </span>
                    </div>

                    {/* Heading */}
                    <h1
                        id="hero-title"
                        className="text-4xl sm:text-5xl lg:text-[48px] font-medium leading-[1.1] sm:leading-tight lg:leading-[60px] text-[#5EB59A] tracking-[-0.02em] sm:tracking-[0.35px] mb-6"
                    >
                        Find Genuine Car Spare Parts in Minutes
                    </h1>

                    {/* Description */}
                    <p
                        className="font-normal text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[28px] text-[#D1D5DC] mb-10 max-w-[576px] tracking-tight"
                    >
                        Get fast price quotes on WhatsApp from UAE&apos;s trusted spare parts specialists. Looking for engine, brake, electrical, or body parts? Send your requirement and receive competitive pricing instantly.
                    </p>

                    {/* WhatsApp Button */}
                    <Link
                        href="https://wa.me/yournumber"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-4 h-14 sm:h-[60px] px-6 sm:px-10 rounded-[14px] text-white font-medium text-base sm:text-lg lg:text-[18px] transition-all duration-300 hover:brightness-110 active:scale-[0.98] w-full sm:w-auto justify-center sm:justify-start bg-gradient-to-b from-[#5EB59A] to-[#4DA388] shadow-lg"
                        aria-label="Get Instant Quote on WhatsApp"
                    >
                        <div className="w-6 sm:w-[28px] h-6 sm:h-[28px] flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                            <Image
                                src="/icons/whatsapp-icon.svg"
                                alt=""
                                width={28}
                                height={28}
                                className="w-full h-full"
                                aria-hidden="true"
                            />
                        </div>
                        <span>Get Instant Quote on WhatsApp</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
