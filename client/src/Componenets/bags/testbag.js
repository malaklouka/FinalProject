import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {  Button } from "semantic-ui-react";
import {  getbagId } from "../../JS/actions/bag";

import './view.css'
import { addnewd} from '../../JS/actions/demandes'
import { Link } from 'react-router-dom'

import Tops from "../custbag/tops";



const Showbag = () => {
    const dispatch = useDispatch()
    let {id}=useParams()
  
    


   const bag=useSelector((state)=>state.bagReducer.bags)

useEffect(() => {
dispatch(getbagId(id))    
}, [dispatch, id])


   
  return (
  <div>
  <div class="cardtop 1">
    <div class="card_title title-white">
    <h4 style={{color:"green"}}>{bag.namebag}</h4>
    <h6 style={{color:"white", marginTop:20,fontSize:20}}>description: {bag.description}</h6> 
    <h6 style={{marginTop:50}}>{bag.price}dt instead of {bag.pricebefore}dt </h6>
    <div style={{marginTop:40}}>  
    <Link to='/mydemande'>
          <Button style={{ border:"none",color:"black"}} className="reservebtn" onClick={()=>
            dispatch(addnewd
            (bag._id))}>
            Reserver
          </Button>
          </Link> 
          </div>
    </div>
  </div>
  <Tops/>
    </div>
  )}
     
    

  export default Showbag


 

 
     
     
     
     
     
     
