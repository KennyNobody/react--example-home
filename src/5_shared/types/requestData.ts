enum PaginationParams {
    PAGE = 'pagination[page]',
    SIZE = 'pagination[pageSize]',
    CAT = 'filters[category][id][$eq]',
}

type RequestParamsKey = string | PaginationParams;

interface RequestParams {
    [key: RequestParamsKey]: string | number | boolean;
}

export {
    PaginationParams,
    type RequestParams,
};
