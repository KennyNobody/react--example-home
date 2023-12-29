import { AxiosInstance } from 'axios';
import { DetailPostSchema } from '4_entities/Posts';

export interface StateSchema {
    detailPost?: DetailPostSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
