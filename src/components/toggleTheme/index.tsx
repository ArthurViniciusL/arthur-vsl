import { useTheme } from "@/utils/hooks/useTheme";
import { cn } from "@/lib/utils";
import { IcDarkMode, IcLightMode } from "@/utils/modules/icons";
import { Button } from "../ui/button";
import TooltipApp from "../tooltip";
import { useTranslation } from "@/utils/hooks/useTranslation";
export default function ToggleTheme() {
    const { isDark, setTheme } = useTheme();
    const { t } = useTranslation();

    function handleTheme() {

        // let msg = ` Tema ${!isDark ? 'escuro' : 'claro' }  habilitado`;

        if (isDark) {
            setTheme('light');
        } else {
            setTheme('dark');
        }

        // toast.info(
        //     msg, {
        //     position: "bottom-right",
        //     style: {
        //         width: 'fit-content',
        //         height: 'fit-content',
        //     }
        // });
    }

    // const tooltipMsg = `Mudar para o tema ${!isDark ? 'escuro' : 'claro'}`;

    const tooltipMsg = !isDark
        ? t('app.tooltip.md.switch_dark_theme')
        : t('app.tooltip.md.switch_light_theme');

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
                            : ' bg-yellow-500/20 text-yellow-500 border-yellow-500 hover:border-yellow-500 hover:bg-yellow-500/30 focus:rotate-180'
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