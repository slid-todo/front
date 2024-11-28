import type { Metadata } from 'next';

import localFont from 'next/font/local';

import { Sidebar } from '@/components/common/Sidebar';
import QueryProvider from '@/provider/QueryProvider';
import '@/styles/globals.css';

const pretendard = localFont({
  src: '../../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} font-pretendard`}>
        <QueryProvider>
          <Sidebar />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
