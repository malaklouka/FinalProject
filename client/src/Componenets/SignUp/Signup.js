import React,{useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { loginUser, registerUser } from '../../JS/actions/user'
import {useHistory} from 'react-router-dom'
import {Switch,Route,Link} from "react-router-dom"
import "./Signup.css"
import Signin from '../Signin/Signin'
import { isAuthenticated } from '../../helpers/isauth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const Signup = () => {
  const [name,setName]= useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const [role,setRole]= useState("")
  const dispatch = useDispatch()
const history=useHistory()

    return (
      <div className="logincontent">
       <div class="text-box">
                  <h1 class="heading-primary">
                   <span class="heading-primary-main">Welcome to </span>
                    <span class="heading-primary-sub">our site web !</span>
                   </h1>
             </div>


      <div className="login-wrap">
      <div className="login-html">
        <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
        <label htmlFor="tab-1" className="tab">Register</label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" />
        <label htmlFor="tab-2" className="tab">Login</label>

        <div className="login-form">
          <div className="sign-in-htm">
            <div className="group">
              <label htmlFor="user" className="label">Name</label>
              <input id="user" type="text" className="input"
               onChange={(e)=>setName(e.target.value)} />
            </div>
            
            <div className="group">
              <label htmlFor="pass" className="label">Email Address</label>
              <input id="pass" type="text" className="input" 
              onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">Password</label>
              <input id="pass" type="password" className="input" data-type="password"
               onChange={(e)=>setPassword(e.target.value)}  />
            </div>
           
            <div className="rolechoosen">
                      <label >Choose Your Role</label>
                      <select
                             onChange={(e)=>setRole(e.target.value)} >                 
                       <option value="">Role</option>

                        <option value="customer">Customer</option>
                        <option value="storekeeper">storekeeper</option>
                      </select>
                    </div>


            <div className="group">
              <input type="submit" className="button" defaultValue="Sign In"
               onClick={()=>dispatch(registerUser({name,email,password,role},history))}/>
            </div>
            <div className="hr" />
            <div className="foot-lnk">
          {/**  <Switch>
             <Route exact path="/" >
               <button>
                 <Link to="/login">Login</Link>
             </button>
             </Route>
              <Route path="/login" component={Signin} />   
          </Switch> */ }       
            </div>
          </div>

{/**lofin form */}
          

           <div className="sign-up-htm">
            <div className="group">
              <label htmlFor="user" className="label">Email</label>
              <input id="user" type="text" className="input"
               onChange={(e)=>setEmail(e.target.value)} />
            </div>
                    
            <div className="group">
              <label htmlFor="pass" className="label">Password</label>
              <input id="pass" type="password" className="input" 
              onChange={(e)=>setPassword(e.target.value)} />
            </div>
            
            <div className="group">
              <input type="submit" className="button" defaultValue="Sign Up" 
              
              onClick={()=>dispatch(loginUser({email,password},history))} 
 
              />


            </div>

            <div className="hr" />
            <div className="foot-lnk">

                 
            </div>

            </div>
            </div>
            
            
      </div>
    </div>
    
</div>

);
  }
  
        
export default Signup
