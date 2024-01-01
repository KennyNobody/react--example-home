import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '0_app/prodivers/StoreProvider';
import { ArticlePostType } from '../../types/ArticlePost';
import { getListPostPerPage } from '../../selectors/listPost';

interface FetchListPostProps {
    page?: number;
}

export const fetchListPost = createAsyncThunk<
ArticlePostType[],
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

        const {
            page = 1,
        } = props;

        const perPage: number | undefined = getListPostPerPage(getState());

        try {
            const params = {
                page,
                perPage,
            };

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
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
