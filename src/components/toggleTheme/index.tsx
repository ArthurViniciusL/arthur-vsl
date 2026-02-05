import { useTheme } from "@/utils/hooks/useTheme";
import { cn } from "@/lib/utils";
import { IcDarkMode, IcLightMode } from "@/utils/modules/icons";
import { Button } from "../ui/button";
import TooltipApp from "../tooltip";
export default function ToggleTheme() {
    const { isDark, setTheme } = useTheme();

    function handleTheme() {
        if (isDark) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }

    const tooltipMsg = `Mudar para o tema ${!isDark ? 'escuro' : 'claro'}`;

    return (
        <>
            <TooltipApp msg={tooltipMsg}>
                <Button
                    size={'icon-lg'}
                    onClick={handleTheme}
                    className={cn(
                        'w-10 h-10 cursor-pointer flex justify-center items-center rounded-xl border hover:border-border transition-all duration-300 ease-in',
                        isDark
                            ? 'bg-blue-500/20 text-blue-500 border-blue-500 hover:border-blue-500 hover:bg-blue-500/30'
                            : ' bg-yellow-500/20 text-yellow-500 border-yellow-500 hover:border-yellow-500 hover:bg-yellow-500/30'
                    )}
                >
                    {
                        isDark
                            ? <IcDarkMode size={20} />
                            : <IcLightMode size={20} />
                    }
                </Button>
            </TooltipApp>
        </>
    )
}