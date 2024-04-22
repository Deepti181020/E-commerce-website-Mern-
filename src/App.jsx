import ReactDOM from "react-dom/client"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/home";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import ShopCategory from "./Pages/ShopCategory";

function App() {
  return (
    <> 
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/men" element={<ShopCategory category="men"/>}/>
          <Route path="/women" element={<ShopCategory category="women"/>}/>
          <Route path="/kids" element={<ShopCategory category="kids"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
          <Route path="/cart" elemnt={<Cart/>}/>

        </Routes>
        
      </BrowserRouter>  

          
    </>
  )
}

export default App
