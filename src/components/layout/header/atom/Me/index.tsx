import P from "@/components/typography/p";
import { useTranslation } from "@/utils/hooks/useTranslation";

export function Me() {
    const { t } = useTranslation();
    return (
        <>
            <div className='flex flex-col gap-1.5'>
                <P className='text-2xl font-semibold'>
                    Arthur Lucena
                </P>
                <P className='text-sm text-zinc-600 dark:text-zinc-400'>
                    {t('app.header.subtitle')}
                </P>
            </div>
        </>
    );
}