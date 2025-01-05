import { ReactNode } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex min-h-screen justify-center overflow-y-auto bg-custom-white-100 ">
      {children}
    </div>
  );
}
