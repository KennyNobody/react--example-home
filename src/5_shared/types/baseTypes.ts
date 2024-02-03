export enum ContentKeyType {
    DEV = 'dev',
    PHOTO = 'PHOTO',
    NOTEBOOK = 'notebook',
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
