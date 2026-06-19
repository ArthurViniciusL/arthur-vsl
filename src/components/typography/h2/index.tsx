import { cn } from "@/lib/utils";

interface IH2Props extends React.ComponentProps<'h2'> { }

export default function H2({ children, className }: IH2Props) {
    return (
        <>
            <h2 className={cn('font-bold text-xl capitalize', className)}>
                {children}
            </h2>
        </>
    )
}