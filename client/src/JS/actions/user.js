import {LOAD_USER,REGISTER_USER,LOGIN_USER, FAIL_USER, CURRENT_USER, LOGOUT_USER,GET_ALL_STOREK,GET_ALL_CUST} from '../const/user'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LIKE_BAG, LIKE_BAG_FAIL, LIKE_BAG_SUCCESS } from '../const/bag';

toast.configure();
//registr user
export const registerUser=(user,history)=>async dispatch =>{
    dispatch({type:LOAD_USER})
    try {
    const result=await  axios.post('/user/register',user)
       dispatch({type:REGISTER_USER,payload:result.data})
       console.log()
  if(result.data && result.data.newUserToken.role =="customer")
{       history.push('/custdashboard')}
if(result.data && result.data.newUserToken.role =="admin")
{       history.push('/dashadmin')}
else {
    history.push('/dashboard')
}
       
    } catch (error) {
        dispatch({type:FAIL_USER,payload:error.response.data})
    }
}
//login 

export const loginUser=(user,history)=>async dispatch =>{
    dispatch({type:LOAD_USER})
    try {
        
    const result=   await  axios.post('/user/signin',user)
       dispatch({type:LOGIN_USER,payload:result.data})
       toast.success("welcome");

       if(result.data.user && result.data.user.role =="customer")
       {       history.push('/custdashboard')}
       if(result.data.user && result.data.user.role =="admin")
{       history.push('/dashadmin')}
       else {
           history.push('/dashboard')
       }    } catch (error) {
        const {errors,msg}=error.response.data
        if(Array.isArray(errors)){errors.forEach(err=>toast.error(err.msg))}
        if (msg){toast.success(msg)}
        dispatch({type:FAIL_USER,payload:error.response.data})
    }
}
export const currentUser=()=> async dispatch=>{
    dispatch({type:LOAD_USER})
    const options={
        headers:{
            authorization:localStorage.getItem("token")
        }
    }
    try {
        let result= await axios.get('/user/current',options)
        dispatch({type:CURRENT_USER,payload:result.data.user})
        
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data });

    }
   
} 
export const logout=()=>{
    return {
        type:LOGOUT_USER
    }
}



//LIKE A POST
export const likePost = (id) => async (dispatch) => {
    const options={
        headers:{
            authorization:localStorage.getItem("token")
        }
    }
    dispatch({
      type: LIKE_BAG,
    });
    try {
      const likedbag = await axios.put(`/aa/current/like/${id}`,null ,options);
      dispatch({
        type: LIKE_BAG_SUCCESS,
        payload: likedbag.data,
      });
      
    } catch (error) {


      dispatch({
        type: LIKE_BAG_FAIL,
        payload:error.response.data,
      });

      const {errors,msg}=error.response.data
      if(Array.isArray(errors)){errors.forEach(err=>alert(err.msg))}
      if (msg){alert(msg)}
      dispatch({type:LIKE_BAG_FAIL,payload:error.response.data})
     
    }
  };
{/*
  export const getAllstorek = () => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    try {
      const result = await axios.get("/admin/allstorek", config);
      dispatch({ type: GET_ALL_STOREK, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
  };
  export const getAllCust = () => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    try {
      const result = await axios.get("/admin/allCust", config);
      dispatch({ type: GET_ALL_CUST, payload: result.data.clients });
    } catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
  };
*/}