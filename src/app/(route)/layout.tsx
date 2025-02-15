import { ReactNode } from 'react';

import dynamic from 'next/dynamic';

const Sidebar = dynamic(() => import('@/components/Sidebar'));

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
