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
  }),
});
export { injectedRtkApi as enhancedApi };

export type ApplyLeaveApiArg = {
  employee?: string;
  leaveType?: any;
  notify?: any;
  startDate?: any;
  endDate?: any;
  noOfDays?: any;
  reason?: any;
};

export const { useCreateApplyLeaveRequestMutation } = injectedRtkApi;
