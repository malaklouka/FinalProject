import React from 'react'
import { useSelector} from 'react-redux'

 import './dash.css'
const Dashboard = () => {
  
    const user=useSelector(state=>state.userReducer.user)
  
    return (
        <div className="dashb">
        

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
