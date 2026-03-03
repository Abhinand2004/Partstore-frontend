import React from "react";
import Image from "next/image";
import Link from "next/link";

const steps = [
    {
        number: "1",
        title: "Submit Your Requirements",
        description: "Name, Number, VIN, Part Names, or simply tell us what you need.",
        icon: (
            <Image src="/icons/submit-icon.svg" alt="" width={44} height={44} className="w-full h-full" aria-hidden="true" />
        )
    },
    {
        number: "2",
        title: "Instant WhatsApp Acknowledgement",
        description: "You will receive an acknowledged message in whatsapp within 1 min.",
        icon: (
            <Image src="/icons/whatsapp-icon.svg" alt="" width={44} height={44} className="w-full h-full" aria-hidden="true" />
        )
    },
    {
        number: "3",
        title: "Receive Quote on WhatsApp",
        description: "Our sales team confirms price and availability instantly.",
        icon: (
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M13 8H7" />
                <path d="M17 12H7" />
            </svg>
        )
    }
];

const HowItWorksSection = () => {
    return (
        <section
            className="relative w-full min-h-[774px] flex flex-col items-center py-20 lg:py-[80px] overflow-hidden how-it-works-bg"
        >
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                {/* Header Container */}
                <div className="flex flex-col items-center text-center gap-4 mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium leading-tight lg:leading-[48px] text-white tracking-[0.35px]">
                        How Partstore Works
                    </h2>
                    <p className="text-lg sm:text-xl lg:text-[20px] font-normal leading-relaxed lg:leading-[28px] text-[#D1D5DC] tracking-[-0.45px] max-w-[343px]">
                        Get your spare parts in 3 simple steps
                    </p>
                </div>

                {/* Steps Grid Container */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12 items-stretch mt-8 lg:mt-12">
                    {/* Connecting Line (Desktop Only) */}
                    <div
                        className="hidden md:block absolute top-[64px] left-[15%] right-[15%] h-[2px] z-0 how-it-works-line"
                    />

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative border border-white/10 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm transition-all duration-500 hover:bg-[rgba(255,255,255,0.15)] flex flex-col items-center pt-8 pb-10 px-6 w-full max-w-[374px] mx-auto rounded-[16px] h-full"
                        >
                            {/* Step Number Badge */}
                            <div
                                className="flex items-center justify-center z-10 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-110 mb-6 shrink-0 w-16 h-16 rounded-full bg-gradient-to-b from-[#5EB59A] to-[#4DA388]"
                            >
                                <span className="font-inter font-normal text-[24px] text-white leading-[32px] tracking-[0.0703125px] text-center">
                                    {step.number}
                                </span>
                            </div>

                            {/* Icon Box */}
                            <div
                                className="flex items-center justify-center transition-colors duration-500 group-hover:bg-white/20 mb-6 rounded-[16px] shrink-0 w-20 h-20 bg-white/10"
                            >
                                <div className="w-[44px] h-[44px] flex items-center justify-center">
                                    {step.icon}
                                </div>
                            </div>

                            {/* Heading 3 */}
                            <h3 className="font-inter font-medium text-[20px] sm:text-[24px] text-white leading-[28px] sm:leading-[32px] text-center tracking-[0.0703125px] mb-3">
                                {step.title}
                            </h3>

                            {/* Paragraph */}
                            <p className="font-inter font-normal text-[15px] sm:text-[16px] text-[#D1D5DC] leading-[24px] text-center tracking-[-0.3125px]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="flex justify-center mt-12 lg:mt-20">
                    <Link
                        href="https://wa.me/yournumber"
                        className="group relative flex items-center justify-center gap-3 transition-all duration-300 hover:brightness-110 active:scale-95 shadow-lg rounded-[14px] px-8 py-4 w-[236px] max-w-full bg-gradient-to-b from-[#5EB59A] to-[#4DA388]"
                    >
                        {/* Icon */}
                        <div className="transition-transform duration-300 group-hover:rotate-12 flex items-center justify-center w-5 h-5 shrink-0">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M6.58335 16.6666C8.17384 17.4825 10.0034 17.7035 11.7424 17.2898C13.4814 16.876 15.0155 15.8548 16.0681 14.4101C17.1208 12.9654 17.6229 11.1922 17.4838 9.41009C17.3448 7.62797 16.5738 5.9541 15.3099 4.69012C14.0459 3.42614 12.372 2.65517 10.5899 2.51614C8.80776 2.37711 7.03458 2.87916 5.58987 3.93183C4.14516 4.9845 3.12393 6.51855 2.71021 8.25755C2.29648 9.99655 2.51747 11.8261 3.33335 13.4166L1.66669 18.3333L6.58335 16.6666Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        {/* Text Container */}
                        <span className="font-inter font-medium text-[16px] sm:text-[18px] leading-[28px] text-center text-white whitespace-nowrap tracking-[-0.439453px]">
                            Start Your Search
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
