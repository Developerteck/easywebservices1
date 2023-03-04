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
         <NavText>Dashboard</NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
              <i className="fa fa-fw fa-message" style={{fontSize:"1.5em"}}></i>
         </NavIcon>
         <NavText>message</NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
              <i className="fa fa-fw fa-user" style={{fontSize:"1.5em"}}></i>
         </NavIcon>
         <NavText>User Management</NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
              <i className="fa fa-fw fa-bolt" style={{fontSize:"1.5em"}}></i>
         </NavIcon>
         <NavText>Credits</NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
              <i className="fa fa-fw fa-bell" style={{fontSize:"1.5em"}}></i>
         </NavIcon>
         <NavText>Notification</NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
              <i className="fa fa-fw fa-book" style={{fontSize:"1.5em"}}></i>
         </NavIcon>
         <NavText>Phonebook</NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
              <i className="fa fa-fw fa-gear" style={{fontSize:"1.5em"}}></i>
         </NavIcon>
         <NavText>DLT</NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
              <i className="fa fa-fw fa-tape" style={{fontSize:"1.5em"}}></i>
         </NavIcon>
         <NavText>API</NavText>
        </NavItem>
      </SideNav.Nav>
     </SideNav>
    </div>
  )
}

export default Sidebar