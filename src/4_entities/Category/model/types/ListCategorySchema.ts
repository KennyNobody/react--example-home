import { EntityState } from '@reduxjs/toolkit';
import { ArticleCategoryType } from './ArticleCategory';

export interface ListCategorySchema extends EntityState<ArticleCategoryType> {
    isLoading?: boolean;
    errors?: string;
    _inited: boolean;
}
