import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import {   getOnebag } from "../../JS/actions/bag";
import { Paper, Typography, Divider } from '@material-ui/core/';
import moment from 'moment';
import useStyles from '../styles';





const Ressearch = () => {
    const dispatch = useDispatch()
    const history=useHistory()
    // eslint-disable-next-line no-unused-vars
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
    

    const {adresse}=state;

   const bag=useSelector((state)=>state.bagReducer.bags)
   const classes = useStyles();

useEffect(() => {
dispatch(getOnebag(adresse))    
}, [adresse, dispatch])


   
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
     



     
     
     
     
     
     
     
     
     
