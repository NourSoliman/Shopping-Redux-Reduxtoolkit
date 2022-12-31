import React from 'react'
// import { ShoppingUseContext } from '../Contexts/Contexts'
import currencyFormat from '../Info/currency'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, decrement, RemoveItem } from '../usingRedux/cartSlice'
import { HiPlusSm, HiMinusSm } from 'react-icons/hi'
const NeverWinter = ({ id, img, alt, price, name }) => {
    const cartItems = useSelector(state => state.cart)
    console.log(cartItems);
    const dispatch = useDispatch()
    const quantityinCart = (id) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
    let quantity = quantityinCart(id)
    // const {  gamesQuantity, increament, decrement, removeItems } = ShoppingUseContext()
    return (
        <div className='games-container'>
            <div className='images'>
                <img src={img} alt={alt} className="image" />
            </div>
            <div className='games-info'>
                <span className='name'>{name}</span>
                <span className='price'>{currencyFormat(price)}</span>
            </div>
            <div className='buttons'>
                {quantity === 0 ? <button className='add' onClick={() => dispatch(addToCart({ id, quantity }))}>Add To Cart </button> :
                    <div>
                        <div>
                            <button className='increament' onClick={() => dispatch(addToCart({ id, quantity }))} > <HiPlusSm /></button>
                            <span>{quantity} In Cart</span>
                            <button className='decrement' onClick={() => dispatch(decrement({ id, quantity }))}><HiMinusSm /></button>
                        </div>
                        <button className='remove' onClick={() => dispatch(RemoveItem({ id, quantity }))}>Remove</button>
                    </div>}
            </div>
        </div>
    )
}

export default NeverWinter