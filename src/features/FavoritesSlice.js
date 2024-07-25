import { createSlice } from "@reduxjs/toolkit";

export const FavoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    value: {
      user: "userIdLogged",
      items: [],
    },
  },
  reducers: {
    addFavoriteItem: (state, { payload }) => {
      const productRepeated = state.value.items.find(
        (item) => item.id === payload.id
      );

      if (!productRepeated) {
        console.log('agrego a favoritos no està repetido')
        state.value.items.push(payload);
        state.value = {
          ...state.value
        };
        }else{
          console.log('No lo agrego porque ya est+a')
        }
      }
    }
    
  
});

export const { addFavoriteItem } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;