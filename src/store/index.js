import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "../services/shopServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import favoritesReducer from '../features/FavoritesSlice'
import { authApi } from "../services/authService";
import authReducer from '../features/UserSlice'


const store = configureStore({
    
    reducer: {
        favorites: favoritesReducer,
        auth: authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(shopApi.middleware)
            .concat(authApi.middleware)
})

setupListeners(store.dispatch)

export default store