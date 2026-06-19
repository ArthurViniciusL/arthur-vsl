import type { ReactNode } from "react";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface TooltipProps {
    children: ReactNode,
    msg: string,
    side?: 'top' | 'bottom' | 'left' | 'right'
}

export default function TooltipApp({ children, msg, side }:TooltipProps) {
    return (
        <>
            <Tooltip>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent side={side}>
                    <p>{msg}</p>
                </TooltipContent>
            </Tooltip>
        </>
    );
}