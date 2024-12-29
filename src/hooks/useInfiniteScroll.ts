import { useEffect, useRef } from 'react';

interface InfiniteScrollProps {
  fetchNextPage: () => void;
  isLoading: boolean;
}

export const useInfiniteScroll = ({
  fetchNextPage,
  isLoading,
}: InfiniteScrollProps) => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!observerRef.current) return;

    const observerCallback: IntersectionObserverCallback = (entries) => {
      const lastEntry = entries[0];
      if (lastEntry.isIntersecting && !isLoading) {
        fetchNextPage();
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 1.0,
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, isLoading]);

  return {
    observerRef,
  };
};
