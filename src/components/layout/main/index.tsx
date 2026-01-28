import { cn } from "@/lib/utils";

interface IMainProps extends React.ComponentProps<"main"> { }

export default function Main({ className, children, ...props }: IMainProps) {
    return (
        <>
            <main className={cn("w-full md:w-7xl p-4 flex flex-col items-center border border-red-500", className)} {...props}>
                {children}
            </main>
        </>
    );
}