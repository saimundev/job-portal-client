import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employmentApi = createApi({
  reducerPath: "employmentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5050/api/" }),
  endpoints: (builder) => ({
    signUpEmployment: builder.mutation<any, any>({
      query: (data) => ({
        method: "POST",
        url: "employer/signUp-employment",
        body: data,
      }),
    }),

    signInEmployment: builder.mutation<any, any>({
      query: (data) => ({
        method: "POST",
        url: "employer/signIn-employment",
        body: data,
      }),
    }),
  }),
});

export const { useSignUpEmploymentMutation, useSignInEmploymentMutation } =
  employmentApi;
