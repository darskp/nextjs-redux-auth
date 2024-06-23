import {
    createSlice
} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "CartItems",
    initialState: {
        cartItems: []
    },
    reducers: {
        addCart: (state, action) => {
            state.cartItems.push(action.payload)
        },
        removeCart: (state, action) => {
            const copyCartData = [...state.cartItems];
            const updatedCartItems = copyCartData?.filter(item => item?.id !== action.payload);
            state.cartItems = updatedCartItems;
        }
    }
})

export const {
    addCart,
    removeCart
} = cartSlice.actions;
export default cartSlice.reducer;