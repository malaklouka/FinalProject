import {LOAD_PROFIL,GET_PROFIL_SUCCESS,GET_PROFIL_FAIL,UPDATE_PROFIL_SUCCESS,UPDATE_PROFIL_FAIL} from '../const/profil';

import axios from 'axios'

export const getProfil = () => async (dispatch) =>{
    dispatch ({type:LOAD_PROFIL})
    try {
        const opts={
            headers:{
              Authorization:localStorage.getItem('token')
            }
          }
        const response = await axios.get("/store/profile",opts)
        console.log(response)
        dispatch({type:GET_PROFIL_SUCCESS, payload:response.data})
    } catch (error) {
        dispatch({type:GET_PROFIL_FAIL, error})
    }
}
export const editProfile = (id,updatedProfile,history) => async (dispatch) => {
    dispatch({ type: LOAD_PROFIL });
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    try {
      const response = await axios.put(`store/editprofil/${id}`, updatedProfile, config);

      dispatch({type:UPDATE_PROFIL_SUCCESS, payload:response.data.data});
      dispatch(getUser())

      history.push("/profile")

    } catch (error) {
        
      dispatch({ type: UPDATE_PROFIL_FAIL, error});
    }
  };
  export const getUser = () => async (dispatch) => {
    dispatch({ type: LOAD_PROFIL });
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    try {
      const result = await axios.get("/store/profile", config);
      dispatch({ type: GET_PROFIL_SUCCESS, payload: result.data });
    } catch (error) {
      dispatch({ type: GET_PROFIL_FAIL, payload: error.response.data.errors });
    }
  };