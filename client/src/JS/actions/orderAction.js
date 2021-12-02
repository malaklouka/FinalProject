import {
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_DELIVER_FAIL,
    ORDER_DELIVER_REQUEST,
    ORDER_DELIVER_SUCCESS,
    ORDER_DETAILS_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_LIST_FAIL,
    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
    ORDER_MY_ORDER_FAIL,
    ORDER_MY_ORDER_REQUEST,
    ORDER_MY_ORDER_SUCCESS,
    ORDER_PAY_FAIL,
    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
  } from '../const/order';
  
  import axios from 'axios';
  
  export const createOrder = (order) => async (dispatch) => {
    try {
      dispatch({
        type: ORDER_CREATE_REQUEST,
      });
  
     
      // Sending content type of json at our header
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
  
      const { data } = await axios.post(`/order/addorder`, order, config);
  
      // Dispatch user success
      dispatch({
        type: ORDER_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ORDER_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  

  //the details of order
  export const getOrderDetails = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_DETAILS_REQUEST,
      });
  
     
      // Sending content type of json at our header
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
  
      const { data } = await axios.get(`/order/${id}`, config);
  
      // Dispatch user success
      dispatch({
        type: ORDER_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ORDER_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//pay order

export const payOrder = (orderId, paymentResult) => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch({
        type: ORDER_PAY_REQUEST,
      });
  
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
  
      const { data } = await axios.put(
        `/order/payed/${orderId}`,
        paymentResult,
        config
      );
  
      // Dispatch user success
      dispatch({
        type: ORDER_PAY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ORDER_PAY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//deliver order
export const deliverOrder = (order) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_DELIVER_REQUEST,
      });
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
  
      const { data } = await axios.put(
        `/order/${order._id}/delivered`,
        {},
        config
      );
  
      // Dispatch order success
      dispatch({
        type: ORDER_DELIVER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ORDER_DELIVER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
//my orders
// ORDER HISTORY
export const myOrder = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_MY_ORDER_REQUEST,
      });
  
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
  
  
      const { data } = await axios.get(`/order/mine/orders`, config);
  
      // Dispatch user success
      dispatch({
        type: ORDER_MY_ORDER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ORDER_MY_ORDER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  //get all orders
  export const allOrder = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_LIST_REQUEST,
      });
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
  
  
      const { data } = await axios.get(`/order/allorder`, config);
  
      // Dispatch user success
      dispatch({
        type: ORDER_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ORDER_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };