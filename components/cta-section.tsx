import React from "react";
import Link from "next/link";

const stats = [
    {
        label: "Parts Available",
        value: "10K+"
    },
    {
        label: "Happy Customers",
        value: "5K+"
    },
    {
        label: "Support",
        value: "24/7"
    }
];

const CTASection = () => {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#5EB59A] to-[#4DA388] py-16 lg:py-20">
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    {/* Header Content */}
                    <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium leading-tight text-white tracking-[0.35px] mb-4">
                        Ready to Find Your Parts?
                    </h2>
                    <p className="text-lg sm:text-xl lg:text-[24px] font-normal leading-relaxed text-white/90 tracking-[0.07px] mb-8">
                        Join thousands of satisfied customers. Get instant quotes via WhatsApp.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full">
                        <Link
                            href="https://wa.me/yournumber"
                            className="group flex items-center justify-center gap-3 bg-white text-[#2E7D68] px-8 py-4 sm:py-5 rounded-[14px] text-[18px] font-medium transition-all duration-300 hover:brightness-110 active:scale-95 shadow-xl w-full sm:w-auto min-w-[280px]"
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M6.58335 16.6666C8.17384 17.4825 10.0034 17.7035 11.7424 17.2898C13.4814 16.876 15.0155 15.8548 16.0681 14.4101C17.1208 12.9654 17.6229 11.1922 17.4838 9.41009C17.3448 7.62797 16.5738 5.9541 15.3099 4.69012C14.0459 3.42614 12.372 2.65517 10.5899 2.51614C8.80776 2.37711 7.03458 2.87916 5.58987 3.93183C4.14516 4.9845 3.12393 6.51855 2.71021 8.25755C2.29648 9.99655 2.51747 11.8261 3.33335 13.4166L1.66669 18.3333L6.58335 16.6666Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Get Quote via WhatsApp
                        </Link>

                        <Link
                            href="/parts"
                            className="group flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 sm:py-5 rounded-[14px] text-[18px] font-normal transition-all duration-300 hover:bg-white/10 active:scale-95 w-full sm:w-auto min-w-[220px]"
                        >
                            Browse All Parts
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                                <path d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>

                    <div className="w-full border-t border-white/20 pt-10 sm:pt-12 mt-4">
                        <div
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10"
                            role="list"
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col items-center gap-1 sm:gap-2" role="listitem">
                                    <span className="text-4xl lg:text-[48px] font-normal text-white leading-tight tracking-[0.35px]">
                                        {stat.value}
                                    </span>
                                    <span className="text-base lg:text-[16px] font-normal text-white/80 tracking-[-0.31px]">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
