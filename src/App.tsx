import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Search from "./components/Search";
import Products from "./components/Products";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Checkout from "./components/Checkout";




function App() {

  return (
      <div >
      <NavBar />
        <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/shop" element={<Products/> } />
        <Route path="/about" element={<About/> } />
        <Route path="/contact" element={<Contact/> } />
        <Route path="/login" element={<Login/> } />
        <Route path="/checkout" element={<Checkout/> } />
      </Routes>
      <Search />
      <Footer/>
    </div>
  );
}

export default App;
