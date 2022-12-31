import {INCREMENT , DECREMENT , REMOVE_ITEMS, CART_QUANTITY} from './Types'
export const increment = (id ) => {
    const action = {
        type: INCREMENT,
        id,
        payload: {id}
    }
    return action
}
export const decrement = (id) => {
    const action = {
        type : DECREMENT,
        id,
    }
    return action
}
export const remove_items  = (id) => {
    const action = {
        type: REMOVE_ITEMS,
        id,
    }
    return action
}
export const cart_quantity = (id) => {
    const action = {
        type:CART_QUANTITY,
        id,
    }
    return action
}
