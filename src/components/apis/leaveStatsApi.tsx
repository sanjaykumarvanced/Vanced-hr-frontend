import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLeaveStatsById: builder.query<[], LeaveStatsApiArg>({
      query: (queryArg) => {
        return {
          url: `/api/leave/stats/${queryArg.id}`,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };
export type LeaveStatsApiArg = { id: any };

export const { useGetLeaveStatsByIdQuery } = injectedRtkApi;
