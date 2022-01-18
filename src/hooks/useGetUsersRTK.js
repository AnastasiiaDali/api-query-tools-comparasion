import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const accessToken = "uGkb1csX1uKsS84iz4lsBSniluiVWKgwgrqgZpU4m1I";
const spaceId = "3z09v4hcrkbr";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://cdn.contentful.com/spaces/${spaceId}/entries?${accessToken}`,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: ``,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
