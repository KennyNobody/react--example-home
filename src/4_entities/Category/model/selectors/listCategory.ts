import { StateSchema } from '0_app/prodivers/StoreProvider';

export const getListCategoryIsLoading = (state: StateSchema) => state?.category?.list?.isLoading;
export const getListCategoryErrors = (state: StateSchema) => state?.category?.list?.errors;
export const getListCategoryInited = (state: StateSchema) => state?.category?.list?._inited;
