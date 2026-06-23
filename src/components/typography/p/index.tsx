import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";
import { useTheme } from "@/utils/hooks/useTheme";

interface IPProps extends ComponentProps<"p"> {
    description?: boolean;
}

export default function P({ className, children, description, ...props }: IPProps) {

    const { theme } = useTheme();

    return (
        <>
            <p data-theme={theme} className={cn("text-black dark:text-white text-lg", description && "text-sm text-muted-foreground dark:text-zinc-400", className)} {...props}>
                {children}
            </p>
        </>
    );
}