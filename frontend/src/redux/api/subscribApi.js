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
    }),
});

export const { useSubscribeMutation } = subscribeApiSlice;
