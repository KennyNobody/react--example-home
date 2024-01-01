import { StringContent } from '5_shared/types/StringContent';

interface ArticlePostType {
    id: number;
    date: string;
    slug: string;
    type: string;
    link: string;
    title: StringContent,
    content: StringContent
}

export {
    ArticlePostType,
};
