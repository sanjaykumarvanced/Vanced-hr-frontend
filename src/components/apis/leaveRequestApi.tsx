import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLeaveRequestById: builder.query<[], LeaveRequestApiArg>({
      query: (queryArg) => {
        return {
          url: `/api/leave/all-leaves/${queryArg.id}`,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };
export type LeaveRequestApiArg = { id: any };

export const { useGetLeaveRequestByIdQuery } = injectedRtkApi;
