import { cn } from "@/lib/utils";
import { useTheme } from "@/utils/hooks/useTheme";

interface IMainProps extends React.ComponentProps<"main"> { }



export default function Main({ className, children, ...props }: IMainProps) {
    const { theme } = useTheme();

    return (
        <>
        {/* md:w-7xl */}
            <main data-theme={theme} className={cn("md:max-w-7xl w-full h-full px-4 py-8 flex flex-col items-center gap-3", className)} {...props}>
                {children}
            </main>
        </>
    );
}