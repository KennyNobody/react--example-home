import { PageResponseType } from '5_shared/types/baseTypes';
import { SectionType } from '2_widgets/Section';

export interface FrontPageType extends Omit<PageResponseType, 'data'> {
    data: PageResponseType['data'] & { section: SectionType[] };
}
