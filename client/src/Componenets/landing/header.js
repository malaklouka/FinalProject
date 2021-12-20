import React,{ useState} from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from '../NavbarElements';
import { logout } from "../../JS/actions/user";

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './header.css'
import DarkModeToggle from '../Darkmode'
import { MdOutlineExitToApp } from "react-icons/md";


<DarkModeToggle />


const Header = () => {
  const isAuth = localStorage.getItem('token');
  const user = useSelector(state => state.userReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  return (
    <>
        
      
      <Nav>
        <NavLink to='/'>
        <div className="cont">
      <img src="/img/llog.png" alt="logo" height="120" width="150"/>
      </div>
     { /*  <div className="content">
      <img src="log.png" alt=""/>
		<h2>APP</h2>
		<h2 className="my">MY</h2>
	</div> 
  */}
        </NavLink>
       
        <>
    {/*   <DarkModeToggle
    /> */} </>
        <NavMenu>
          {!isAuth ? (
            <NavLink to='/' activeStyle>
              Home
            </NavLink>
          ) : isAuth && user && user.role==="customer"? (
           <> <NavLink to='/custbag' activeStyle>
              Bags
            </NavLink>
            <NavLink to='/mydemande' activeStyle>
              My Demand
            </NavLink>
            <NavLink to='/profile' activeStyle>
            Profile
            </NavLink>
            <NavLink to="/contact">
                 Contact
                    </NavLink>
            <NavBtn 
             onClick={()=>{dispatch(logout())
                history.push('/')}}>
            <NavBtnLink to='/'> Logout <MdOutlineExitToApp/></NavBtnLink>
          </NavBtn>
            
            </>
          ) : isAuth && user && user.role==="storekeeper"?(
           <> <NavLink to='/bags' activeStyle>
              Bags
            </NavLink>
            <NavLink to='/thedemande' activeStyle>
              Customers Demand
            </NavLink>
            <NavLink to='/profile' activeStyle>
            Profile
            </NavLink>
            <NavBtn> <NavBtnLink to="/contact">
                 Contact
                    </NavBtnLink></NavBtn>
            <NavBtn 
             onClick={()=>{dispatch(logout())
                history.push('/')}}>
            <NavBtnLink to='/'> Logout <MdOutlineExitToApp/></NavBtnLink>
          </NavBtn>
            </>
          ): null}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {!isAuth ? (
          <><NavBtn>
            <NavBtnLink to='/signup'>Sign In</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
          </NavBtn>
          <NavBtn> <NavBtnLink to="/contact">
                 Contact
                    </NavBtnLink></NavBtn>
                    <NavBtn> <NavBtnLink to="/services">
                 Our Services
                    </NavBtnLink></NavBtn>
          </>
        ) : (
         null
        )}
      
      </Nav>
    
    </>
  );
};

export default Header;