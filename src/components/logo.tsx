import { useTranslations } from 'next-intl'

export default function Logo() {
  const t = useTranslations('app')
  return <div className="font-nunito text-2xl font-bold first-letter:text-accent-1">{t('name')}</div>
}
