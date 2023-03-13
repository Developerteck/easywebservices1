import React from "react"
// import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import RightNav from './Components/RightNav/RightNav';
import Sidebar from './Components/Sidebar/Sidebar';
 import Wel from './Components/Wel'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import LeftNavbar from "./component/leftnavbar";
//import ABC from "./routes";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Sidebar />
    <Header />
    <RightNav />
    <Routes>
    
    <Route path="/" element={<Home/>}>Home</Route>
    {/*<Route path="/rightnav" element={<RightNav/>}>RightNav</Route>*/}
    <Route path="/wel" element={<Wel/>}>Wel</Route>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
