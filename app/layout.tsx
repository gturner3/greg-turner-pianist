'use client';

import { ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useRouter } from 'next/navigation';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import '@/styles/globals.css';
import '@/styles/splash.css';
import '@/styles/about.css';
import '@/styles/about-summary.css';
import '@/styles/services-summary.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <NextUIProvider navigate={router.push}>
          <NextThemesProvider>
            <GoogleReCaptchaProvider reCaptchaKey="6LftN_8pAAAAAGDU26DontFxBrqsl6ECMd5wy4kU">
              {children}
            </GoogleReCaptchaProvider>
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
