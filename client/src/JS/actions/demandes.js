//orders actions 
import { LOAD_DMND,IS_ACCEPTED,ADD_TO_DMND_SUCCESS,ADD_TO_DMND_FAIL,GET_CUST_DMND_SUCCESS,GET_CUST_DMND_FAIL, GET_MY_DMND_FAIL, GET_MY_DMND_SUCCESS} 
from "../const/demandeConst"
import axios from "axios"


export const addtod=(newDemand)=>async (dispatch)=>{
  dispatch({ type: LOAD_DMND })
  
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const response = await axios.post('/dmnd/addt',newDemand,config)
    console.log(response.data)
    dispatch({ type: ADD_TO_DMND_SUCCESS, payload: response.data.demand.items})
    console.log(response.data)

  } catch (error) {
    console.dir(error)
    dispatch({ type: ADD_TO_DMND_FAIL, payload: error })
  }
}


//add order: cust passe un order

export const addDmnd=(newDemand)=>async (dispatch)=>{
    dispatch({ type: LOAD_DMND })
    
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const response = await axios.post("/dmnd/additemsto",newDemand,config)
      dispatch({ type: ADD_TO_DMND_SUCCESS, payload: response.data})

    } catch (error) {
      console.log(error)
      dispatch({ type: ADD_TO_DMND_FAIL, payload: error })
    }
}
//get my orders : cust check his orders (he can cancel it)
export const getdemandes=()=>async (dispatch)=>{
    dispatch({type: LOAD_DMND})
    try {
        const response = await axios.get("/dmnd/alldemande")
        console.log(response)
        dispatch({type: GET_CUST_DMND_SUCCESS, payload:response.data.alldemande})
    } catch (error) {
      console.log(error)
        dispatch({type: GET_CUST_DMND_FAIL, payload:error})
        
    }

}
//get accepted demandes
export const getAcceptedDemande=()=>async (dispatch)=>{
  dispatch({type: LOAD_DMND})
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
      const response = await axios.get("/dmnd/acc",config)
      console.log(response)
      dispatch({type: GET_CUST_DMND_SUCCESS, payload:response.data.alldemande})
      console.log(response)
  } catch (error) {
    console.log(error)
      dispatch({type: GET_CUST_DMND_FAIL, payload:error})
      
  }

}
//get my dmnd
export const getMydmnd=()=>async(dispatch)=>{
  dispatch({type: LOAD_DMND})
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const response= await axios.get('/dmnd/mesdemandes',config)
 console.log(response)
 dispatch({type:GET_MY_DMND_SUCCESS, payload:response.data.demande})
  } catch (err) {
    dispatch({type: GET_CUST_DMND_FAIL,payload:EvalError})
  }
}
//edit order : annuler l'order
export const updateDemande=(id,Items,history)=>async (dispatch)=>{
    try {
        await axios.put(`/${id}`, Items)
        dispatch(addDmnd())
        history.push("/order")
      } catch (error) {
        dispatch({ type: GET_CUST_DMND_FAIL })
      }
}
//accept demande
export const acceptDemande=(id)=>async(dispatch)=>{
  console.log(id)
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put(`/dmnd/accept/${id}`,{},config)
    dispatch(getdemandes())
  } catch (error) {
    dispatch({type:GET_CUST_DMND_FAIL})
  }
}



//delete order 
export const deleteDemande = (id) => async (dispatch) => {
 console.log(id)
 const config = {
  headers: {
    authorization: localStorage.getItem("token"),
  },
};
    try {
      const response= await axios.delete(`/dmnd/cancel/${id}`)
console.log(response)
      dispatch(getdemandes());
    } catch (error) {
      dispatch({ type: GET_CUST_DMND_FAIL, payload: error.response.data.errors });
    }
  }
//order accepted : storek accept or not the cust order 
export const isAccepted = (payload) => {
    return { type: IS_ACCEPTED, payload }
  }