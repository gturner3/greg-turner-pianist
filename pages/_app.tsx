import type { AppProps } from 'next/app';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useRouter } from 'next/router';

import { fontSans, fontMono } from '@/config/fonts';
import '@/styles/globals.css';
import '@/styles/splash.css';
import '@/styles/about.css';
import '@/styles/about-summary.css';
import '@/styles/services-summary.css';
import '@/styles/page.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider>
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
