import { useTranslation } from '@/utils/hooks/useTranslation'

type Period = 'madrugada' | 'dia' | 'tarde' | 'noite'

export function usePeriodOfDay() {
    const { t } = useTranslation()
    const hour = new Date().getHours()

    let period: Period
    switch (true) {
        case hour < 6:
            period = 'madrugada'
            break
        case hour < 12:
            period = 'dia'
            break
        case hour < 18:
            period = 'tarde'
            break
        default:
            period = 'noite'
    }

    const periodMsg = t(`app.period.greeting.${period}`)

    return { period, periodMsg }
}
