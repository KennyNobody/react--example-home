import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rtkApi = createApi({
    reducerPath: 'appApi',
    tagTypes: ['post', 'category'],
    baseQuery: fetchBaseQuery(
        {
            baseUrl: __API__,
        },
    ),
    endpoints: () => ({}),
});

export {
    rtkApi,
};
