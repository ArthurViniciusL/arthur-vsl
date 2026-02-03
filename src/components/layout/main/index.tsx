import { cn } from "@/lib/utils";
import { useTheme } from "@/utils/hooks/useTheme";

interface IMainProps extends React.ComponentProps<"main"> { }



export default function Main({ className, children, ...props }: IMainProps) {
    const { theme } = useTheme();

    return (
        <>
            <main data-theme={theme} className={cn("w-full h-full bg-background md:w-7xl p-4 flex flex-col items-center gap-3", className)} {...props}>
                {children}
            </main>
        </>
    );
}