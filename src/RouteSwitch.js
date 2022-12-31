// import Home from "./Components/Home/Home"
import {  Routes , Route , HashRouter} from 'react-router-dom'
import Games from "./Components/Games/Games"
import Nav from "./Components/NavBar/Nav"
import ContextProvider from "./Components/Contexts/Contexts"
import Mmorpg from "./Components/mmorpg/Mmorpg"
import RPG from "./Components/RPG/RPG"
import Fps from "./Components/FPS/Fps"
import WowOffers from "./Components/wowOffers/wowOffers"
import Albion from "./Components/albionOffers/Albion"
import CheckOut from "./Components/ShoppingCart/CheckOut"
// import ShoppingCart from './Components/ShoppingCart/ShoppingCart'
import Never from "./Components/NeverWinter/Never"
// import Valorant from "./Components/Valorant/Valorant"
import NewHome from './Components/NewHome/NewHome'
// import { connect } from 'react-redux'
// import {increament , game_quantity} from './Components/usingRedux/actions'
const RouteSwitch = (props) => {
    console.log(props);
    return (
        // <BrowserRouter>
        // <ContextProvider>
        <HashRouter>
        <Nav />
        <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<NewHome />} />
            <Route path="/Games" element={<Games />} />
            <Route path="/Mmorpg" element={<Mmorpg />}/>
            <Route path="/RPG" element={<RPG />} />
            <Route path="/FPS" element={<Fps />} />
            <Route path="/WOW" element={<WowOffers />} />
            <Route path="/Albion" element={<Albion />} />
            <Route path="/Never" element={<Never />}/>
            <Route path="/Cart" element={<CheckOut />} />
        </Routes>
        </HashRouter>
        // </ContextProvider>
        // </BrowserRouter> 
    )
}
export default RouteSwitch
{/* <ContextProvider> */}