import React from "react";
import Link from "next/link";

const steps = [
    {
        number: "1",
        title: "Submit Your Requirements",
        description: "Name, Number, VIN, Part Names, or simply tell us what you need.",
        icon: (
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width="44" height="44" fill="url(#pattern0_46_12)" />
                <defs>
                    <pattern id="pattern0_46_12" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_46_12" transform="scale(0.0111111)" />
                    </pattern>
                    <image id="image0_46_12" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJ0lEQVR4nO3bvUojcRSG8YCgYmfnx4KdnZ2dW2mllVZrtVtpZbRY2YjY65X5Uan3oBcgsbF6ZGCKIMci8Hqynnl/EBA5cCYPw6RI/r2emZmZmZmZmZn1gFngBLgDXqnrFbgFjoGZ7Mg/gEe656F575l3chcjj8b++ju7fVx0XT8jdPNM7rqbjNDDSb/L/8AwI7QBDp3EoZNUCD0V7JwSzktUCD0X7JwTzktUCD0f7JwXzktUCL0Q7FwQzktUCL0S7FwRzktUCL0a7FwVzktUCL0W7FwTzktUCL0e7FwXzktUCP0z2LkhnJeoEHor2LkpnJeoEHon2LktnJeoEHov2LkrnJeoEHo/2PlLOC9RIfSfYOdv4bxEhdCHwc4D4bxEhdD9YOeRcF6iQujTYOdf4bxEhdAXwc5z4bxEhdDfgkMncegkFUK/Af+ApfY1aP+nmpeoEHoQ7BwI5yUqhF4c8zvAceclKoReCnYuC+clKoQeBDvPhPMSFUK/tc/YcT4Mx5mXqBD6W3DoJA5dKLR/8Q8vGaF9hoWcMyzNwcauO8oIPdOeteuqe2D6y0OPnJx96Gjk5ZTIH+7sfvO8Kv4BOQSu2+8hc+5kMzMzs/r4xKSvqxwcOgcOnQOHzoFD58Chc+DQOXDoHDh0Dhw6Bw6dA4fOgUPnwKFz4NA5cOgcOHQOHDoH8Bx0fpr0dZUDXAWhLyd9XeUA023s5/bV/O2faJmZmZn1Rr0DZ9/gcJhYlMEAAAAASUVORK5CYII=" />
                </defs>
            </svg>
        )
    },
    {
        number: "2",
        title: "Instant WhatsApp Acknowledgement",
        description: "You will receive an acknowledged message in whatsapp within 1 min.",
        icon: (
            <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        )
    },
    {
        number: "3",
        title: "Receive Quote on WhatsApp",
        description: "Our sales team confirms price and availability instantly.",
        icon: (
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width="44" height="44" fill="url(#pattern0_46_13)" />
                <defs>
                    <pattern id="pattern0_46_13" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_46_13" transform="scale(0.0111111)" />
                    </pattern>
                    <image id="image0_46_13" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAExklEQVR4nO2d22tdRRSHR63XRrRata3gg3h5UasUY6VUXwoVLy9iwaIU60OjeEFRUVTUNrZGwV58EUVUUkXBv6Ai1Fr71EdRlGpaDWrjpaKtnpM09JOBVTiUnJx9Zs+amb33fJCX5GTNb/84OTOzZq2JMZlMJpPJZDKZTCaT6Q0wB7gOuA9YD4wCXwLfA+PAIeCofB2S79mf7ZbXrpfftTHmFBiyGQCnADcDr4pZ/+IPG+sLYARYbscyTQI4GbgFeA/4nXD8BrwLrLQaTF0BLgKeBn4gPvYj5yXgQlMXgPny5/sf6TEJvAUsNFUFOBt4BThC+hwGNgEDpkoAtwE/Uj1+Bu40qQOcB3xC9fkYmGdSRNauKUx0vrB/kYMmJYD7gRb1owWsNSkgS7a6MxLT4JOA12gO2+wzxzC6SSYfZ1Nok4doLo+EMvl2YJrmMg3cqm3yxcAfsZ80AWwybJFm1u2z2E+YEJ+qZAGBR2M/WYI86NvkefkjY0b+BM73afQbM4+TATb7nACnYj9Nwkx6mRiBjUo5hK02aQPMPWG8ucANshNrR45ZlOGyJp+pcK43DlxTcPzF8voYMfthAjijjNGrPQtqFTXkBGPagWO6sKpvgzsEfeRZzFaFyVgjpgvbjaOQU4G/PIsZdNSyNHBM16Ve/0U7wDL8M1DioDdkTFdudBHysG8VpgQhYwbdKQJv+1ZhFEzRiFmCN11E7PGtwiiYohGzBLtdROxTEDJQoso0ZExXvnMRYhfhvhlUmLg0Yrpy0EWIxlZ1m6MpCwPHdKXlIkSjTqNtd2WOxTkhYwY1+hd0GO/XGDmnDB0z2EfH1+jRli3w0iKTGfBkpJj98q2L0bbVITTXdtEymlhMr8s7W6AdkrFZtIwlFNP7hmUdYXm2i47LE4vpfQu+hHE8CpzTRceGhGKqJJVOA/4mDKtnqSU5kFBM/2lSEbUdfV7v0aKRSsxejDqZLKLuQI8p4LEezZ5fJRCzKHeVMfp0aQXW4KkeYz+QSMwiHLReORst4mxbmAYLZhnzase2OY2YRdhQymQReIGSwAVdxlskjfSpxCxSQOOnIdSWPSkIfGKGca4omQfXiOk88bq+q30XObatMbZIUPoTH/dwu4FGzF6N/Od6M1rMXqMouKoMeTW5w+wdsZ8sIXaodWkBlygdcVWNidlWOL7MXt7wMt6j9mIXVZM7zF5Lc3koiMkdZtuLoprGcFCTG9YHfpyRKC3KHWY/AxyjvhyzbyiTArYIW67LqRste4+eSQngSuAb6sMB4HqTItKyUAc+6HYMlgSSwKkyY8HWyGUCrawlerV437Lp+p7RYL6vNDbtyqmEzWy6FJxuBm4DLpBr0buB54H25qNtWtu6XE/mpjou6f7LtDMAuee2LckCxuLb3RQPPOZi8s1ZXC2tjF/cOBwIf2rKz2NorhZjWT5JmpPITUmjk1LmfCWpVbM2VQqoy+6li2gVcGlt3pZCVwd6CBk/IzY/1WF6FAnihYKLfFtwMJ50FS5ked3hMy0fEUGUSNKkim4tJ2TDYnMHnwBbgXvsvQGLry2QymUwmkzGN5n8tlTl7LGWRBwAAAABJRU5ErkJggg==" />
                </defs>
            </svg>
        )
    }
];

