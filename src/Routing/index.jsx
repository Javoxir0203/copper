import { Route, Routes } from "react-router"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Catalog from "../Pages/Catalog"
import News from "../Pages/News"
import Cardproduct from "../Pages/Cardproduct"
import Basket from "../Pages/Basket"
import Order from "../Pages/Order"
import Ordernext from "../Pages/Ordernext"
import Orderregst from "../Pages/Orderregs"
import Orderlogin from "../Pages/Orderlogin"


const Routing=()=>{
    return(
        <>
        
        <Routes>
<Route  path="/" element={<Home/>}  />
<Route  path="/about" element={<About/>}  />
<Route  path="/catalog" element={<Catalog/>}  />
<Route  path="/news" element={<News/>}  />
<Route  path="/cardproduct" element={<Cardproduct/>}  />
<Route  path="/basket" element={<Basket/>}  />
<Route  path="/order" element={<Order/>}  />
<Route  path="/ordernext" element={<Ordernext/>}  />
<Route  path="/orderregs" element={<Orderregst/>}  />
<Route  path="/orderlogin" element={<Orderlogin/>}  />


        </Routes>
        
        
        </>
    )
}

export default Routing