import { ArticleTagType } from '4_entities/Tag';
import { ArticleCategoryType } from '4_entities/Category';
import { DetailMainType } from '5_shared/types/DetailMainContent';

export interface ArticleDevType {
    id: number;
    slug: string;
    title: string;
    locale: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    main: DetailMainType;
    tags?: {
        data: ArticleTagType[];
    };
    category?: {
        data: ArticleCategoryType;
    };
}
