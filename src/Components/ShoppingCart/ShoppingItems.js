import React from 'react'
import { Stack , Button } from 'react-bootstrap'
// import games from '../../data/games.json'
// import games from '../../data/Games'
// import offers from '../wowOffers/wow'
import {NavLink} from 'react-bootstrap'
import AllOffers from './AllOffers'
import currencyFormat from '../Info/currency'
import {ShoppingUseContext} from '../Contexts/Contexts'
import { useSelector, useDispatch } from 'react-redux'
import {RemoveItem} from '../usingRedux/cartSlice'
const CartItems = ({ id, quantity })=> {
    // const {removeItems} = ShoppingUseContext()
    const cartItems = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const items = AllOffers.find((item)=> item.id === id);
    if (items == null ) return null
    return (
        <div className="d-flex align-items-center p-3" >
            <img src={items.img} alt={items.alt} width="100px" height="100px"></img>
            <div className='me-5'>
                <div className='p-2'>
                    {items.name}{" "}
                    {quantity > 1 && <span className='text-muted'>x{quantity}</span>} 
                </div>
                <div className='p-1'>{currencyFormat(items.price)}</div>
                </div>
                <div>
                {currencyFormat(items.price * quantity)} {` `}
                <Button variant='outline-danger' size="sm" onClick={()=>dispatch(RemoveItem({id}))} >&times;</Button>
            </div>
        </div>
    )
}

export default CartItems;