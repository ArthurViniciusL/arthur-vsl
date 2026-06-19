import Div from '@/components/layout/div';
import H1 from '@/components/typography/h1';
import P from '@/components/typography/p';
import { usePeriodOfDay } from '@/utils/hooks/usePeriodOfDay';
import { useTranslation } from '@/utils/hooks/useTranslation';

import SpeakAboutMe from './SpeakAboutMe/SpeakAboutMe';

export default function AboutMe() {

    const { t } = useTranslation();
    const { periodMsg } = usePeriodOfDay();

    return (
        <>
            <Div direction='col' className='md:h-80 overflow-auto'>
                <Div direction='row' className='items-center justify-between'>
                    <H1>
                        {t('app.home.title.about_me')}
                    </H1>
                    <SpeakAboutMe />
                </Div>
                <P style={{ whiteSpace: 'pre-line' }}>
                    {t('app.home.description.about_me', { period_of_day: periodMsg })}
                </P>
            </Div>
        </>
    );
}
