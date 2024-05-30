import {
    FetchArgs,
    fetchBaseQuery,
    createApi,
} from "@reduxjs/toolkit/query/react";
import { useLocalStorage } from "src/hooks";
import { logOut, setCredentials } from "./slices";
import { API } from "src/constants";
import { Path } from "src/utils";

const baseQuery = fetchBaseQuery({
    baseUrl: `${API}`,
    // credentials: "include",
    prepareHeaders: (headers) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const token = useLocalStorage<Profile>("profile").getItem()?.access;
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithReauth = async (
    args: string | FetchArgs,
    api: any,
    extraOptions: Record<string, any>
) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { getItem, removeItem } = useLocalStorage<Profile>("profile");
    const refreshToken = getItem()?.refresh
    let result = await baseQuery(args, api, extraOptions);
    if (result?.error?.status === 401) {
        removeItem();
        const refreshResult = await baseQuery(
            {
                url: Path.Auth.refreshToken,
                method: "POST",
                body: {
                    refresh: refreshToken,
                },
            },
            api,
            extraOptions
        );
        if (refreshResult?.data) {
            const profile = api.getState().auth.profile;
            api.dispatch(setCredentials({ ...refreshResult.data, profile }));
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logOut());
        }
    }
    return result;
};

export const apiSlice = createApi({
    reducerPath: "authApi",
    tagTypes: [
        "Product",
        "Feedback",
        "Delivery",
        "Orders",
        "Computer"
    ],
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
});
