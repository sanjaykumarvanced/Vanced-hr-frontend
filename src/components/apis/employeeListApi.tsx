import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query<[], void>({
      query: () => {
        return {
          url: `/api/employee/list`,
        };
      },
    }),
    getEmployeeListById: builder.query<[], EmployeeListApiArg>({
      query: (queryArg) => {
        return {
          url: `/api/employee/list/${queryArg.id}`,
        };
      },
    }),
    deleteEmployeeList: builder.mutation<any, EmployeeListApiArg>({
      query: (queryArg) => {
        return {
          url: `/api/employee/list/${queryArg.id}`,
          method: "DELETE",
        };
      },
    }),
    updateEmployeeList: builder.mutation<any, Partial<EmployeeListApiArg>>({
      query: (queryArg) => {
        return {
          url: `/api/employee/list/${queryArg.id}`,
          method: "PUT",
          body: queryArg,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export type EmployeeListApiArg = { id?: number };

export const {
  useGetEmployeeListQuery,
  useGetEmployeeListByIdQuery,
  useUpdateEmployeeListMutation,
  useDeleteEmployeeListMutation,
} = injectedRtkApi;
