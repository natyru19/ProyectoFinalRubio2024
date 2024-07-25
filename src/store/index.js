import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "../services/shopServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import shoppingCartReducer from '../features/ShoppingCartSlice'
import { authApi } from "../services/authService";
import authReducer from '../features/UserSlice'
import favoritesReducer from '../features/FavoritesSlice'


const store = configureStore({
    
    reducer: {
        shoppingCart: shoppingCartReducer,
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