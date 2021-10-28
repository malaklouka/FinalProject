import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom'
import { isAuthenticated } from '../../helpers/isauth'
import { loginUser } from '../../JS/actions/user'
import './signin.css'
const Signin = () => {
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const dispatch = useDispatch()
const history=useHistory()
{/**useEffect(() => {
  if (isAuthenticated() && isAuthenticated().role =="storekeeper") {
      history.push('/admin/dashboard');
  } else if (isAuthenticated() && isAuthenticated().role =="customer") {
      history.push('/user/dashboard');
  }
}, [history]); */}

    return (
        <div className="form-structor1">
        <div className="signup1">
          <h2 className="form-title1" id="signup1"><span>or</span>Sign In</h2>
          <div className="form-holder1">
            <input type="email" className="input1" placeholder="Email"   
             onChange={(e)=>setEmail(e.target.value)}/>

            <input type="password" className="input1" placeholder="Password"   
             onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <button className="submit-btn1"   
           onClick={()=>dispatch(loginUser({email,password},history))}>Sign In</button>
        </div>
    
      </div>
    )
}

export default Signin
