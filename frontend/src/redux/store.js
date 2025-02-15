import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./features/auth/authSlice";
import productReducer from "./features/product/productSlice";
import cartReducer from "./features/cart/cartSlice";
import orderReducer from "./features/orders/orderSlice";
import subscribeReducer from "./features/auth/subscrib";

const reducer = {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
    orders: orderReducer,
    subscrib: subscribeReducer,
}

export const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: import.meta.env.VITE_NODE_ENV === 'development'
});


setupListeners(store.dispatch);

export default store;
