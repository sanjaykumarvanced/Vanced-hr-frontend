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
  personalInformation?: {
    telephones?: any;
    nationality?: any;
    maritalStatus?: any;
  };
  emergencyContact?: {
    primary?: {
      name?: any;
      relationship?: any;
      phone?: any;
    };
    secondary?: {
      name?: any;
      relationship?: any;
      phone?: any;
    };
  };
  bankInformation?: {
    bankName?: any;
    bankAccountNumber?: any;
    ifscCode?: any;
    panNo?: any;
  };
  education?: [
    {
      institution?: any;
      degree?: any;
      fieldOfStudy?: any;
      startYear?: any;
      endYear?: any;
    }
  ];
  experience?: [
    {
      jobTitle?: any;
      companyName?: any;
      startDate?: any;
      endDate?: any;
    }
  ];
};

export const {
  useGetEmployeeListQuery,
  useCreateNewEmployeeMutation,
  useUpdateEmployeeDetailMutation,
  useDeleteEmployeeDetailMutation,
} = injectedRtkApi;
