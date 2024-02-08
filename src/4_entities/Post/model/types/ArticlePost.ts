import { Media } from '4_entities/Media';
import { ArticleTagType } from '4_entities/Tag';
import { ArticleCategoryType } from '4_entities/Category';

interface ArticlePostType {
    id: number;
    title: string;
    slug: string;
    content?: any;
    locale: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    preview?: {
        data: Media;
    };
    gallery?: {
        data: Media[];
    };
    // tags?: {
    //     data: ArticleTagType[];
    // };
    // localizations?: {
    //     data: ArticlePostType[];
    // };
    // category?: {
    //     data: ArticleCategoryType;
    // };
}

export type {
    ArticlePostType,
};
