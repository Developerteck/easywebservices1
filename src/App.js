import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Wel from './Components/Wel';

function App() {
  return (
    <div className="App">
    <h1>Welcome to Noida</h1>
     <Sidebar />
      <Wel />
    </div>
  );
}

export default App;
