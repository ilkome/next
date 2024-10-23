import eslint from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import perfectionist from 'eslint-plugin-perfectionist'
import pluginReact from "eslint-plugin-react"
import pluginReactHooks from "eslint-plugin-react-hooks"
import tailwindPlugin from 'eslint-plugin-tailwindcss'
import tsEslint from "typescript-eslint"

export default [
  perfectionist.configs['recommended-natural'],
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  ...tailwindPlugin.configs["flat/recommended"],
  {
    files: ["**/**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...pluginReact.configs.flat.recommended,
    ...pluginReact.configs.flat['jsx-runtime'],
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
    },
    plugins: {
      '@next/next': nextPlugin,
      "react-hooks": pluginReactHooks,
    },
    rules: {
      // "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      ...pluginReactHooks.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    rules: {
      "no-console": "warn",
      // "perfectionist/sort-imports": "off",
      "semi": ["error", "never"]
    },
  },
]
