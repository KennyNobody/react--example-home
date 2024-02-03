export interface ListPostSchema {
    page: number;
    perPage?: number;
    hasMore: boolean;
    categories: number[];
}
