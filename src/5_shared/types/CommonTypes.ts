import { SectionType } from '2_widgets/SectionsStack';

export enum ContentKeyType {
    DEV = 'dev',
    PHOTO = 'photo',
    POST = 'post',
}

export interface BaseResponseType {
    data: any;
    meta: any;
}

export interface PageResponseType {
    data: {
        title: string,
        slug: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        locale: string,
        localizations: {
            data: [any],
        }
    };
    meta: any;
}

export interface PageIndexResponseType extends Omit<PageResponseType, 'data'> {
    data: PageResponseType['data'] & { section: SectionType[] };
}
