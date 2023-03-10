import React from 'react'
import SideNav, { NavItem, NavIcon, NavText} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='sid1'>
    <SideNav className="sid2"
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
              <i className="fa fa-fw fa-user" style={{fontSize:"1.5em"}}></i>
         </NavIcon>
         <NavText>Campaign</NavText>
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
              <i className="fa fa-fw fa-arrow-trend-up" style={{fontSize:"1.5em"}}></i>
         </NavIcon>
         <NavText>Reports</NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
              <i className="fa fa-fw fa-arrow-trend-up" style={{fontSize:"1.5em"}}></i>
         </NavIcon>
         <NavText>Telco Reports</NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
              <i className="fa fa-fw fa-gear" style={{fontSize:"1.5em"}}></i>
         </NavIcon>
         <NavText>DLT</NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
              <i className="fa fa-fw fa-cloud-arrow-up" style={{fontSize:"1.5em"}}></i>
         </NavIcon>
         <NavText>API</NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
              <i className="fa fa-fw fa-book" style={{fontSize:"1.5em"}}></i>
         </NavIcon>
         <NavText>Phonebook</NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
              <i className="fa fa-fw fa-bell" style={{fontSize:"1.5em"}}></i>
         </NavIcon>
         <NavText>Notification</NavText>
        </NavItem>
        
      </SideNav.Nav>
     </SideNav>
    </div>
  )
}

export default Sidebar;