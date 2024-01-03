import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '0_app/prodivers/StoreProvider';
import { RequestParams } from '5_shared/types/requestData';
import { setQueryParams } from '5_shared/libs/helpers/editQueryParams';
import {
    getListPostPage,
    getListPostPerPage,
    getListSelectedCategories,
} from '../../selectors/listPost';
import { ArticlePostType } from '../../types/ArticlePost';

interface FetchListPostProps {
    replaceData?: boolean;
    setHasMore?: boolean;
}

export const fetchListPost = createAsyncThunk<
string,
FetchListPostProps,
ThunkConfig<string>
>(
    'post/fetchListPost',
    async (props, thunkApi) => {
        const {
            extra,
            getState,
            rejectWithValue,
        } = thunkApi;

        const page: number | undefined = getListPostPage(getState());
        const perPage: number | undefined = getListPostPerPage(getState());
        const activeCategories: number[] | undefined = getListSelectedCategories(getState());

        try {
            const params: RequestParams = {};

            if (page) {
                params.page = page;
            }

            if (perPage) {
                params.perPage = perPage;
            }

            if (activeCategories?.length) {
                params.categories = activeCategories.join(',');
            }

            const response = await extra.api.get<ArticlePostType[]>(
                '/posts/',
                {
                    params,
                },
            );

            if (!response.data) {
                throw new Error();
            }

            console.log(response);

            setQueryParams(params);

            return JSON.stringify(response);
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
