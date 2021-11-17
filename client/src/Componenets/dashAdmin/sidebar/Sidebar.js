import "./sidebar.css";
import logo from "../assets/logo.png";
import { NavBtn, NavBtnLink, NavLink } from "../../NavbarElements";
import { MdOutlineExitToApp } from "react-icons/md";

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { logout } from "../../../JS/actions/user";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    const dispatch = useDispatch();
    const history = useHistory();
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Malak NK</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
        <h2>MNG</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <NavLink to='/admin' activeStyle>
               List Of Customers
             </NavLink>   
                  </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <NavLink to='/storek' activeStyle>
             List Of storek

             </NavLink>        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <NavLink to='/profile' activeStyle>
            Profile
            </NavLink>
                    </div>
        
      
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <NavBtn 
             onClick={()=>{dispatch(logout())
                history.push('/')}}>
            <NavBtnLink to='/'> Logout <MdOutlineExitToApp/></NavBtnLink>
          </NavBtn>      
            </div>
      </div>
    </div>
  );
};

export default Sidebar;