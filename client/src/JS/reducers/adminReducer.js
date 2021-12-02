import {LOADING_USER,FAILED_USER,GET_ALL_CUST,GET_ALL_STORE,GET_NB_CUST,GET_NB_STORE} from '../const/adminConst'

const initialState={
    users:null,
    loadUser:false,
    errors:null,
custs:null,
stores:null,
nbCust:null,
nbStore:null}
export const adminReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case LOADING_USER:
            return {
                ...state,loadUser:true,errors:null
            }

        case GET_ALL_CUST:
    return {...state,loadUser:false,custs:payload}

        case GET_ALL_STORE:
    return {...state,loadUser:false,stores:payload}

    case GET_NB_CUST:
        return {...state,loadUser:false,nbCust:payload.cust}
    
        case GET_NB_STORE:
            return {...state,loadUser:false,nbStore:payload.storek}
        
             
 
         case FAILED_USER:
          return {...state,loadUser:false,errors:payload}

    default:
        return state
    
}
}