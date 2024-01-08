import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPerformanceList: builder.query<[], void>({
      query: () => {
        return {
          url: `/api/performance/all-performance`,
        };
      },
    }),
    createNewPerformance: builder.mutation<any, Partial<PerformanceListApiArg>>(
      {
        query: (item) => {
          return {
            url: `/api/performance/add-performance`,
            method: "POST",
            body: item,
          };
        },
      }
    ),
    deletePerformanceDetail: builder.mutation<any, PerformanceListApiArg>({
      query: (queryArg) => {
        return {
          url: `/api/performance/delete/${queryArg.employee}`,
          method: "DELETE",
        };
      },
    }),
    updatePerformanceDetail: builder.mutation<
      any,
      Partial<PerformanceListApiArg>
    >({
      query: (queryArg) => {
        return {
          url: `/api/performance/update-performance`,
          method: "PUT",
          body: queryArg,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export type PerformanceListApiArg = {
  id?: any;
  addedBy?: any;
  projectName?: any;
  comments?: any;
  date?: any;
  employee?: any;
};

export const {
  useGetPerformanceListQuery,
  useCreateNewPerformanceMutation,
  useUpdatePerformanceDetailMutation,
  useDeletePerformanceDetailMutation,
} = injectedRtkApi;
