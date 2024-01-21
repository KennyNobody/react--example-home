import { RequestParams } from '5_shared/types/requestData';

interface ReducerSimpleAction {
    key: string;
    value: string | number;
}

interface RtkQueryParams {
    queryParams: RequestParams,
    replaceData?: boolean;
}

export {
    type RtkQueryParams,
    type ReducerSimpleAction,
};
