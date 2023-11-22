import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAnnouncementList: builder.query<[], void>({
      query: () => {
        return {
          url: `/api/announcement/list`,
        };
      },
    }),
    deleteAnnouncement: builder.mutation<any, AnnouncementApiArg>({
      query: (queryArg) => {
        return {
          url: `/api/announcement/delete/${queryArg.id}`,
          method: "DELETE",
        };
      },
    }),
    createAnnouncement: builder.mutation<any, Partial<[]>>({
      query: (item) => {
        return {
          url: `/api/announcement/add`,
          method: "POST",
          body: item,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export type AnnouncementApiArg = {
  id?: number;
};
export const {
  useGetAnnouncementListQuery,
  useDeleteAnnouncementMutation,
  useCreateAnnouncementMutation,
} = injectedRtkApi;
