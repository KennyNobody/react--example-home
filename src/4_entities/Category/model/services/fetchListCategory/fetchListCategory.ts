import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '0_app/prodivers/StoreProvider';
import { ArticleCategoryType } from '../../types/ArticleCategory';

export const fetchListCategory = createAsyncThunk<
string,
void,
ThunkConfig<string>
>(
    'category/fetchListCategory',
    async (_, thunkApi) => {
        const {
            extra,
            rejectWithValue,
        } = thunkApi;

        try {
            const response = await extra.api.get<ArticleCategoryType[]>(
                '/categories/',
            );

            if (!response.data) {
                throw new Error();
            }

            console.log(response);

            return JSON.stringify(response);
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
