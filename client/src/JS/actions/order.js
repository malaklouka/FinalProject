//orders actions 
import {LOAD_ORDERS,GET_ORDERS_SUCCESS,GET_ORDERS_FAIL,DELETE_ORDER,EDIT_ORDER, IS_ACCEPTED} 
from "../const/order"
import axios from "axios"

//add order: cust passe un order
export const addOrder=(order)=>async (dispatch)=>{
    dispatch({ type: LOAD_ORDERS })
    try {
      const response = await axios.post("/order/",order)
      dispatch({ type: GET_ORDERS_SUCCESS, payload: response.data.orders})

    } catch (error) {
      console.log(error)
      dispatch({ type: GET_ORDERS_FAIL, payload: error })
    }
}
//get my orders : cust check his orders (he can cancel it)
export const getMyorders=()=>async (dispatch)=>{
    dispatch({type: LOAD_ORDERS})
    try {
        const response = await axios.get("order/myorders")
        dispatch({type: GET_ORDERS_SUCCESS, payload:response.data.orders})
    } catch (error) {
      console.log(error)
        dispatch({type: GET_ORDERS_FAIL, payload:error})
        
    }

}

//edit order : annuler l'order
export const updateOrder=(id,numItems,history)=>async (dispatch)=>{
    try {
        await axios.put(`/${id}`, numItems)
        dispatch(addOrder())
        history.push("/order")
      } catch (error) {
        dispatch({ type: GET_ORDERS_FAIL })
      }
}
//delete order 
export const deleteOrder = (id) => async (dispatch) => {
 
    try {
      await axios.delete(`/order/delete/${id}`)
      dispatch(getMyorders());
    } catch (error) {
      dispatch({ type: GET_ORDERS_FAIL, payload: error.response.data.errors });
    }
  }
//order accepted : storek accept or not the cust order 
export const isAccepted = (payload) => {
    return { type: IS_ACCEPTED, payload }
  }