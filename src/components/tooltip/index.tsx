import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface TooltipProps {
    children: React.ReactNode,
    msg: string,
}

export default function TooltipApp({ children, msg }:TooltipProps) {
    return (
        <>
            <Tooltip>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent>
                    <p>{msg}</p>
                </TooltipContent>
            </Tooltip>
        </>
    )
}