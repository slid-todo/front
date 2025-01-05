import { ReactNode } from 'react';

import { Metadata } from 'next';
import localFont from 'next/font/local';

import QueryProvider from '@/provider/QueryProvider';

import '@/styles/globals.css';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '찍찍이',
  description: '같이 찍어서 인증 시작해 볼까요?',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} font-pretendard`}>
        <QueryProvider>
          <div className="flex-center h-dvh w-screen overflow-y-auto bg-custom-white-300">
            <main className="w-full min-w-330 max-w-780 bg-custom-white-100">
              {children}
            </main>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
