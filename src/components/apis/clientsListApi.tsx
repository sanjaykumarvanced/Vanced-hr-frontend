import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getClientsList: builder.query<[], void>({
      query: () => {
        return {
          url: `/api/client/detail`,
        };
      },
    }),
    getClientsListById: builder.query<[], ClientsListApiArg>({
      query: (queryArg) => {
        return {
          url: `/api/client/detail/${queryArg.id}`,
        };
      },
    }),
    deleteClientsList: builder.mutation<any, ClientsListApiArg>({
      query: (queryArg) => {
        return {
          url: `/api/client/detail/${queryArg.id}`,
          method: "DELETE",
        };
      },
    }),
    updateClientsList: builder.mutation<any, Partial<ClientsListApiArg>>({
      query: (queryArg) => {
        return {
          url: `/api/client/detail/${queryArg.id}`,
          method: "PUT",
          body: queryArg,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export type ClientsListApiArg = { id?: number };

export const {
  useGetClientsListQuery,
  useGetClientsListByIdQuery,
  useUpdateClientsListMutation,
  useDeleteClientsListMutation,
} = injectedRtkApi;
