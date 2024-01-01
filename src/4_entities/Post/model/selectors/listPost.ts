import { StateSchema } from '0_app/prodivers/StoreProvider';

export const getListPostIsLoading = (state: StateSchema) => state?.listPost?.isLoading;
export const getListPostErrors = (state: StateSchema) => state?.listPost?.errors;
