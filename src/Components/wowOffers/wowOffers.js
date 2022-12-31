import React from 'react'
import WowGold from './wow'
import WowOffer from './WowOffer'
import Sidebar from '../Sidebar/Sidebar'
// import { ShoppingUseContext } from '../Contexts/Contexts'
const wowOffers = () => {
    // const {search} = ShoppingUseContext()
    return (
        <div className='main'>
            <Sidebar />
            <div className='container'>
            {WowGold.map((item) => (
                <div key={item.id}>
                    <WowOffer {...item}/>
                </div>
            ))}
            </div>
        </div>
    )
}

export default wowOffers