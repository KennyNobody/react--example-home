import { StateSchema } from '0_app/prodivers/StoreProvider';

export const getDetailPostData = (state: StateSchema) => state?.detailPost?.data;
export const getDetailPostIsLoading = (state: StateSchema) => state?.detailPost?.isLoading;
export const getDetailPostErrors = (state: StateSchema) => state?.detailPost?.errors;
