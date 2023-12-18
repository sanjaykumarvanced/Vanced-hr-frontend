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
    createNewEmployee: builder.mutation<any, Partial<EmployeeListApiArg>>({
      query: (item) => {
        return {
          url: `/api/employee/add-employee`,
          method: "POST",
          body: item,
        };
      },
    }),
    updateEmployeeDetail: builder.mutation<any, Partial<EmployeeListApiArg>>({
      query: (queryArg) => {
        return {
          url: `/api/employee/update-employee`,
          method: "PUT",
          body: queryArg,
        };
      },
    }),
    deleteEmployeeDetail: builder.mutation<any, EmployeeListApiArg>({
      query: (queryArg) => {
        return {
          url: `/api/employee/delete/${queryArg.id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export type EmployeeListApiArg = {
  id?: number;
  userName?: any;
  firstName?: string;
  lastName?: string;
  role?: string;
  email?: string;
  birthday?: string;
  designation?: any;
  gender?: string;
  employeeId?: string;
  password?: any;
  dateOfJoining?: any;
  address?: any;
};

export const {
  useGetEmployeeListQuery,
  useCreateNewEmployeeMutation,
  useUpdateEmployeeDetailMutation,
  useDeleteEmployeeDetailMutation,
} = injectedRtkApi;
