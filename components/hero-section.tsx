import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section
            className="relative w-full min-h-[400px] lg:min-h-[474.09px] flex flex-col items-start overflow-hidden border-none"
            style={{
                background: "linear-gradient(135deg, #101828 0%, #1E2939 50%, #101828 100%)",
                flex: "none",
                order: 0,
                alignSelf: "stretch",
                flexGrow: 0
            }}
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
                    className="object-cover opacity-15"
                    sizes="100vw"
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
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#5EB59A"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5EB59A]"
                            aria-hidden="true"
                        >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
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
                        className="font-normal text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[28px] text-[#D1D5DC] mb-10 max-w-[576px]"
                        style={{ letterSpacing: "-0.01em" }}
                    >
                        Get fast price quotes on WhatsApp from UAE&apos;s trusted spare parts specialists. Looking for engine, brake, electrical, or body parts? Send your requirement and receive competitive pricing instantly.
                    </p>

                    {/* WhatsApp Button */}
                    <Link
                        href="https://wa.me/yournumber"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-4 h-14 sm:h-[60px] px-6 sm:px-10 rounded-[14px] text-white font-medium text-base sm:text-lg lg:text-[18px] transition-all duration-300 hover:brightness-110 active:scale-[0.98] w-full sm:w-auto justify-center sm:justify-start"
                        style={{
                            background: "linear-gradient(180deg, #5EB59A 0%, #4DA388 100%)",
                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                        }}
                        aria-label="Get Instant Quote on WhatsApp"
                    >
                        <div className="w-6 sm:w-[28px] h-6 sm:h-[28px] flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-full h-full"
                                aria-hidden="true"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </div>
                        <span>Get Instant Quote on WhatsApp</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
