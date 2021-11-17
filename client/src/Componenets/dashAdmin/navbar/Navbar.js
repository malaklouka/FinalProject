import "./Navbar.css";
import avatar from "../assets/avatar.svg";
import { NavBtn, NavBtnLink, NavLink } from "../../NavbarElements";
import { MdOutlineExitToApp } from "react-icons/md";

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { logout } from "../../../JS/actions/user";
const Navbar = ({ sidebarOpen, openSidebar }) => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  const history = useHistory();
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
       
        <a className="active_link" href="#">
          Admin
        </a>
      </div>
      <div className="navbar">
      <div className="navbar__left">
       
      <NavLink to='/admin' activeStyle>
               List Of Customers
             </NavLink> 
     </div>
       
     <NavLink to='/storek' activeStyle>
             List Of storek

             </NavLink>
             <NavLink to='/profile' activeStyle>
            Profile
            </NavLink>
            <h1 className ="usename">{user?.name}</h1>

            <NavBtn 
             onClick={()=>{dispatch(logout())
                history.push('/')}}>
            <NavBtnLink to='/'> Logout <MdOutlineExitToApp/></NavBtnLink>
          </NavBtn>  
     </div>
      <div className="navbar__right">
        <a href="#!">
          <img width="30" src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;