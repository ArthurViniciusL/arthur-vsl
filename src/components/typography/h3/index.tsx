import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

interface IH3Props extends ComponentProps<'h3'> { }

export default function H3({ children, className }: IH3Props) {
    return (
        <>
            <h3 className={cn('font-bold text-xl capitalize', className)}>
                {children}
            </h3>
        </>
    );
}