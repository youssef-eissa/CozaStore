import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Search from "./components/Search";
import Products from "./components/Products";



function App() {


  return (
      <div >
      <NavBar  />
        <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/shop" element={<Products/> } />
      </Routes>
      <Search />
    </div>
  );
}

export default App;
