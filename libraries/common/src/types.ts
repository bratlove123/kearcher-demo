export type AppsyncEvent<T> = {
  field: string;
  arguments: T;
  user: {
    id: string;
  };
}

export type Metadata = Record<string, unknown> & {
  totalCount: number;
};

export type AppsyncResponse<T> = {
  data: T;
  metadata?: Metadata
}
