import { useEffect, useState } from "react";

export function useIsMobile() {
    const [isMobile, setIsMobile] = useState<boolean>(true);

    useEffect(() => {
        const media = window.matchMedia('(max-width: 800px)');
        function handleChange() {
            setIsMobile(media.matches);
        }

        handleChange();
        media.addEventListener('change', handleChange);

        return () => media.removeEventListener('change', handleChange);
    }, []);
    return { isMobile };
}