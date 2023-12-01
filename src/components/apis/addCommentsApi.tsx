import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createComments: builder.mutation<any, CommentsApiArg>({
      query: (queryArg) => {
        return {
          url: `/api/comment/post`,
          method: "POST",
          body: queryArg,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export type CommentsApiArg = {
  id?: string;
  employee?: any;
  text?: any;
  image?: any;
};

export const { useCreateCommentsMutation } = injectedRtkApi;
