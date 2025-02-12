import { AnyAction, createAction, createReducer, PayloadAction } from "@reduxjs/toolkit"

import { I_Cart } from "./types"


const initialState: I_Cart =[]


//Сделать редьюсео как у app, и добавить в него локал стор

const addToCartAction = createAction<number>('CART/add')
const removeFromCartAction = createAction<number>('CART/remove')

const cartReducer = createReducer(initialState, (builder) => {
    // Add to cart
    builder.addCase(
        addToCartAction,
        (state: any, action: PayloadAction<number>) => [...state, action.payload]
    )

    // Remove from cart
    builder.addCase(
        removeFromCartAction,
        (state: any, action: PayloadAction<number>) => {
            return state.filter((cartId: number) => cartId !== action.payload)
        }
    )
})


export const addToCart = (cartId: number): AnyAction => (
    localStorage.setItem('cart', cartId.toString()), 
    addToCartAction(cartId)
)

export const removeFromCart = (cartId: number): AnyAction => (
    removeFromCartAction(cartId)
)

export default cartReducer