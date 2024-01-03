import { StateSchema } from '0_app/prodivers/StoreProvider';

export const getListCategoryIsLoading = (state: StateSchema) => state?.listCategory?.isLoading;
export const getListCategoryErrors = (state: StateSchema) => state?.listCategory?.errors;
export const getListCategoryInited = (state: StateSchema) => state?.listCategory?._inited;
