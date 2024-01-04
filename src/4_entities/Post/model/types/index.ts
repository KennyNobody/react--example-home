import { DetailPostSchema } from './DetailPostSchema';
import { ListPostSchema } from './ListPostSchema';

export interface PostSchema {
    detail: DetailPostSchema;
    list: ListPostSchema;
}
