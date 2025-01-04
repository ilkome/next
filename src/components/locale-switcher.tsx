"use client"

import { Locale } from '@/i18n/config'
import { setUserLocale } from '@/i18n/locale'
import { useTransition } from 'react'

export default function LocaleSwitcher() {
  const [, startTransition] = useTransition()

  function onChange(value: string) {
    const locale = value as Locale
    startTransition(() => {
      setUserLocale(locale)
    })
  }

  return (
    <div className='flex gap-2'>
      <div onClick={() => onChange('ru')}>ru</div>
      <div onClick={() => onChange('en')}>en</div>
    </div>
  )
}
