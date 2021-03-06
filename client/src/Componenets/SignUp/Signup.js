import React,{ useState} from 'react'
import {useDispatch} from 'react-redux'
import { loginUser, registerUser } from '../../JS/actions/user'
import {useHistory} from 'react-router-dom'
import "./Signup.css"
import GoogleLogin from 'react-google-login';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const Signup = () => {
  const [name,setName]= useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const [role,setRole]= useState("")
  const [dateofbirth]=useState("")
  const [adresse,setAdresse]=useState("")
  const [gender,setGender]=useState("")
  

  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );
  const dispatch = useDispatch()
const history=useHistory()

const handleLogin = async (googleData) => {
  const res = await fetch('/api/google-login', {
    method: 'POST',
    body: JSON.stringify({
      token: googleData.tokenId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  setLoginData(data);
  localStorage.setItem('loginData', JSON.stringify(data));
  history.push('/custdashboard')
};

const handleFailure=(result)=>{
  alert(result)
}

const handleLogout = () => {
  localStorage.removeItem('loginData');
  setLoginData(null);
};
    return (
      <div className="logincontent">
       <div class="text-box">
                  <h1 class="heading-primary">
                   <span class="heading-primary-main">Welcome to </span>
                    <span class="heading-primary-sub">Just Good Of Waste!</span>
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
              <label htmlFor="user" className="label" style={{color:"black"}}>Name</label>
              <input id="user" type="text" className="input"
               onChange={(e)=>setName(e.target.value)} />
            </div>
            
            <div className="group">
              <label htmlFor="pass" className="label"style={{color:"black"}}>Email Address</label>
              <input id="pass" type="text" className="input" 
              onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label"style={{color:"black"}}>Password</label>
              <input id="pass" type="password" className="input" data-type="password"
               onChange={(e)=>setPassword(e.target.value)}  />
            </div>
            <div className="group">
              <label htmlFor="adress" className="label"style={{color:"black"}}>Adresse</label>
              <input id="adresse" type="text" className="input"
               onChange={(e)=>setAdresse(e.target.value)}  />
            </div>
            <div className="rolechoosen">
                      <select
                             onChange={(e)=>setGender(e.target.value)} >                 
                       <option value="">gender</option>

                        <option value="male">male</option>
                        <option value="female">female</option>
                      </select>
                    </div>
              {/*    <div className="col-md-12 m-3">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="availibiltyDate" name="availibiltyDate"
        value={dateofbirth.toString()} type="date" 
        onChange={date => handleChange({ target: { value: date, name: 'dateofbirth' } })}
        renderInput={(params) => (
          <TextField {...params} helperText={params?.inputProps?.placeholder} />
        )}
      />
    </LocalizationProvider>
        </div>*/}
            <div className="rolechoos">
                      <select
                             onChange={(e)=>setRole(e.target.value)} >                 
                       <option value="">Role</option>

                        <option value="customer">Customer</option>
                        <option value="storekeeper">storekeeper</option>
                      </select>
                    </div>


            <div className="group">
              <input type="submit" className="button" defaultValue="Sign In"
               onClick={()=>dispatch(registerUser({name,email,password,role,adresse,gender,dateofbirth},history))}/>
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
              <label htmlFor="user" className="label" style={{color:"black"}}>Email</label>
              <input id="user" type="text" className="input"
               onChange={(e)=>setEmail(e.target.value)} />
            </div>
                    
            <div className="group">
              <label htmlFor="pass" className="label" style={{color:"black"}}>Password</label>
              <input id="pass" type="password" className="input" 
              onChange={(e)=>setPassword(e.target.value)} />
            </div>
            
            <div className="group">
              <input type="submit" className="button" defaultValue="Sign Up" 
              
              onClick={()=>dispatch(loginUser({email,password},history))} 
 
              />
              
            <div className="hr" />
            <div className="foot-lnk">

                 
            </div>

 <div>
          {loginData ? (
            <div>
{ /*             <h3>You logged in as {loginData.email}</h3>
*/}              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <GoogleLogin
              clientId="108453978309-svtn1f48j3g7i01lmrlnc84pcb6qqvrg.apps.googleusercontent.com"
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            ></GoogleLogin>
          )}
        </div>

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
