export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen justify-center overflow-y-auto bg-custom-white-100 ">
      {children}
    </div>
  );
}