const HowItWorksSection = () => {
    return (
        <section
            className="relative w-full min-h-[774px] flex flex-col items-center py-20 lg:py-[80px] overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #101828 0%, #1E2939 50%, #101828 100%)",
            }}
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
                <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                    {/* Connecting Line (Desktop Only) */}
                    <div
                        className="hidden lg:block absolute top-[64px] left-[15%] right-[15%] h-[2px] z-0"
                        style={{
                            background: "linear-gradient(90deg, rgba(94, 181, 154, 0.5) 0%, #5EB59A 50%, rgba(94, 181, 154, 0.5) 100%)"
                        }}
                    />

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative border border-white/10 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm transition-all duration-500 hover:bg-[rgba(255,255,255,0.15)] h-[350px] mx-auto lg:mx-0"
                            style={{
                                width: "100%",
                                maxWidth: index === 2 ? "374px" : "373px",
                                height: "350px",
                                boxSizing: "border-box",
                                borderRadius: "16px",
                            }}
                        >
                            {/* Step Number Badge */}
                            <div
                                className="flex items-center justify-center z-10 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-110"
                                style={{
                                    width: "64px",
                                    height: "64px",
                                    background: "linear-gradient(180deg, #5EB59A 0%, #4DA388 100%)",
                                    borderRadius: "1.67772e+07px",
                                    position: "absolute",
                                    left: "154.66px",
                                    top: "33px"
                                }}
                            >
                                <span className="font-inter font-normal text-[24px] text-white leading-[32px] tracking-[0.0703125px] text-center">
                                    {step.number}
                                </span>
                            </div>

                            {/* Icon Box */}
                            <div
                                className="flex items-center justify-center transition-colors duration-500 group-hover:bg-[rgba(255,255,255,0.2)]"
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    background: "rgba(255, 255, 255, 0.1)",
                                    borderRadius: "16px",
                                    position: "absolute",
                                    left: "146.66px",
                                    top: "121px"
                                }}
                            >
                                <div className="w-[44px] h-[44px] flex items-center justify-center">
                                    {step.icon}
                                </div>
                            </div>

                            {/* Heading 3 */}
                            <div
                                style={{
                                    position: "absolute",
                                    width: index === 2 ? "307.34px" : index === 1 ? "307px" : "307.33px",
                                    height: index === 1 ? "64px" : "32px",
                                    left: "33px",
                                    top: "225px",
                                }}
                            >
                                <h3
                                    className="font-inter font-medium text-[24px] text-white leading-[32px] text-center tracking-[0.0703125px]"
                                    style={{
                                        position: "absolute",
                                        width: index === 2 ? "330px" : index === 1 ? "216px" : "306px",
                                        height: index === 1 ? "64px" : "32px",
                                        left: index === 2 ? "-11.61px" : index === 1 ? "45.66px" : "0.69px",
                                        top: "0px",
                                    }}
                                >
                                    {step.title}
                                </h3>
                            </div>

                            {/* Paragraph */}
                            <div
                                style={{
                                    position: "absolute",
                                    width: index === 2 ? "307.34px" : index === 1 ? "307.34px" : "307.33px",
                                    height: index === 1 ? "24px" : "48px",
                                    left: "33px",
                                    top: "269px",
                                }}
                            >
                                <p
                                    className="font-inter font-normal text-[16px] text-[#D1D5DC] leading-[24px] text-center tracking-[-0.3125px]"
                                    style={{
                                        position: "absolute",
                                        width: index === 2 ? "217px" : index === 1 ? "252px" : "258px",
                                        height: "48px",
                                        left: index === 2 ? "45.38px" : index === 1 ? "28px" : "24.83px",
                                        top: index === 2 ? "-0.5px" : index === 1 ? "24px" : "-0.5px",
                                    }}
                                >
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="flex justify-center mt-16 lg:mt-[128px]"> {/* 554px - 426px (bottom of cards roughly) */}
                    <Link
                        href="https://wa.me/yournumber"
                        className="group relative block transition-all duration-300 hover:brightness-110 active:scale-95 shadow-lg"
                        style={{
                            width: "236.08px",
                            height: "60px",
                            background: "linear-gradient(180deg, #5EB59A 0%, #4DA388 100%)",
                            borderRadius: "14px",
                        }}
                    >
                        {/* Icon */}
                        <div
                            className="absolute flex items-center justify-center transition-transform duration-300 group-hover:rotate-12"
                            style={{
                                width: "20px",
                                height: "20px",
                                left: "32px",
                                top: "20px"
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.58335 16.6666C8.17384 17.4825 10.0034 17.7035 11.7424 17.2898C13.4814 16.876 15.0155 15.8548 16.0681 14.4101C17.1208 12.9654 17.6229 11.1922 17.4838 9.41009C17.3448 7.62797 16.5738 5.9541 15.3099 4.69012C14.0459 3.42614 12.372 2.65517 10.5899 2.51614C8.80776 2.37711 7.03458 2.87916 5.58987 3.93183C4.14516 4.9845 3.12393 6.51855 2.71021 8.25755C2.29648 9.99655 2.51747 11.8261 3.33335 13.4166L1.66669 18.3333L6.58335 16.6666Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        {/* Text Container */}
                        <div
                            className="absolute flex items-center justify-center"
                            style={{
                                width: "144.08px",
                                height: "28px",
                                left: "60px",
                                top: "16px"
                            }}
                        >
                            <span
                                className="font-inter font-medium text-[18px] leading-[28px] text-center text-white"
                                style={{
                                    width: "145px",
                                    height: "28px",
                                    letterSpacing: "-0.439453px"
                                }}
                            >
                                Start Your Search
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
