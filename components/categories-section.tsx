import React from "react";
import Link from "next/link";
import Image from "next/image";

const categories = [
    {
        title: "Engine Parts",
        count: "2,500+ parts",
        gradientClass: "category-gradient-engine",
        iconSrc: "/category-icons/engin-parts.svg",
    },
    {
        title: "Brake System",
        count: "1,800+ parts",
        gradientClass: "category-gradient-brake",
        iconSrc: "/category-icons/brake-system.svg",
    },
    {
        title: "Suspension",
        count: "1,200+ parts",
        gradientClass: "category-gradient-suspension",
        iconSrc: "/category-icons/suspension.svg",
    },
    {
        title: "Oil Filters",
        count: "3,000+ parts",
        gradientClass: "category-gradient-oil-filter",
        iconSrc: "/category-icons/oil-filter.svg",
    },
    {
        title: "Wipers",
        count: "900+ parts",
        gradientClass: "category-gradient-wipers",
        iconSrc: "/category-icons/wipers.svg",
    },
    {
        title: "Body Parts",
        count: "2,200+ parts",
        gradientClass: "category-gradient-body",
        iconSrc: "/category-icons/body-parts.svg",
    },
    {
        title: "Lighting",
        count: "1,500+ parts",
        gradientClass: "category-gradient-lighting",
        iconSrc: "/category-icons/lighting.svg",
    },
    {
        title: "Uncategorized",
        count: "800+ parts",
        gradientClass: "category-gradient-uncategorized",
        iconSrc: "/category-icons/uncategorized.svg",
    }
];

const CategoriesSection = () => {
    return (
        <section className="bg-white py-20 lg:py-28 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
                {/* Header Container */}
                <div className="flex flex-col items-center text-center gap-4 mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium leading-tight lg:leading-[48px] text-[#101828] tracking-[0.35px]">
                        Browse By Category
                    </h2>
                    <p className="text-lg sm:text-xl lg:text-[20px] font-normal leading-relaxed lg:leading-[28px] text-[#4A5565] tracking-[-0.45px]">
                        Thousands of genuine parts across all categories
                    </p>
                </div>

                {/* Categories Grid */}
                <ul
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                    {categories.map((category, index) => (
                        <li key={index}>
                            <Link
                                href={`/categories/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className="group relative flex flex-col items-start p-8 bg-white border border-[#F3F4F6] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_10px_10px_-5px_rgba(0,0,0,0.04)] overflow-hidden h-[226px]"
                            >
                                {/* Decorative Background Shape */}
                                <div
                                    className={`absolute -right-4 -top-4 w-24 h-24 rounded-bl-[1.67772e+07px] opacity-10 pointer-events-none ${category.gradientClass}`}
                                    aria-hidden="true"
                                />

                                {/* Icon Container */}
                                <div
                                    className={`flex items-center justify-center w-14 h-14 rounded-[14px] text-white mb-8 shrink-0 shadow-lg ${category.gradientClass}`}
                                    aria-hidden="true"
                                >
                                    {category.iconSrc && (
                                        <Image
                                            src={category.iconSrc}
                                            alt={`${category.title} icon`}
                                            width={28}
                                            height={28}
                                            className="invert brightness-0 contrast-100 filter"
                                            style={{ filter: "brightness(0) invert(1)" }}
                                        />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-inter font-medium text-[20px] leading-[28px] text-[#101828] tracking-[-0.45px]">
                                        {category.title}
                                    </h3>
                                    <p className="font-inter font-normal text-[14px] leading-[20px] text-[#6A7282] tracking-[-0.15px]">
                                        {category.count}
                                    </p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default CategoriesSection;
