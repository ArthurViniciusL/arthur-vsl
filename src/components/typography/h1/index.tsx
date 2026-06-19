import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

interface IH1Props extends ComponentProps<'h1'> { }

export default function H1({ children, className }: IH1Props) {
    return (
        <>
            <h1 className={cn('font-bold text-4xl', className)}>
                {children}
            </h1>
        </>
    );
}