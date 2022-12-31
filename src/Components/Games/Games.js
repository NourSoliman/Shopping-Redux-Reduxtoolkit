import Sidebar from "../Sidebar/Sidebar"
import Info from "../Info/Info"
import './Games.css'
import games from '../../data/Games'
// import games from '../../data/games.json'
import { ShoppingUseContext } from "../Contexts/Contexts"
const Games = () => {
    const { search } = ShoppingUseContext()
    return (
        <div className='main'>
            {<Sidebar  search={search}/>}
            <div className="container">
                {games.map((item , i) => (
                    <div key={i}>
                        <Info {...item} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Games




{/* <div className='main'>
{<Sidebar  search={search}/>}
<div className="container">
    {games.filter((val) => {
        if (search === " ") {
            return val
        } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
            return val
        } else {
            return false;
        }
    }).map((item , i) => (
        <div key={i}>
            <Info {...item} />
        </div>
    ))}
</div>
</div> */}