import {
    FAILED_USER,
    LOADING_USER,

    GET_ALL_CUST,
    GET_ALL_STORE,
    GET_NB_STORE, GET_NB_CUST
  } from "../const/adminConst";
  
  import axios from "axios";

  export const getAllCust = () => async (dispatch) => {
    dispatch({ type: LOADING_USER });
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    try {
      const result = await axios.get("/admin/allCust", config);
      dispatch({ type: GET_ALL_CUST, payload: result.data.cust });
    } catch (error) {
      dispatch({ type: FAILED_USER, payload: error.response.data.errors });
    }
  };
  
  export const getAllStore = () => async (dispatch) => {
    dispatch({ type: LOADING_USER });
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    try {
      const result = await axios.get("/admin/allstorek", config);
      dispatch({ type: GET_ALL_STORE, payload: result.data.storek });
    } catch (error) {
      dispatch({ type: FAILED_USER, payload: error.response.data.errors });
    }
  };

  export const deleteUser = (id) => async (dispatch) => {
    dispatch({ type: LOADING_USER });
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    try {
      await axios.delete(`/admin/deleteUser/${id}`, config);
  
      dispatch(getAllCust());
      dispatch(getAllStore());
    } catch (error) {
      dispatch({ type: FAILED_USER });
    }
  };

  export const updateBannedUser = (id) => async (dispatch) => {
    dispatch({ type: LOADING_USER });
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    try {
      await axios.put(`/admin/bannedUser/${id}`, {}, config);
      dispatch(getAllCust());
      dispatch(getAllStore());
    } catch (error) {
      dispatch({ type: FAILED_USER });
    }
  };
  export const getNBstore = () => async (dispatch) => {
    dispatch({ type: LOADING_USER });
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    try {
      const result = await axios.get("/admin/allstorek/num", config);
      dispatch({ type: GET_NB_STORE, payload: result.data.storek });
    } catch (error) {
      dispatch({ type: FAILED_USER, payload: error });
    }
  };

  export const getNBcust = () => async (dispatch) => {
    dispatch({ type: LOADING_USER });
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    try {
      const result = await axios.get("/admin/allCust/num", config);
      dispatch({ type: GET_NB_CUST, payload: result.data.cust});
    } catch (error) {
      dispatch({ type: FAILED_USER, payload: error});
    }
  };
  