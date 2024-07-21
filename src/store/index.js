import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "../services/shopServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import favoritesReducer from '../features/FavoritesSlice'


const store = configureStore({
    
    reducer: {
        favorites: favoritesReducer,
        [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware),
})

setupListeners(store.dispatch)

export default store