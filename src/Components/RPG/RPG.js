import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import rpg from '../../data/RPG'
import RPGames from './RPGames'
// import { ShoppingUseContext } from '../Contexts/Contexts.js'
const RPG = () => {
    // const {search} = ShoppingUseContext()
    return (
        <div className='main'>
        <Sidebar />
        <div className='container'>
            {rpg.map((item) => (
            <div key={item.id}>
                <RPGames {...item}/>
            </div>
        ))}
        </div>
        </div>
    )
}

export default RPG