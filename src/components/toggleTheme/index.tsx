import { useTheme } from "@/utils/hooks/useTheme";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { IcDarkMode, IcLightMode } from "@/utils/modules/icons";
export default function ToggleTheme() {
    const { isDark, setTheme } = useTheme();

    function handleTheme() {
        if (isDark) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }

    return (
        <>
            <Button
                variant={'ghost'}
                onClick={handleTheme}
                className={cn(
                    'w-10 h-10 rounded-xl border hover:border-border transition-all duration-300 ease-in',
                    isDark
                        ? 'bg-blue-400/30 text-blue-400 border-blue-400'
                        : ' bg-yellow-400/30 text-yellow-400 border-yellow-400'
                )}
            >
                {
                    isDark
                        ? <IcDarkMode size={20} />
                        : <IcLightMode size={20} />
                }
            </Button>
        </>
    )
}