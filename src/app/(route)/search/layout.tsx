import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Users or Goals',
  description: 'Search Page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex">{children}</div>;
}
