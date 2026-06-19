import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";
import { useTheme } from "@/utils/hooks/useTheme";

interface IPProps extends ComponentProps<"p"> { }

export default function P({ className, children, ...props }: IPProps) {

    const { theme } = useTheme();

    return (
        <>
            <p data-theme={theme} className={cn("text-black dark:text-white text-lg", className)} {...props}>
                {children}
            </p>
        </>
    );
}