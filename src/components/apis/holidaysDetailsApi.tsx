import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getHolidaysDetails: builder.query<HolidaysData[], HolidaysApiArg>({
      query: (queryArg) => {
        return {
          url: `api/holiday/get-list/${queryArg.year}`,
        };
      },
    }),
    getHolidaysDetailsById: builder.query<HolidaysData[], HolidaysApiArg>({
      query: (queryArg) => {
        return {
          url: `/holidays/${queryArg.id}`,
        };
      },
    }),
    deleteHolidaysDetails: builder.mutation<any, HolidaysApiArg>({
      query: (queryArg) => {
        return {
          url: `/holidays/${queryArg.id}`,
          method: "DELETE",
        };
      },
    }),
    createHolidaysDetails: builder.mutation<any, Partial<HolidaysData>>({
      query: (item) => {
        return {
          url: `/holidays`,
          method: "POST",
          body: item,
        };
      },
    }),
    updateHolidaysDetails: builder.mutation<any, Partial<HolidaysData>>({
      query: (queryArg) => {
        return {
          url: `/holidays/${queryArg.id}`,
          method: "PUT",
          body: queryArg,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };
export interface HolidaysData {
  id?: any;
  holidayName?: string;
  startDate?: string;
  endDate?: string;
  year?: number;
  description?: any;
}
export type HolidaysApiArg = { year?: number; id?: number };

export const {
  useGetHolidaysDetailsQuery,
  useGetHolidaysDetailsByIdQuery,
  useCreateHolidaysDetailsMutation,
  useUpdateHolidaysDetailsMutation,
  useDeleteHolidaysDetailsMutation,
} = injectedRtkApi;
