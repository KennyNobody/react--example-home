import { ArticlePostType } from './ArticlePost';

interface DetailPostSchema {
    isLoading: boolean;
    errors?: string;
    data?: ArticlePostType;
}

export {
    DetailPostSchema,
};
