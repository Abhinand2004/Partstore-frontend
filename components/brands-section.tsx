import React from "react";
import Image from "next/image";
import Link from "next/link";

const brands = [
    {
        name: "BMW",
        href: "/brands/bmw",
        icon: "/brand-icons/bmw-logo.svg"
    },
    {
        name: "Mercedes-Benz",
        href: "/brands/mercedes-benz",
        icon: "/brand-icons/mercedes-benz-9.svg"
    },
    {
        name: "Audi",
        href: "/brands/audi",
        icon: "/brand-icons/audi-11.svg"
    },
    {
        name: "Land Rover",
        href: "/brands/land-rover",
        icon: "/brand-icons/land-roverin-logo.svg"
    },
    {
        name: "Porsche",
        href: "/brands/porsche",
        icon: "/brand-icons/porsche-2.svg"
    },
    {
        name: "Volkswagen",
        href: "/brands/volkswagen",
        icon: "/brand-icons/volkswagen-10.svg"
    },
    {
        name: "Toyota",
        href: "/brands/toyota",
        icon: "/brand-icons/toyota-7.svg"
    },
    {
        name: "Nissan",
        href: "/brands/nissan",
        icon: "/brand-icons/nissan-6.svg"
    },
    {
        name: "Honda",
        href: "/brands/honda",
        icon: "/brand-icons/honda-11.svg"
    },
    {
        name: "Lexus",
        href: "/brands/lexus",
        icon: "/brand-icons/lexus.svg"
    },
    {
        name: "Chevrolet",
        href: "/brands/chevrolet",
        icon: "/brand-icons/chevrolet-10.svg"
    },
    {
        name: "Ford",
        href: "/brands/ford",
        icon: "/brand-icons/ford-8.svg"
    }
];

const BrandsSection = () => {
    return (
        <section className="bg-white py-20 lg:py-28 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
                {/* Header Container */}
                <div className="flex flex-col items-center text-center gap-4 mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium leading-tight lg:leading-[48px] text-[#101828] tracking-[0.35px]">
                        Premium Spare Parts for Leading Car Brands
                    </h2>
                    <p className="text-lg sm:text-xl lg:text-[20px] font-normal leading-relaxed lg:leading-[28px] text-[#4A5565] tracking-[-0.45px]">
                        We supply genuine and high-quality aftermarket parts for:
                    </p>
                </div>

                {/* Brands Grid */}
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
                    {brands.map((brand, index) => (
                        <li key={index}>
                            <Link
                                href={brand.href}
                                className="group flex flex-col items-center justify-center p-6 h-32 bg-gradient-to-br from-[#F9FAFB] to-white border-2 border-[#E5E7EB] rounded-[14px] transition-all duration-300 hover:border-[#5EB59A] hover:shadow-lg hover:-translate-y-1"
                                aria-label={`Browse parts for ${brand.name}`}
                            >
                                <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    <Image
                                        src={brand.icon}
                                        alt={`${brand.name} logo`}
                                        width={64}
                                        height={64}
                                        className="w-16 h-16 object-contain"
                                    />
                                </div>
                                <span className="sr-only">{brand.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default BrandsSection;
