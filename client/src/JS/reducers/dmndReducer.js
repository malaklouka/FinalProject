import { ADD_TO_DMND_FAIL, ADD_TO_DMND_SUCCESS, GET_CUST_DMND_FAIL, GET_CUST_DMND_SUCCESS, GET_MY_DMND_SUCCESS, IS_ACCEPTED, LOAD_DMND } from "../const/demandeConst"
  
    const initialState={
    demandes:[],
    errors:null,
    isLoading:false};
export const demandeReducer=(state=initialState,{type,payload})=>{
            switch (type) {
                case LOAD_DMND:
                    return {
                        ...state,isLoading:true
                    }
                    
                case ADD_TO_DMND_SUCCESS:
                    return{
                        ...state,isLoading:false,demandes:payload
                    }
                    case ADD_TO_DMND_FAIL:
                        return{
                            ...state,isLoading:false,errors:payload
                        }
                        case GET_CUST_DMND_SUCCESS:
                        return {
                            ...state,isLoading:false,demandes:payload
                        }
                        case GET_CUST_DMND_FAIL:
                            return {
                                ...state,isLoading:false,errors:payload

                            }
                           
                        case IS_ACCEPTED:
                            return { ...state, isAccepted: payload };  
                                 
                default:
                    return state;
            }
}