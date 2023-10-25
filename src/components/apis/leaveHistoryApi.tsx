import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLeaveHistoryById: builder.query<[], LeaveHistoryApiArg>({
      query: (queryArg) => {
        return {
          url: `/api/leave/history/${queryArg.id}`,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };
export type LeaveHistoryApiArg = { id: any };

export const { useGetLeaveHistoryByIdQuery } = injectedRtkApi;
