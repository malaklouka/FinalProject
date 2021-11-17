import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import { logout } from "../JS/actions/user";

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const Navbar = () => {
  const isAuth = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const user = useSelector(state => state.userReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();
 
  return (
    <>
      <Nav>
        <NavLink to='/'>
        </NavLink>
        <Bars />
        <NavMenu>
          {!isAuth ? (
            <NavLink to='/' activeStyle>
              Home
            </NavLink>
          ) : role === 'customer' ? (
            <NavLink to='/enspage' activeStyle>
              Profile
            </NavLink>
          ) : (
            <NavLink to='/stpage' activeStyle>
              Profile
            </NavLink>
          )}
          <NavLink to='/dictionary' activeStyle>
            Dictionary
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          {!isAuth ? (
            <NavLink to='/register' activeStyle>
              Sign Up
            </NavLink>
          ) : null}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {!isAuth ? (
          <NavBtn>
            <NavBtnLink to='/login'>Sign In</NavBtnLink>
          </NavBtn>
        ) : (
          <h1>{user?.name}</h1>
        )}
        {isAuth ? (
          
          <NavBtn
             onClick={()=>{dispatch(logout())
                history.push('/')}}>
            <NavBtnLink to='/'>logout</NavBtnLink>
          </NavBtn>
        ) : null}
      </Nav>
    </>
  );
};

export default Navbar;