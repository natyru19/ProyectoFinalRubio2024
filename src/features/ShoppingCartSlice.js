import { createSlice } from "@reduxjs/toolkit";

export const ShoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    value: {
      user: "userIdLogged",
      updatedAt: new Date().toLocaleString(),
      total: null,
      items: [],
    },
  },
  reducers: {
    addShoppingCartItem: (state, { payload }) => {
      const productRepeated = state.value.items.find(
        (item) => item.id === payload.id
      );
      if (productRepeated) {
        const itemsUpdated = state.value.items.map((item) => {
          if (item.id === payload.id) {
            item.quantity += payload.quantity;
            return item;
          }
          return item;
        });
        const total = itemsUpdated.reduce(
          (acc, currentItem) =>
            (acc += currentItem.price * currentItem.quantity),
          0
        );
        state.value = {
          ...state.value,
          items: itemsUpdated,
          total,
          updatedAt: new Date().toLocaleString(),
        };
      } else {
        state.value.items.push(payload);
        const total = state.value.items.reduce(
          (acc, currentItem) =>
            (acc += currentItem.price * currentItem.quantity),
          0
        );
        state.value = {
          ...state.value,
          total,
          updatedAt: new Date().toLocaleString(),
        };
      }
    },
  },
});

export const { addShoppingCartItem } = ShoppingCartSlice.actions;
export default ShoppingCartSlice.reducer;