import { useEffect, useState } from "react";

export function useIsScrolling() {
    const [isScrolling, setIsScrolling] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup para evitar memory leaks
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { isScrolling };
}