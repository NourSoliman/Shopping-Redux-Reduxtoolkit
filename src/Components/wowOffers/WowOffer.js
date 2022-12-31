import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { increment , decrement , remove_items  } from '../usingRedux/actions'
// import { ShoppingUseContext } from '../Contexts/Contexts'
import { HiPlusSm, HiMinusSm } from 'react-icons/hi'
import currencyFormat from '../Info/currency'
import { addToCart , decrement , RemoveItem} from '../usingRedux/cartSlice'
const WowOffer = ({ id, name, price, alt, img }) => {
    // const cartItems = useSelector(state => state.cartItems)
    const cartItems = useSelector(state => state.cart)
    console.log(cartItems);
    const dispatch = useDispatch()
    const quantityinCart = (id) => {
    return cartItems.find(item => item.id === id)?.quantity || 0
    }
    let quantity = quantityinCart(id)
    console.log(quantity);
    return (
        <div className='games-container'>
            <div className='images'>
                <img src={img} alt={alt} className="image" />
            </div>
            <div className='games-info'>
                <span className='name' >{name}</span>
                <span className='price'>{currencyFormat(price)}</span>
            </div>
            <div className='buttons'>
                {quantity === 0 ? <button className='add' onClick={() => dispatch(addToCart({ id, quantity}))} >Add To Cart </button> :
                    <div>
                        <div>
                            <button className='increament' onClick={() => dispatch(addToCart({ id, quantity}))}> <HiPlusSm /></button>
                            <span>{quantity} In Cart</span>
                            <button className='decrement' onClick={()=> dispatch(decrement({id , quantity}))}><HiMinusSm /></button>
                        </div>
                        <button className='remove' onClick={()=> dispatch(RemoveItem({ id, quantity}))}>Remove</button>
                    </div>}
            </div>
        </div>
    )
}
export default WowOffer


// onClick={()=>dispatch(addToCart({id , name , price , img}))}
// onClick={()=>dispatch(decrement({id , name , price , img}))}
// onClick={()=>dispatch(RemoveItem({id , name , price , img}))}