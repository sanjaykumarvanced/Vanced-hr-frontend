import { fetchbase } from '../../utils/api.util';
import { createApi } from '@reduxjs/toolkit/query/react';
export const emptySplitApi = createApi({
  baseQuery: fetchbase,
  endpoints: () => ({}),
});
