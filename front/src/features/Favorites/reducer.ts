import { AnyAction, createAction, createReducer, PayloadAction } from "@reduxjs/toolkit"

import { I_Favorites } from "./types"


const initialState: I_Favorites = []


const addToFavoritesAction = createAction<number>('FAVORITES/add')
const removeFromFavoritesAction = createAction<number>('FAVORITES/remove')

const favoritesReducer = createReducer(initialState, (builder) => {
    // Add to favorites
    builder.addCase(
        addToFavoritesAction,
        (state: any, action: PayloadAction<number>) => [...state, action.payload]
    )

    // Remove from favorites
    builder.addCase(
        removeFromFavoritesAction,
        (state: any, action: PayloadAction<number>) => {
            return state.filter((favotiteId: number) => favotiteId !== action.payload)
        }
    )
})


export const addToFavorites = (favoriteId: number): AnyAction => (
    addToFavoritesAction(favoriteId)
)

export const removeFromFavorites = (favoriteId: number): AnyAction => (
    removeFromFavorites(favoriteId)
)

export default favoritesReducer