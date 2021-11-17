import {LOADING_USER,FAILED_USER,GET_ALL_CUST,GET_ALL_STORE,GET_NB_CUST,GET_NB_STORE} from '../const/adminConst'

const initialState={
    users:null,
    loadUser:false,
    errors:null,
custs:null,
stores:null}
export const adminReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case LOADING_USER:
            return {
                ...state,loadUser:true,errors:null
            }

        case GET_ALL_CUST:
    localStorage.setItem("token",payload.token)
    return {...state,loadUser:false,users:payload.users}

        case GET_ALL_STORE:
    localStorage.setItem("token",payload.token)
    return {...state,loadUser:false,users:payload.users}

    case GET_NB_CUST:
        localStorage.setItem("token",payload.token)
        return {...state,loadUser:false,users:payload.custs}

            case GET_NB_STORE:
        localStorage.setItem("token",payload.token)
        return {...state,loadUser:false,users:payload.stores}

         case FAILED_USER:
          return {...state,loadUser:false,errors:payload}

    default:
        return state
    
}
}