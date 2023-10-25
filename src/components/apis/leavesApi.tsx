import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLeavesDetails: builder.query<[], void>({
      query: () => {
        return {
          url: `/api/leave/on-leave`,
        };
      },
    }),
    getLeavesDetailsById: builder.query<[], LeavesApiArg>({
      query: (queryArg) => {
        return {
          url: `/leaves/${queryArg.id}`,
        };
      },
    }),
    deleteLeavesDetails: builder.mutation<any, LeavesApiArg>({
      query: (queryArg) => {
        return {
          url: `/leaves/${queryArg.id}`,
          method: "DELETE",
        };
      },
    }),
    createLeavesDetails: builder.mutation<any, Partial<[]>>({
      query: (item) => {
        return {
          url: `/leaves`,
          method: "POST",
          body: item,
        };
      },
    }),
    updateLeavesDetails: builder.mutation<any, Partial<LeavesApiArg>>({
      query: (queryArg) => {
        return {
          url: `/leaves/${queryArg.id}`,
          method: "PUT",
          body: queryArg,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };
export type LeavesApiArg = { id?: number };

export const {
  useGetLeavesDetailsQuery,
  useGetLeavesDetailsByIdQuery,
  useCreateLeavesDetailsMutation,
  useUpdateLeavesDetailsMutation,
  useDeleteLeavesDetailsMutation,
} = injectedRtkApi;
