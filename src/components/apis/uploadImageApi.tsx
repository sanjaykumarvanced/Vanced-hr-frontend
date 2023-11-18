import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    uploadImage: builder.mutation<any, UploadImageApiArg>({
      query: (queryArg) => {
        return {
          url: `api/image/upload/${queryArg.id}`,
          method: "POST",
          body: queryArg.uploadImageApi
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export type UploadImageApiArg = {
  id?: number;
  uploadImageApi?: UploadImageApi;
};
export type UploadImageApi = {
  image?: Blob;
};
export const {
  // useGetAnnouncementDetailsQuery,
  useUploadImageMutation,
} = injectedRtkApi;
