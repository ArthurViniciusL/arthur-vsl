import { useTranslation as useI18nTranslation } from 'react-i18next'
import { DEFAULT_NS } from '@/locales/consts'

export function useTranslation() {
  return useI18nTranslation(DEFAULT_NS)
}
