import * as React from "react";
import {useState} from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { useHistory} from 'react-router-dom';
import { logout } from "../../JS/actions/user";
import './header.css'
import Search from '../search'
import Darkmode from "../Darkmode"
export default function Header() {
    const dispatch = useDispatch()
    const history=useHistory()
    const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user=useSelector((state)=>state.userReducer.user)
    //if cust ==> bags+orders else store==> bagstomanage+custorders


    
  return (
<div>
<head>
  <link rel="stylesheet" href="https://cdn.adoff.net/cdn-v-1-0/main.css"/>
</head>
<body>
<header>
    <nav className="header-nav01">
    
    <div className="content">
		<h2>APP</h2>
		<h2 className="my">MY</h2>
	</div>          

        { user && user.role==="customer"  ?(  <ul>
          <Search/>
                  <li>   <Button color="inherit">
              {" "}
              <Link to="/home">Home</Link>{" "}
            </Button>    </li>
            <li>   <Button color="inherit">
        {" "}
        <Link to="/custbag">Bags </Link>{" "}
      </Button>    </li>
   <li>   <Button color="inherit">
        {" "}
        <Link to="/myorder">My orders</Link>{" "}
      </Button>    </li>

      <li>   <Button color="inherit" onClick={()=>{dispatch(logout())
                 history.push('/')}} >
        {" "}
        <Link to="/">Logout </Link>{" "}
      </Button>    </li>


            </ul>
            
            ):user && user.role === "storekeeper" ?( <ul>
                 
              <li>   <Button color="inherit">
                    {" "}
                    <Link to="/home">Home</Link>{" "}
                  </Button>    </li>
                  <li>   <Button color="inherit">
              {" "}
              <Link to="/bags">Bags </Link>{" "}
            </Button>    </li>
         <li>   <Button color="inherit">
              {" "}
              <Link to="/myorder">Customers demands</Link>{" "}
            </Button>    </li>
      
            <li>   <Button color="inherit" onClick={()=>{dispatch(logout())
                       history.push('/')}} >
              {" "}
              <Link to="/">Logout </Link>{" "}
            </Button>    </li>
      
      
                  </ul>):(  <ul>
        <li>   <Button color="inherit">
              {" "}
              <Link to="/home">Home</Link>{" "}
            </Button>    </li>
            <li>   <Button color="inherit">
              {" "}
              <Link to="/signup">Log In </Link>{" "}
            </Button>    </li>
         <li>   <Button color="inherit">
              {" "}
              <Link to="/signup">Register</Link>{" "}
            </Button>    </li>

            
                </ul>)}
         
    </nav>
</header>

</body>
</div>

);
}






   {/* <Box sx={{ flexGrow: 1 }} style={{color:"red"}}>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img className="logo" src="" alt="logo" />
            </Link>
          </Typography>
          <div className="nav">
    <Route render={({ history }) => <SearchBox history={history} />} />

            <Button color="inherit">
              {" "}
              <Link to="/signup">Register</Link>{" "}
            </Button>
           
          </div>
        </Toolbar>
      </AppBar>
</Box>*/}
