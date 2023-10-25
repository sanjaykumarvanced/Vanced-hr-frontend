import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLeaveBalanceById: builder.query<[], LeaveBalanceApiArg>({
      query: (queryArg) => {
        return {
          url: `/api/leave/balance/${queryArg.id}`,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };
export type LeaveBalanceApiArg = { id: any };

export const { useGetLeaveBalanceByIdQuery } = injectedRtkApi;
