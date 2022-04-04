/* eslint-disable jsx-a11y/anchor-is-valid */
import "./sidebar.css";
import { NavBtn, NavBtnLink, NavLink } from "../../NavbarElements";
import { MdOutlineExitToApp } from "react-icons/md";

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { logout } from "../../../JS/actions/user";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    const dispatch = useDispatch();
    const history = useHistory();
  return (
    <div class="s-layout__sidebar">
  <a class="s-sidebar__trigger">
     <i class="fa fa-bars"></i>
  </a>

  <nav class="s-sidebar__nav">
     <ul>
        

     <li>
         
         <i className="fa fa-user-secret" aria-hidden="true"></i>
        <NavLink to='/dashadmin' activeStyle>
             Dashboard
           </NavLink>              
      </li>
        <li>
         
           <i className="fa fa-user-secret" aria-hidden="true"></i>
          <NavLink to='/admin' activeStyle>
               List Of Customers
             </NavLink>              
        </li>
        <li>
  
           <i className="fa fa-building-o"></i>
          <NavLink to='/storek' activeStyle>
             List Of storek

             </NavLink>            
        </li>
        <li>
        
           <i className="fa fa-wrench"></i>
          <NavLink to='/profile' activeStyle>
            Profile
            </NavLink>        
        </li>
        <li>
          
           <i className="fa fa-power-off"></i>
          <NavBtn 
             onClick={()=>{dispatch(logout())
                history.push('/')}}>
            <NavBtnLink to='/'> Logout <MdOutlineExitToApp/></NavBtnLink>
          </NavBtn>          
        </li>
     </ul>
  </nav>
</div>
    
  );
};

export default Sidebar;