import { TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import {  getbagId } from "../../JS/actions/bag";
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import moment from 'moment';
import useStyles from '../styles';
import ImageSlider from '../../pages/images'
import Recommended from './recommended'
import './view.css'
import {addtod,addtoDemande,addDmnd} from '../../JS/actions/demandes'
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box';



const Showbag = () => {
    const dispatch = useDispatch()
    const history=useHistory()
    let {id}=useParams()
    const [state, setState] = useState({
     bags:[]
      }
    )
    

    const {namebag,adresse,description,price,priceBefore,category,availibiltyDate,status,numProduct,expirationDate,createdAt}=state;

   const bag=useSelector((state)=>state.bagReducer.bags)
   const classes = useStyles();

useEffect(() => {
dispatch(getbagId(id))    
}, [])


   
  return (
    <div>
    <div className="cardd transition">
    <h5 className="transition">Bag's Details:</h5>
    <h6 className="textt">{bag.bagname}</h6>
    <p>{bag.description}</p>
    <div className="cta-container transition"><a href="#" className="cta">
    <Link to='/mydemande'>
          <Button style={{ background:"none", border:"none"}} onClick={()=>
            dispatch(addtod({namebag:bag.namebag,price:bag.price,quantity:bag.quantity}))}>
            Reserver
          </Button>
          </Link>
          </a></div>
    <div className="card_circle transition">{bag.image}</div>
  </div>

  {/**recommendations bags filter by aadress  */}
  <Recommended/>
  </div>
  )}
     
    

  export default Showbag


    {/*<div className="test">
      <div class="back-button" style={{marginTop:"-240px"}}>
  <div class="arrow-wrap"   onClick={()=> history.push('/custbag')}>
    <span class="arrow-part-1"></span>
    <span class="arrow-part-2"></span>
    <span class="arrow-part-3"></span>
  </div>
</div>
   <div className="bkbtn">
     
  </div>
      <h3 style={{ marginLeft:"500px" , color:"white", marginTop:"80px"}}>Bag's Details:</h3>


      <div className="detcontainer">
  <span></span>
  <div className="detcontent">
  <Carousel>
		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
src="https://images.unsplash.com/photo-1573518011645-aa7ab49d0aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
			alt="Image One"
		/>
		<Carousel.Caption>
			<h3>ANTI WASTE SITE WEB</h3>
			<p>Save the planet</p>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={500}>
		<img
			className="d-block w-100"
src="https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
			alt="Image Two"
		/>
		<Carousel.Caption>
			<h3>Save meals</h3>
				</Carousel.Caption>
		</Carousel.Item>
    <Carousel.Item interval={500}>
    <img
			className="d-block w-100"
src="https://images.unsplash.com/photo-1518171802599-4cd16785f93a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=925&q=80"
			alt="Image Two"
		/>
    <Carousel.Caption>
		
		</Carousel.Caption>
		</Carousel.Item>
    <Carousel.Item interval={500}>
    <img
			className="d-block w-100"
src="https://images.unsplash.com/photo-1532549872809-c1b33d87e76e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"
			alt="Image Two"
		/>
    <Carousel.Caption>
		
		</Carousel.Caption>
		</Carousel.Item>
    
	</Carousel>
    <h2 style={{color:"#e6640c"}}>{bag.namebag}</h2>
    <p>{bag.description}</p>
  <h6 style={{color:"#e6640c"}}>{bag.price}dt instead of {bag.priceBefore}dt </h6>
    
    <button>add</button>
  </div>
</div>
    <Recommended />
  </div>*/}

 
     
     
     
     
     
     
