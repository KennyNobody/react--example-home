import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rtkApi = createApi({
    reducerPath: 'appApi',
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
