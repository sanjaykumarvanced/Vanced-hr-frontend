import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTotalCounts: builder.query<[], void>({
      query: () => {
        return {
          url: `/api/dash-board/all-count`,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export type TotalCountsApiArg = { id?: number };

export const {
  useGetTotalCountsQuery,
} = injectedRtkApi;
