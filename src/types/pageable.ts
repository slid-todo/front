export interface BasePageableTypes<T> {
  content: T;
  empty: boolean;
  first: boolean;
  last: boolean;
  nextCursor: number;
  number: number;
  numberOfElement: number;
  pageable: {
    offset: number;
    pageNumber: number;
    paged: boolean;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    unpaged: boolean;
  };
  size: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
}
