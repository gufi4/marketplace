import { AnyAction, createAction, createReducer, PayloadAction } from "@reduxjs/toolkit"

import { I_Cart } from "./types"


const initialState: I_Cart = []


const addToCartAction = createAction<number>('CART/add')
const removeFromCartAction = createAction<number>('CART/remove')

const cartReducer = createReducer(initialState, (builder) => {
    // Add to favorites
    builder.addCase(
        addToCartAction,
        (state: any, action: PayloadAction<number>) => [...state, action.payload]
    )

    // Remove from favorites
    builder.addCase(
        removeFromCartAction,
        (state: any, action: PayloadAction<number>) => {
            return state.filter((cartId: number) => cartId !== action.payload)
        }
    )
})


export const addToCart = (cartId: number): AnyAction => (
    addToCartAction(cartId)
)

export const removeFromCart = (cartId: number): AnyAction => (
    removeFromCartAction(cartId)
)

export default cartReducer