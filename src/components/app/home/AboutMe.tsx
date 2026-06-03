import Div from '@/components/layout/div';
import H1 from '@/components/typography/h1';
import P from '@/components/typography/p';
import SpeakAboutMe from './SpeakAboutMe/SpeakAboutMe';
import { useTranslation } from '@/utils/hooks/useTranslation';

export default function AboutMe() {

    const { t } = useTranslation();

    return (
        <>
            <Div direction='col' className='md:h-80 overflow-auto'>
                <Div direction='row' className='items-center justify-between'>
                    <H1>
                        {t('app.home.title.about_me')}
                    </H1>
                    <SpeakAboutMe />
                </Div>
                <P>
                    {t('app.home.description.about_me')}
                </P>
            </Div>
        </>
    );
}
