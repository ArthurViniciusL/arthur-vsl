import { cn } from "@/lib/utils"

interface IPProps extends React.ComponentProps<"p"> { }

export default function P({ className, children, ...props }: IPProps) {
    return (
        <>
            <p className={cn("text-black dark:text-white text-lg", className)} {...props}>
                {children}
            </p>
        </>
    );
}