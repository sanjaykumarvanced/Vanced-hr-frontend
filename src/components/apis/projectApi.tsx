import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProjectsList: builder.query<[], void>({
      query: () => {
        return {
          url: `/api/project/all-project`,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };


export const { useGetProjectsListQuery } = injectedRtkApi;
