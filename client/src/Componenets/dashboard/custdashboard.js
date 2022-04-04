import React from 'react';
import {  useSelector } from 'react-redux';


const CustDashboard = () => {

	
    const user=useSelector(state=>state.userReducer.user)

	return (
		<div>

	      <h1>Welcome {user&&user.name}</h1>
		
		</div>
	);
};

export default CustDashboard 
