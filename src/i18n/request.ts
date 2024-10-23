import acceptLanguageParser from 'accept-language-parser'
import { headers } from 'next/headers'
import { getRequestConfig } from 'next-intl/server'

import { defaultLocale, locales } from './config'
import { getUserLocale } from './locale'


export default getRequestConfig(async () => {
  const headersList = await headers()
  const preferLocale = acceptLanguageParser.pick(locales, headersList.get('accept-language') || defaultLocale) || defaultLocale
  const locale = await getUserLocale(preferLocale)

  return {
    locale,
    messages: (await import(`./${locale}.js`)).default
  }
})
