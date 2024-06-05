import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {seriesApi} from './RTKApis/seriesApi'

export const store = configureStore({
    reducer: {
        [seriesApi.reducerPath]: seriesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(seriesApi.middleware)
})

setupListeners(store.dispatch)