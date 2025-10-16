'use client';

import { useEffect } from 'react';

const ScrollToTop = () => {
    useEffect(() => {
        // Smooth scroll to top when component mounts (page refresh)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);

    return null; // This component doesn't render anything
};

export default ScrollToTop;
