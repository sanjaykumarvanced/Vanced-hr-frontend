import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRequestedLeavesById: builder.query<[], RequestedLeavesApiArg>({
      query: (queryArg) => {
        return {
          url: `/api/leave/requested/${queryArg.employerId}`,
        };
      },
    }),

    updateRequestedLeaves: builder.mutation<
      any,
      Partial<RequestedLeavesApiArg>
    >({
      query: (queryArg) => {
        return {
          url: `/api/leave/status-update`,
          method: "PUT",
          body: queryArg,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };
export type RequestedLeavesApiArg = {
  id?: any;
  employerId?: any;
  status?: any;
};

export const {
  useGetRequestedLeavesByIdQuery,
  useUpdateRequestedLeavesMutation,
} = injectedRtkApi;
