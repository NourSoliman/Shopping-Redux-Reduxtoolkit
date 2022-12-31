import { createContext, useContext, useState } from "react";
import CheckOut from "../ShoppingCart/CheckOut";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
const shoppingCartContext  = createContext({})
const ContextProvider = ({ children }) => {
    const [show, setShow] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [search, setSearch] = useState("")
    const searching = (e) => {
        setSearch(e.target.value)
    }
    const openCart = () => {
        setShow(true)
    }
    const closeCart = () => {
        setShow(false)
    }
    const gamesQuantity = (id) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    }
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
    console.log(cartItems);
    const increament = (id) => {
        setCartItems((currentGames) => {
            if (currentGames.find((item) => item.id === id) == null) {
                return [...currentGames, { id, quantity: 1 }]
            } else {
                return currentGames.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    const decrement = (id) => {
        setCartItems((currentGames) => {
            if (currentGames.find(item => item.id === id) == null) {
                return currentGames.filter(item => item.id !== id)
            } else {
                return currentGames.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })

    }
    const removeItems = (id) => {
        setCartItems((currentGames) => currentGames.filter((item) => item.id !== id))
    }
    return (
        <shoppingCartContext.Provider value={{ cartItems, gamesQuantity, increament, decrement, removeItems, openCart, closeCart, cartQuantity, searching, search }}>
            {children}
        </shoppingCartContext.Provider>
    )
}

export default ContextProvider

export const ShoppingUseContext = () => {
    return useContext(shoppingCartContext)
}