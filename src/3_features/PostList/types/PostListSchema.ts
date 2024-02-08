import { EntityState } from '@reduxjs/toolkit';
import { ArticlePostType } from '4_entities/Post';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export interface PostListSchema extends EntityState<ArticlePostType> {
    isLoading?: boolean;
    errors?: FetchBaseQueryError;
    page: number;
    perPage?: number;
    count: number;
}
