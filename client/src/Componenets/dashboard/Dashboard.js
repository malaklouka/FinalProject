import { Switch } from '@mui/material'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory} from 'react-router-dom'
import { logout } from '../../JS/actions/user'
import { Route} from 'react-router'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Add from '../bags/addbag'
import BagList from '../bags/Bag'
import Navbar from '../Navbar'
 import './dash.css'
const Dashboard = () => {
    const dispatch = useDispatch()
    const history=useHistory()
    const user=useSelector(state=>state.userReducer.user)
  
    return (
        <div className="dashb">
          {/* <BagList/>
          <h1>Welcome {user&&user.name}</h1>
          <h1 className="title1"> SAVE MEALS
</h1> <h1 className="title1"> HELP THE PLANET..
          </h1>*/} 



      <div className="sp-container">
	<div className="sp-content">
		<div className="sp-globe"></div>
		<h2 className="frame-1">Welcome {user && user.name}</h2>
		<h2 className="frame-2">THANK YOU FOR CHOOSING US </h2>
		<h2 className="frame-3">TO SAVE MEALS and HELP THE PLANET..</h2>
		<h2 className="frame-5">
			<span>SEARCH,</span>
			<span>RESERVE,</span>
			<span>PAY A LITTLE PRICE.</span>
		</h2>
		<a class="sp-circle-link" href="https://nick.mkrtchyan.ga">malak</a>
	</div>
</div>
       {/**<button onClick={()=>{dispatch(logout())
                 history.push('/')}} >logout</button> */}     
        </div>
    )
}

export default Dashboard
