import { createSlice } from "@reduxjs/toolkit";

export const FavoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    value: {
      user: null,
      items: [],
    },
  },
  reducers: {

    addFavoriteItem: (state, { payload }) => {
      const productRepeated = state.value.items.find(
        (item) => item.id === payload.id
      )

      if (!productRepeated) {        
        state.value.items.push(payload);
        state.value = {
          ...state.value
        };
        }else{
          
        }
      }
    }
    
  
});

export const { addFavoriteItem } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;