import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rtkApi = createApi({
    reducerPath: 'appApi',
    tagTypes: ['post', 'category', 'dev', 'postSingle'],
    baseQuery: fetchBaseQuery(
        {
            baseUrl: `${__BASE_URL__}/api/`,
        },
    ),
    endpoints: () => ({}),
});

export {
    rtkApi,
};
