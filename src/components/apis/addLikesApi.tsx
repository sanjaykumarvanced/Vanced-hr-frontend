import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createLike: builder.mutation<any, LikeApiArg>({
      query: (queryArg) => {
        return {
          url: `/api/comment/like-post`,
          method: "POST",
          body: queryArg,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export type LikeApiArg = {
  id?: string;
  employee?: any;
  image?: any;
};

export const { useCreateLikeMutation } = injectedRtkApi;
