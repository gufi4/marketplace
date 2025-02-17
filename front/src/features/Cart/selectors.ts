import { T_RootState } from "../../store/types";


export const selectCart = (state: T_RootState) => {
    return (
        state.cart
    )
    
}
