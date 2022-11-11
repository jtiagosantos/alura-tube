import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { globalStyles } from '@/common/styles/theme';
import { darkTheme } from '@/common/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <ThemeProvider
      attribute="class"
      storageKey="@alura-tube:theme"
      defaultTheme="light"
      value={{
        dark: darkTheme.className,
        light: 'light',
      }}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
