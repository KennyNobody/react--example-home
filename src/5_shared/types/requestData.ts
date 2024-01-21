export enum ServerListResponse {
    TOTAL_PAGES = 'x-wp-totalpages',
    TOTAL_ITEMS = 'x-wp-total',
}

export interface RequestParams {
    [key: string]: string | number | boolean;
}
