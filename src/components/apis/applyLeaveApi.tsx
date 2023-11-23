import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createApplyLeaveRequest: builder.mutation<any, Partial<ApplyLeaveApiArg>>({
      query: (item) => {
        return {
          url: `/api/leave/apply-leave`,
          method: "POST",
          body: item,
        };
      },
    }),
    updateLeaveRequest: builder.mutation<any, Partial<ApplyLeaveApiArg>>({
      query: (queryArg) => {
        return {
          url: `/api/leave/update-leave`,
          method: "PUT",
          body: queryArg,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export type ApplyLeaveApiArg = {
  id?: any;
  employee?: string;
  leaveType?: any;
  notify?: any;
  startDate?: any;
  endDate?: any;
  noOfDays?: any;
  reason?: any;
};

export const {
  useCreateApplyLeaveRequestMutation,
  useUpdateLeaveRequestMutation,
} = injectedRtkApi;
