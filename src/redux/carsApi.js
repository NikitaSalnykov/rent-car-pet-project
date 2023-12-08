import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/cars";
const BASE_URL = "https://64db8bde593f57e435b11e05.mockapi.io";

export const carsApi = createApi({
  reducerPath: "cars",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Cars"],

  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ["Cars"],
    }),
  }),
});

export const {
  useGetCarsQuery,
} = carsApi;
