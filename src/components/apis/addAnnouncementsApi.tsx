import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
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
  useCreateAnnouncementMutation,
} = injectedRtkApi;
