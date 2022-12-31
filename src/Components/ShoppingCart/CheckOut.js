import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { ShoppingUseContext } from '../Contexts/Contexts'
import ShoppingItems from './ShoppingItems'
import MoneyMethod from './MoneyMethod'
import currencyFormat from '../Info/currency'
import AllOffers from './AllOffers'
import './CheckOut.css'
import { useSelector } from 'react-redux'
const CheckOut = () => {
    // const { cartItems } = ShoppingUseContext()
    const cartItems = useSelector(state => state.cart)
    return (
        <div className='main'>
            <Sidebar />
            <div className='items-container'>
            <div>
                <h5>Shopping Cart</h5>
            </div>
            <div className='cart-items'>
                {cartItems.map((item)=> (
                    <ShoppingItems {...item} key={item.id}/>
                ))}
                {currencyFormat(cartItems.reduce((total , cart)=>{
                    const items = AllOffers.find((i) => i.id === cart.id);
                    return  total + (items?.price || 0) * cart.quantity
                },0))}
            </div>
            <div>
                <MoneyMethod />
            </div>
            </div>
            </div>
    )
}

export default CheckOut