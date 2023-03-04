import React from 'react'
import SideNav, {Toggle, NavItem, NavIcon, NavText} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const Sidebar = () => {
  return (
    <div>
    <SideNav
       onSelect={(selected) => {
       console.log(selected);
        }}
        >
        <SideNav.Toggle />
         <SideNav.Nav defaultSelected="home">
         <NavItem>
         <NavIcon>
              <i className="fa fa-fw fa-home" style={{fontSize:"1.5em"}}></i>
         </NavIcon>
         <NavText>Home</NavText>
        </NavItem>
      </SideNav.Nav>
     </SideNav>
    </div>
  )
}

export default Sidebar