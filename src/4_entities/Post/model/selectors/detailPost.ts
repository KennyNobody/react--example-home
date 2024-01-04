import { StateSchema } from '0_app/prodivers/StoreProvider';

export const getDetailPostData = (state: StateSchema) => state?.post?.detail?.data;
export const getDetailPostIsLoading = (state: StateSchema) => state?.post?.detail?.isLoading;
export const getDetailPostErrors = (state: StateSchema) => state?.post?.detail?.errors;
