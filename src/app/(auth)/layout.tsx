export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-center min-h-screen overflow-y-auto bg-custom-white-100 ">
      {children}
    </div>
  );
}
