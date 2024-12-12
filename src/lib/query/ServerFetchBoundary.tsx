import { ReactNode } from 'react';

import {
  dehydrate,
  FetchQueryOptions,
  HydrationBoundary,
} from '@tanstack/react-query';

import { getQueryClient } from './getQueryClient';

export type FetchOptions = Pick<FetchQueryOptions, 'queryKey' | 'queryFn'>;

type Props = {
  fetchOptions: FetchOptions[] | FetchOptions;
  children: ReactNode | ReactNode[];
};

export async function ServerFetchBoundary({ fetchOptions, children }: Props) {
  const queryClient = getQueryClient();

  if (Array.isArray(fetchOptions)) {
    for (const option of fetchOptions) {
      await queryClient.fetchQuery(option);
    }
  } else {
    await queryClient.fetchQuery(fetchOptions);
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
