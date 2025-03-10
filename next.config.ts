import withPWAInit from "@ducanh2912/next-pwa"
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const withPWA = withPWAInit({
  dest: "public",
})

export default withPWA(
  withNextIntl({
    redirects: async () => {
      return [
        {
          destination: "/dashboard",
          permanent: true,
          source: "/",
        },
      ]
    },
    typescript: {
      ignoreBuildErrors: true,
    }
}))
