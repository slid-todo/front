import { ReactNode } from 'react';

import { Sidebar } from '@/components/Sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}
