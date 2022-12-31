import { INCREMENT, DECREMENT ,REMOVE_ITEMS , CART_QUANTITY } from '../usingRedux/Types'
const initialState = {cart : []}
const incrementReducer = (state = initialState, action) => {
    console.log(state , action);
    if(action.type === INCREMENT) {
        const itemsInArray = state.cart.find(item => item.id === action.payload.id) 
        if(itemsInArray) {
        return  {...state, cart:{quantity :itemsInArray.quantity += 1}}
        } else {
            return {...state, cart:{id:action.id , quantity:1}}
        }


    } else if (action.type === DECREMENT) {
        const items = state.cart.find(item => item.id === action.payload.id) 
        if(items.quantity === 1) {
            const newItems = state.cart.filter(item => item.id === action.id)
            return {...state , cart:{newItems}}
        } else if (items.quantity > 1) {
            return {...state , cart:{quantity:items.quantity -= 1}}
        }


    } else if (action.type === REMOVE_ITEMS) {
        const filterItem = state.cart.filter(item => item.id !== action.id)
        return {...state , cart:{filterItem}}
    } else {
        return state
    }
}

export const cartReducer = incrementReducer
// const items = state.cart.find(item => item.id === action.payload.id) 
// if(items) {
//     return {...state , cart:{quantity:items.quantity -= 1}}
// }