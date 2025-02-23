import { apiSlice } from "./apiSlice";
import { SUBSCRIBE_URL } from "../consttants";

const subscribeApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        subscribe: builder.mutation({
            query: (data) => ({
                url: `${SUBSCRIBE_URL}/`,
                method: 'POST',
                body: data
            }),
            transformResponse: (response) => response
        }),
        getAllSubscriptions: builder.query({
            query: (QueryParams) => ({
                url: `${SUBSCRIBE_URL}/getAllSubscribers/?${QueryParams}`,
                method: 'GET',
            }),
            providesTags: ['Subscriptions'],
            // transformResponse: (response) => response.results,
        })
    }),
});

export const { useSubscribeMutation, useGetAllSubscriptionsQuery } = subscribeApiSlice;
