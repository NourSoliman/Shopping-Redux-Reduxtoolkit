import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import AlbionGold from './AlbionGold'
import AlbionOffers from './AlbionOffers'
const Albion = ()=> {
    return (
        <div className='main'>
            <Sidebar />
            <div className='container'>
                {AlbionGold.map((item) => (
                    <div>
                        <AlbionOffers {...item}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Albion