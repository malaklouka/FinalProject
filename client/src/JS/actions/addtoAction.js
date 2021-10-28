import * as addto from "../const/addto"
import axios from "axios"
export const addToDemand = (id_customer, quantity) => async (dispatch, getState) => {
    const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
    try {
      const data = await axios.post(`/dmnd/${id_customer}`)
  
      dispatch({
        type: addto.ADD_TO_DEMAND_ITEM,
        payload: payLoadForDemandItem(data, quantity),
      });
  
      localStorage.setItem('Items', JSON.stringify(getState().demande.Items));
    } catch (err) {
      dispatch({
        type: addto.ADD_TO_DEMAND_FAIL,
        payload: err,
      });
    }
  };
  export const payLoadForDemandItem = (data, quantity) => {
      
    return {
      bagId: data._id,
      bagName: data.name,
      price: data.price,
      quantity,
    };
  }

  
export const removeItemFromDemand = (id) => async (dispatch, getState) => {
    const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
    dispatch({
      type: addto.DEMAND_REMOVE_ITEM,
      payload: id,
    });
  
    localStorage.setItem('Items', JSON.stringify(getState().demande.Items));
  };