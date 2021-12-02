import {LOAD_TOP,TOP_SUCCESS,TOP_FAIL,
  } from "../const/topConst"
  
    const initialState={
    topbags:[],
    errors:null,
    isLoading:false,
};
export const topReducer=(state=initialState,{type,payload})=>{
            switch (type) {
                case LOAD_TOP:
                    return {
                        ...state,isLoading:true,errors:null
                    }
                case TOP_SUCCESS:
                    return{
                        ...state,isLoading:false,topbags:payload,errors:null
                    }
                    case TOP_FAIL:
                        return{
                            ...state,isLoading:false,errors:payload
                        }
                       
                                 
                default:
                    return state;
            }
}