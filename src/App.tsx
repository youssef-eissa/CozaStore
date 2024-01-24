import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { useEffect, useRef, useState } from "react";


function App() {
  const [open, setOpen] = useState(false);
  const DivRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if(open){
      DivRef.current?.classList.add('open')
    }else{
      DivRef.current?.classList.remove('open')
    }
  },[open])

  return (
    <div className="mainDiv" ref={DivRef}>
      <NavBar open={open} setOpen={setOpen} />
        <Routes>
        <Route path="/" element={<Home/> } />
      </Routes>
    </div>
  );
}

export default App;
