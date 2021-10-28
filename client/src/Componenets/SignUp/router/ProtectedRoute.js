import React from 'react'
import {Route,Redirect  } from 'react-router-dom'

const ProtectedRoute = ({component:Component,...rest}) => {
    const isAuth=localStorage.getItem("token")
    //test token 
    if(isAuth){
      return  <Route component={Component} {...rest}/>
    }
    return <Redirect path='/'/>
       
    
}

export default ProtectedRoute
