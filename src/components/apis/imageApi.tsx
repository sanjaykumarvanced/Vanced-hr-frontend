import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getImageDetails: builder.query<any, ImageApiArg>({
      query: (queryArg) => {
        return {
          url: `/api/image/get/${queryArg.id}`,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export type ImageApiArg = { id?: number };

export const { useGetImageDetailsQuery } = injectedRtkApi;
