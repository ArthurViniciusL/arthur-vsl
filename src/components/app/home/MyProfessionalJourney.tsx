import H2 from "@/components/typography/h2";
import { useTranslation } from "@/utils/hooks/useTranslation";

export default function MyProfessionalJourney() {
    const { t } = useTranslation();
    return (
        <>
            <H2>{t('app.home.subtitle.my_professional_history')}</H2>
        </>
    );
}