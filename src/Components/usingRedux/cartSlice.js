import {createSlice} from '@reduxjs/toolkit'
export const cartSlice = createSlice({
    name : `cart`,
    initialState:{
        cart : []
    },
    reducers: {
        addToCart : (state , action) => {
            const ItemInCart = state.cart.find((item ) => item.id === action.payload.id)
            if(ItemInCart){
                ItemInCart.quantity += 1
            } else {
                state.cart.push({...action.payload , quantity:1})
            }
        },
        decrement : (state , action) => {
            const items = state.cart.find(item => item.id === action.payload.id) 
            if(items.quantity === 1) {
                const newItems = state.cart.filter(item => item.id !== action.payload.id)
                state.cart = newItems
            } else if(items.quantity > 1 ) {
                items.quantity -=1
            }
        }, 
        RemoveItem: (state , action ) => {
            const items = state.cart.filter(item => item.id !== action.payload.id) 
            state.cart = items
        }
    }
})
export const  cartReducer = cartSlice.reducer
export const {
    addToCart,
    decrement,
    RemoveItem
} = cartSlice.actions
