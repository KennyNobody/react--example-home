import { StateSchema } from '0_app/prodivers/StoreProvider';

export const getSortFilterCategory = (state: StateSchema) => state?.sortFilter?.category;
