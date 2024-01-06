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
  }),
});
export { injectedRtkApi as enhancedApi };

export type PerformanceListApiArg = {
  addedBy: any;
  projectName: any;
  comments: any;
  date: any;
  employee: any;
};

export const { useGetPerformanceListQuery, useCreateNewPerformanceMutation } =
  injectedRtkApi;
