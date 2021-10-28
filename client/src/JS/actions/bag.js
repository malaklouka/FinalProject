import {LOAD_BAGS,GET_BAGS_SUCCESS,GET_BAGS_FAIL,DELETE_BAG,IS_RESERVED,LIKE, FETCH_BAGS, FILTER_BAGS_BY_ADRESSE, IS_ADDED} from "../const/bag"
import axios from "axios"
import { GET_ORDERS_SUCCESS, LOAD_ORDERS } from "../const/order"
import { addDmnd } from "./demandes"
//get all bags: cust get all the bags + storek get all bags too
  export const getbags = () => async (dispatch) => {
    dispatch({ type: LOAD_BAGS })
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const response = await axios.get("/aa/",config)
      dispatch({ type: GET_BAGS_SUCCESS, payload: response.data.bags})
    } catch (error) {
      console.dir(error)
      dispatch({ type: GET_BAGS_FAIL, payload: error })
    }
  }


  //get one bag searched by adresse
  export const getOnebag=({adresse})=> async (dispatch)=> {
    console.log("a55555 men Malak")
    console.log(adresse.toLowerCase())
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const response= await axios.get(`/aa/bags/${adresse.toLowerCase()}`,config)
      dispatch({ type: GET_BAGS_SUCCESS, payload: response.data})
console.log(response.data)
     // dispatch(filterBagByAdress(adresse, response.data.bags))
 }
  catch (error) {
    console.dir(error)
      dispatch({type:GET_BAGS_FAIL, payload:error})
    }
  }

//filter 
{/*export const filterBagByAdress = (adresse, bag) => {
  const adresseFiltered =  bag.map(p => p.adresse.filter(c => c.id === adresse));
  const bagsFiltered = bag.filter((p, i) => adresseFiltered[i].length > 0);
    return {
      type: FETCH_BAGS,
      products: bagsFiltered,
      adresse,
  };
};
*/}








  //get one bag by id
  export const getbagId=(id)=> async (dispatch)=> {
    dispatch({type:LOAD_BAGS})
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const response= await axios.get(`/aa/${id}`,config)
      dispatch({type: GET_BAGS_SUCCESS, payload: response.data.oneBag})
    } catch (error) {
      dispatch({type:GET_BAGS_FAIL, payload:error})
    }
  }
  //
  export const myreserv=()=> async(dispatch)=>{
    dispatch({type:LOAD_ORDERS})
    try {
      const response= await axios.get('/myreserv')
      dispatch({type:GET_ORDERS_SUCCESS, payload:response.data.bags})
    } catch (error) {
      console.log({type:GET_ORDERS_SUCCESS, payload:error})
    }
  }
  //reserver bag 
  export const reserve=(id)=> async (dispatch)=>{
    dispatch ({type:LOAD_BAGS})
    try {
      const reservedbag= await axios.patch(`/aa/${id}/status`)
      dispatch ({type:IS_RESERVED, payload:reservedbag.data})
      dispatch(getbags() )
    } catch (error) {
      console.log(error)
      
    }
  }
//add reserved bag to list 
export const addReservedbag=()=> async (dispatch)=>{
  try {
    const  list=await axios.post("/")
    dispatch({type:IS_ADDED, payload:list.data})
  
  } catch (error) {
    console.log(error)
  }
}

  //delete bag : only the storek can delete bags
  export const deletebag = (adresse) => async (dispatch) => {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const response = await axios.delete(`/aa/${adresse}`,config)
      dispatch({ 
        type: DELETE_BAG,payload:adresse})
        dispatch(getbags())
    } catch (error) {
      console.log(error)
    }
  }
//post bag :storrek can add bags   
  export const  addBag=(formData)=>async dispatch=>{
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
      const response=await axios.post("/aa/bags",formData,config)
      dispatch(getbags())
  } catch (error) {
      console.dir(error)
  }
  }
  //edit bag : storek can update the bag
  export const editBag = (id, bag, history) => async (dispatch) => {
    console.log("byeee")
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const res=await axios.put(`/aa/${id}`, bag,config)
      dispatch(getbags())

      history.push("/bags")
      console.log(res)
    } catch (error) {
      console.dir(error)
      dispatch({ type: GET_BAGS_FAIL })
    }
  }


  //bag is reserved : cust can reserve bag 
  export const reserved  = (payload) => {
    return { type: IS_RESERVED, payload }
  }

  //CUST LIKE BAG
  export const likePost = (id) => async (dispatch) => {
    try {
      const response = await axios.patch(`aa/${id}/likePost`)
  
      dispatch({ type: LIKE, payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  }
export const reservtBag=(id)=>async (dispatch)=>{
  try {
    const response= await axios.patch(`aa/${id}/status`)
    dispatch ({type: IS_RESERVED, payload: response.data})
    dispatch(addDmnd())
  } catch (error) {
    console.log(error)
  }
}

  export const getBags = (page) => async (dispatch) => {
    try {
      dispatch({ type: LOAD_BAGS });
      const { data: { data, currentPage, numberOfPages } } = await axios.get(`/posts?page=${page}`);
  
      dispatch({ type: GET_BAGS_SUCCESS, payload: { data, currentPage, numberOfPages } });
    } catch (error) {
      console.log(error);
    }
  };
  //get bag search by adress
  export const getBagsBySearch = (adresse) => async (dispatch) => {
    try {
      dispatch({ type: LOAD_BAGS });
      const { data: { data } } = await  axios.get(`/bags/${adresse}`)
  
      dispatch({ type: GET_BAGS_SUCCESS, payload: { data } });
    } catch (error) {
      console.log(error);
    }
  };
 
//FILTER
export const filterBags = (adresse)=>async(dispatch)=>{
      try {
          
          const res = await axios.post("aa/filter" ,adresse )
          
          return res.data;
      } catch (error) {
        console.log(error);
      }
  }
  

  