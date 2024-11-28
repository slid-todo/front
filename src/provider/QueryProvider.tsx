'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toast } from '@/components/common/Toast';

// QueryClient 인스턴스 생성
const queryClient = new QueryClient();

interface QueryProviderProps {
  children: React.ReactNode;
}

const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={true} />
      <Toast />
    </QueryClientProvider>
  );
};

export default QueryProvider;
