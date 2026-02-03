import { useEffect, useState } from "react";

export function useIsScrolling() {
    const [isScrolling, setIsScrolling] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolling(true);
            }
            setIsScrolling(false);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return {isScrolling};
}