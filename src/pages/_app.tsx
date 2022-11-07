import type { AppProps } from 'next/app';

import { globalStyles } from '@/common/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} />;
}
