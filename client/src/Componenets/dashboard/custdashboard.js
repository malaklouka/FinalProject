import React, { useEffect } from 'react';
// components

// redux
import { useDispatch, useSelector } from 'react-redux';


const CustDashboard = () => {

	
    const user=useSelector(state=>state.userReducer.user)

	return (
		<section>
	      <h1>Welcome {user&&user.name}</h1>
		
		</section>
	);
};

export default CustDashboard 
