'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-4 py-3 md:py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Image
                            src="/logo.svg"
                            alt="The Purple Movement Logo"
                            width={18}
                            height={18}
                            className="w-32 h-16 md:w-48 md:h-20"
                        />
                    </div>

                    {/* Join Button */}
                    <button
                        className="px-3 py-1.5 md:px-6 md:py-2 rounded-full font-normal hover:opacity-90 transition-opacity duration-300 text-white text-sm md:text-[20px]"
                        style={{
                            background: 'linear-gradient(135deg, #84298E 0%, #B454BF 100%)',
                            fontFamily: 'var(--font-poppins)'
                        }}
                    >
                        <span className="">Take the Pledge</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;