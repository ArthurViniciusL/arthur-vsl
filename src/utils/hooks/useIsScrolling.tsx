import { useEffect, useState } from "react";

export function useIsScrolling() {
    const [isScrolling, setIsScrolling] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            // Se o scroll vertical for maior que 0, está scrollando/fora do topo
            if (window.scrollY > 0) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }

            /* Dica: Você também pode simplificar para uma única linha:
               setIsScrolling(window.scrollY > 0);
            */
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup para evitar memory leaks
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { isScrolling };
}