import { useTranslation } from "@/utils/hooks/useTranslation";

import TooltipApp from "../tooltip";
import { Button } from "../ui/button";

export default function ToggleLanguage() {
    const { t, i18n } = useTranslation();

    function handleLanguageToggle() {
        const nextLang = i18n.language === 'en' ? 'pt-BR' : 'en';
        i18n.changeLanguage(nextLang);
    }

    return (
        <>
            <TooltipApp msg={t('app.tooltip.msg.switch_language')}>
                <Button
                    onClick={handleLanguageToggle}
                    size={'icon-lg'}
                    variant={'ghost'}
                    className='w-10 h-10 cursor-pointer flex justify-center items-center rounded-xl border transition-all duration-300 ease-in border-transparent focus:rotate-360'
                >
                    {i18n.language === 'pt-BR' ? '🇧🇷' : '🇺🇸'}
                </Button>
            </TooltipApp>
        </>
    );
}