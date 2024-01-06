import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllLeaveRequests: builder.query<[], void>({
      query: () => {
        return {
          url: `/api/leave/all-requested-leaves`,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export const { useGetAllLeaveRequestsQuery } = injectedRtkApi;
