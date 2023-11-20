import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getImage: builder.query<any, ImageApiArg>({
      query: (queryArg) => {
        return {
          url: `/api/image/get/${queryArg.id}`,
        };
      },
    }),
    uploadImage: builder.mutation<any, ImageApiArg>({
      query: (queryArg) => {
        return {
          url: `api/image/upload/${queryArg.id}`,
          method: "POST",
          body: queryArg?.image,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export type ImageApiArg = {
  id?: number;
  image?: FormData;
};

export const { useGetImageQuery, useUploadImageMutation } =
  injectedRtkApi;
