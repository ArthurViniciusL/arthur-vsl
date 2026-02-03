
import { useTheme } from "@/utils/hooks/useTheme";

interface IThemesProps extends React.ComponentProps<"main"> { }

export default function Theme({ children }: IThemesProps) {
    const { theme } = useTheme();
    return (
        <>
            <div data-theme={theme} className="w-full h-fit flex flex-col gap-3 justify-start items-center bg-background text-foreground">
                {children}
            </div>
        </>
    );
}