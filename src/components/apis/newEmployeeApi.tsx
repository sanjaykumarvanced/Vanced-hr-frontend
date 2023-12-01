import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getNewEmployeeList: builder.query<any, Partial<DateRangeApiArg>>({
      query: (queryArg) => {
        return {
          url: `api/dash-board/new-employee`,
          params: queryArg,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };
export type DateRangeApiArg = {
  startDate?: any;
  endDate?: any;
};

export const { useGetNewEmployeeListQuery } = injectedRtkApi;
