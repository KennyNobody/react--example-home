import { ContentKeyType } from '5_shared/types/baseTypes';

export interface SectionType {
    id: number,
    title: string | null,
    years: string | null,
    linkPath: string | null,
    linkTitle: string | null,
    captionLinkPath: string | null,
    captionLinkTitle: string | null,
    contentKey: ContentKeyType | null,
}
