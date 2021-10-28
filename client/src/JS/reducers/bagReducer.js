import {LOAD_BAGS,GET_BAGS_SUCCESS,GET_BAGS_FAIL,
    DELETE_BAG,EDIT_BAG, IS_RESERVED,LIKE} from "../const/bag"
  
    const initialState={
    bags:[],
    errors:null,
    isLoading:false,
    isReserved:true,
likes:[]};
export const bagReducer=(state=initialState,{type,payload})=>{
            switch (type) {
                case LOAD_BAGS:
                    return {
                        ...state,isLoading:true,errors:null
                    }
                case GET_BAGS_SUCCESS:
                    return{
                        ...state,isLoading:false,bags:payload,errors:null
                    }
                    case GET_BAGS_FAIL:
                        return{
                            ...state,isLoading:false,errors:payload
                        }
                        case LIKE:
                            return {
                                ...state,
                                loading:false,
                                Likes: payload,
                            }
                        case IS_RESERVED:
                            return { ...state, isReserved: payload };  
                                 
                default:
                    return state;
            }
}