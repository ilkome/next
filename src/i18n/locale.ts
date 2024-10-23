'use server'

import { Locale } from '@/i18n/config'
import { cookies } from 'next/headers'

const COOKIE_NAME = 'NEXT_LOCALE'

export async function getUserLocale(locale: Locale) {
  const cookie = await cookies()
  return cookie.get(COOKIE_NAME)?.value || locale
}

export async function setUserLocale(locale: Locale) {
  const cookie = await cookies()
  cookie.set(COOKIE_NAME, locale)
}
