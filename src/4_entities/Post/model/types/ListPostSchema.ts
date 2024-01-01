import { EntityState } from '@reduxjs/toolkit';
import { ArticlePostType } from '4_entities/Post';

export interface ListPostSchema extends EntityState<ArticlePostType> {
    isLoading?: boolean;
    errors?: string;
}
