interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className="flex h-screen w-screen flex-col gap-16 overflow-y-scroll bg-custom-white-100 px-16 pt-48 scrollbar-hide md:pt-16">
      {children}
    </div>
  );
};
