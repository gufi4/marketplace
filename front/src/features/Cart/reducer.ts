import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { CartState, ItemCartWithoutQuantity } from "./types"


const initialState: CartState = {
    items: []
}



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ItemCartWithoutQuantity>) => {
            const itemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const itemIndex = state.items.findIndex(
                (item) => item.id === action.payload
            );

            if (state.items[itemIndex].quantity === 1) {
                state.items.splice(itemIndex, 1);
            } else {
                state.items[itemIndex].quantity--;
            }
        },
        clearCart: (state, action: PayloadAction<number>) => {
            const itemIndex = state.items.findIndex(
                (item) => item.id === action.payload
            );

            if (state.items[itemIndex].quantity > 0) {
                state.items.splice(itemIndex, 1);
            } 
        }
    }
})
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer