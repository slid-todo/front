import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Profile',
  description: 'User Profile Page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex">{children}</div>;
}
