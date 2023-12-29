import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '0_app/prodivers/StoreProvider';
import { ArticlePostType } from '../../types/ArticlePost';

export const fetchPostBySlug = createAsyncThunk<ArticlePostType[], string, ThunkConfig<string>>(
    'posts/fetchPostBySlug',
    async (slug, thunkApi) => {
        const {
            extra,
            rejectWithValue,
        } = thunkApi;

        try {
            const response = await extra.api.get<ArticlePostType[]>(
                `/posts?slug=${slug}/`,
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
