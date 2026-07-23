import { useTheme as useNextTheme } from 'next-themes'

export function useTheme() {
  const { theme, setTheme, resolvedTheme } = useNextTheme()

  const isDark = (resolvedTheme ?? theme) === 'dark'

  const toggle = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return {
    theme,
    resolvedTheme,
    isDark,
    toggle,
  }
}
