import React from "react";

const features = [
    {
        title: "Genuine Parts Guarantee",
        description: "100% authentic parts from certified suppliers",
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M26.6667 17.3333C26.6667 24 22 27.3333 16.4533 29.2667C16.1629 29.3651 15.8474 29.3604 15.56 29.2533C10 27.3333 5.33333 24 5.33333 17.3333V8.00001C5.33333 7.64639 5.4738 7.30725 5.72385 7.0572C5.9739 6.80715 6.31304 6.66668 6.66666 6.66668C9.33333 6.66668 12.6667 5.06668 14.9867 3.04001C15.2691 2.79867 15.6285 2.66608 16 2.66608C16.3715 2.66608 16.7309 2.79867 17.0133 3.04001C19.3467 5.08001 22.6667 6.66668 25.3333 6.66668C25.687 6.66668 26.0261 6.80715 26.2761 7.0572C26.5262 7.30725 26.6667 7.64639 26.6667 8.00001V17.3333Z" stroke="#5EB59A" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        title: "Fast UAE Delivery",
        description: "Express delivery across Dubai & UAE",
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M18.6667 24V7.99998C18.6667 7.29274 18.3857 6.61446 17.8856 6.11436C17.3855 5.61426 16.7072 5.33331 16 5.33331H5.33332C4.62608 5.33331 3.9478 5.61426 3.4477 6.11436C2.94761 6.61446 2.66666 7.29274 2.66666 7.99998V22.6666C2.66666 23.0203 2.80713 23.3594 3.05718 23.6095C3.30723 23.8595 3.64637 24 3.99999 24H6.66666" stroke="#5EB59A" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 24H12" stroke="#5EB59A" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M25.3333 24H28C28.3536 24 28.6928 23.8595 28.9428 23.6095C29.1928 23.3594 29.3333 23.0203 29.3333 22.6667V17.8C29.3328 17.4974 29.2293 17.204 29.04 16.968L24.4 11.168C24.2753 11.0119 24.1171 10.8857 23.9371 10.799C23.757 10.7122 23.5598 10.667 23.36 10.6667H18.6667" stroke="#5EB59A" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22.6667 26.6666C24.1394 26.6666 25.3333 25.4727 25.3333 24C25.3333 22.5272 24.1394 21.3333 22.6667 21.3333C21.1939 21.3333 20 22.5272 20 24C20 25.4727 21.1939 26.6666 22.6667 26.6666Z" stroke="#5EB59A" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.33332 26.6666C10.8061 26.6666 12 25.4727 12 24C12 22.5272 10.8061 21.3333 9.33332 21.3333C7.86056 21.3333 6.66666 22.5272 6.66666 24C6.66666 25.4727 7.86056 26.6666 9.33332 26.6666Z" stroke="#5EB59A" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        title: "Expert Support",
        description: "24/7 professional assistance",
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 18.6667H8C8.70724 18.6667 9.38552 18.9476 9.88562 19.4477C10.3857 19.9478 10.6667 20.6261 10.6667 21.3333V25.3333C10.6667 26.0406 10.3857 26.7189 9.88562 27.219C9.38552 27.719 8.70724 28 8 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H24C23.2928 28 22.6145 27.719 22.1144 27.219C21.6143 26.7189 21.3333 26.0406 21.3333 25.3333V21.3333C21.3333 20.6261 21.6143 19.9478 22.1144 19.4477C22.6145 18.9476 23.2928 18.6667 24 18.6667H28" stroke="#5EB59A" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        title: "Competitive Pricing",
        description: "Best prices in the market guaranteed",
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M29.3333 9.33331L18 20.6666L11.3333 14L2.66663 22.6666" stroke="#5EB59A" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.3334 9.33331H29.3334V17.3333" stroke="#5EB59A" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }
];

const FeaturesSection = () => {
    return (
        <section
            className="w-full bg-white border-b border-[#F3F4F6] py-12 lg:py-[48px] box-border"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-row items-start gap-4 p-6 pb-0 rounded-[14px] transition-all duration-300 hover:bg-[#F9FAFB] border border-transparent hover:border-[#F3F4F6] mx-auto lg:mx-0 w-full max-w-[286px] h-[140px] box-border"
                        >
                            {/* Icon Container */}
                            <div
                                className="flex flex-shrink-0 items-center justify-center w-16 h-16 rounded-[14px] bg-[rgba(94,181,154,0.08)]"
                            >
                                <div className="w-8 h-8 flex items-center justify-center">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Text Container */}
                            <div className="flex flex-col gap-[4px] min-w-0 w-[158px] h-[92px]">
                                <h3
                                    className="font-medium text-[16px] leading-[24px] text-[#101828] tracking-[-0.3125px]"
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    className="font-normal text-[14px] leading-[20px] text-[#4A5565] tracking-[-0.150391px]"
                                >
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
