import { GET_BAGS_FAIL } from "../const/bag";
import {LOAD_ORDERS,GET_ORDERS_SUCCESS,
    GET_ORDERS_FAIL,
    DELETE_ORDER,EDIT_ORDER, IS_ACCEPTED} 
    from "../const/order"
  
    const initialState={
    orders:[],
    errors:null,
    isLoading:false,
    isAccepted:false};
export const orderReducer=
(state=initialState,{type,payload})=>{
            switch (type) {
                case LOAD_ORDERS:
                    return {
                        ...state,isLoading:true
                    }
                    
                case GET_ORDERS_SUCCESS:
                    return{
                        ...state,isLoading:false,bags:payload
                    }
                    case GET_BAGS_FAIL:
                        return{
                            ...state,isLoading:false,errors:payload
                        }
                        case IS_ACCEPTED:
                            return { ...state, isReserved: payload };  
                    
                default:
                    return state;
            }
}