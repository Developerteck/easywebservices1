import React from 'react'
import './header.css';

export const Header = () => {
  return (
    <div className='header'>
        <div class="header-section1">
          <h2 id="dashboard_title" class="title wfid_temp9392457602 p">Dashboard</h2>
          <p id="current_date" class="subtitle wfid_temp9392457730 p">Thursday 9 March 2023</p>
       </div>
       <div className='header-section2'>
         <h1>500</h1>
           <p className="fa-regular fa-bell  bel"></p>
           <p className="fa-regular fa-bell  bel"></p>
           <p className="fa-regular fa-bell  bel"></p>
         </div>
    </div>
  )
}

export default Header;
