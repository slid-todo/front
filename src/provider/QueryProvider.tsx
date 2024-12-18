'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Toast } from '@/components/common/Toast';
import TodoModal from '@/components/TodoModal/TodoModalContainer';
import { getQueryClient } from '@/lib/query/getQueryClient';
import { useTodoModalStore } from '@/store/useTodoModalStore';

interface QueryProviderProps {
  children: React.ReactNode;
}

const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => {
  const queryClient = getQueryClient();

  const { isOpen } = useTodoModalStore();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={true} />
      <Toast />
      {isOpen && <TodoModal todoType="생성" />}
    </QueryClientProvider>
  );
};

export default QueryProvider;
