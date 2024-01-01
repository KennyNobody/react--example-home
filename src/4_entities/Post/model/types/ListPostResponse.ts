import { ArticlePostType } from '4_entities/Post';
import { ListResponse } from '5_shared/types/ServerResponse';

export interface ListPostResponse extends ListResponse {
    list: ArticlePostType[],
}
