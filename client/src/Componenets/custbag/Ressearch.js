import { TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import {  getbagId, getOnebag } from "../../JS/actions/bag";
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import moment from 'moment';
import useStyles from '../styles';
import ImageSlider from '../../pages/images'





const Ressearch = () => {
    const dispatch = useDispatch()
    const history=useHistory()
    let {id}=useParams()
    const [state, setState] = useState({
      namebag:"",
      price:"",
      adresse:"",
      description :"",
      numProduct:"",
      category:"",
      expirationDate:"",
      createdAt:"",
      }
    )
    

    const {namebag,adresse,description,price,category,availibiltyDate,status,numProduct,expirationDate,createdAt}=state;

   const bag=useSelector((state)=>state.bagReducer.bags)
   const classes = useStyles();

useEffect(() => {
dispatch(getOnebag(adresse))    
}, [])


   
  return (
    <div>
      <Button style={{ width: "100px", marginTop: "20px"}} variant="contained" color="black" 
      onClick={()=> history.push('/custbag')}> back 
      </Button>
      <h3 style={{ marginLeft:"500px"}}>Edit bag</h3>
      <Paper style={{ padding: '20px', borderRadius: '15px', width:"500px", marginLeft:"400px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2" color="red">{bag.namebag}</Typography>
          <Typography gutterBottom variant="body1" component="p">{bag.description}</Typography>
          <Typography variant="h6">{bag.price}</Typography>
          <Typography variant="body1">Created at:  {moment(bag.createdAt).format('MMMM Do YYYY')}</Typography>
          <Divider style={{ margin: '20px 0' }} />
         
        </div>
       {/** <ImageSlider images={bag.image} />*/} 
        <div className={classes.imageSection}>
          <img className={classes.media} src={bag.image} alt="bagpic" />
        </div>
       </div>
      
 
{/*******recomndation */}

    </Paper>
    </div> )}
     
  

export default Ressearch
     



     
     
     
     
     
     
     
     
     
