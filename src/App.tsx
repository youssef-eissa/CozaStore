import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Search from "./components/Search";
import Products from "./components/Products";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";



function App() {


  return (
      <div >
      <NavBar  />
        <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/shop" element={<Products/> } />
        <Route path="/about" element={<About/> } />
        <Route path="/contact" element={<Contact/> } />
      </Routes>
      <Search />
      <Footer/>
    </div>
  );
}

export default App;
