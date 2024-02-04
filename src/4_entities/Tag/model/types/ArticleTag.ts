import { ArticlePostType } from '4_entities/Post';

interface ArticleTagType {
    id: number;
    slug: string;
    title: string;
    locale: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    localizations?: {
        data: ArticleTagType[];
    };
    posts?: {
        data: ArticlePostType[];
    };
}

export type {
    ArticleTagType,
};
