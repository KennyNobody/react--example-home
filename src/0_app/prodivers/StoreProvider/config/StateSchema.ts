import {
    Action,
    Reducer,
    EnhancedStore,
    ReducersMapObject, CombinedState,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { DetailPostSchema } from '4_entities/Posts';

export interface StateSchema {
    detailPost?: DetailPostSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: Action) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
