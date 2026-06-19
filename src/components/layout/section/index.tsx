import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

interface ISectionProps extends ComponentProps<'section'> {
    direction: 'row' | 'col'
}

export default function Section({ className, direction, children }: ISectionProps) {
    return (
        <>
            <section
className={
                cn('w-full h-fit text-justify flex gap-4',
                    direction === 'row' ? 'flex-row' : 'flex-col',
                    className
                )
            }>
                {children}
            </section>
        </>
    );
}