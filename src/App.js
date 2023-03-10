import React from 'react';
// import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import RightNav from './Components/RightNav/RightNav';
import Sidebar from './Components/Sidebar/Sidebar';
// import Wel from './Components/Wel';

function App() {
  return (
    <div className="App">
     <Sidebar />
     <Header />
     <RightNav />
     <Home />
    </div>
  );
}

export default App;
