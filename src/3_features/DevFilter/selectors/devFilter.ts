import { StateSchema } from '0_app/prodivers/StoreProvider';

export const getDevFilterCategory = (state: StateSchema) => state?.devFilter?.category;
