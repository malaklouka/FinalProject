import {LOAD_USER,REGISTER_USER,LOGIN_USER, FAIL_USER,CURRENT_USER,LOGOUT_USER} from '../const/user'
import {GET_ALL_CUST,GET_ALL_STORE,GET_NB_CUST,GET_NB_STORE} from '../const/adminConst'

const initialState={
    user:null,
    cust:[],
store:[],
custs:[],
stores:[],
    loadUser:false,
    errors:null,
    isAuth:false,
}
export const userReducer=(state=initialState,{type,payload})=>{
switch (type) {
    case REGISTER_USER:
        localStorage.setItem("token",payload.token)
        return {...state,loadUser:false,user:payload.user,isAuth:true}
  
    case LOGIN_USER:
            localStorage.setItem("token",payload.token)
            return {...state,loadUser:false,user:payload.user,isAuth:true}

    case LOAD_USER:
                return {...state,loadUser:true}
  
    case GET_ALL_CUST:
                    return {...state,loadUser:false,cust:payload,isAuth:true,}
 
    case GET_ALL_STORE:
                        return {...state,loadUser:false,store:payload,isAuth:true,}

    case GET_NB_CUST:
                            localStorage.setItem("token",payload.token)
                            return {...state,loadUser:false,custs:payload}
                    
    case GET_NB_STORE:
                            localStorage.setItem("token",payload.token)
                            return {...state,loadUser:false,stores:payload}
                    
    
    case CURRENT_USER:
                    return {...state,loadUser:false, isAuth:true,user:payload}
  
    
    case FAIL_USER:
          return {...state,loadUser:false,errors:payload}

    case LOGOUT_USER:
        localStorage.removeItem("token")
        return {  user:null,
            loadUser:false,
            errors:null,
            isAuth:false}       

          
                 

    default:
        return state
}
}