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
export const { useGetAnnouncementListQuery, useCreateAnnouncementMutation } =
  injectedRtkApi;
