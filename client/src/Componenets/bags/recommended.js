import { TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import {  getbagId } from "../../JS/actions/bag";
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import moment from 'moment';
import "./styless.css"
import useStyles from '../styles';
const Recommended = ({bag}) => {
    const [state, setState] = useState({
        bags:[]
         }
       )
       const history=useHistory()

       const classes = useStyles();
       const recommendedBags = state.bags.filter((adresse) => adresse === bag.adresse);

    return (
        <div>
                

<div className={classes.section}>
   <h5 className="recom" style={{color:"black",marginTop:"500px"}}>YOU MIGHT ALSO LIKE:</h5>
   <Divider />
   <div className={classes.recommendedBags}>
     {recommendedBags.map(({ namebag,description,id,price }) => (
       <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => history.push(`/bags/${id}`)} >
         <h6>{namebag}</h6>
         <h6>{description}</h6>
         <h6>{price}</h6>

       </div>
     ))}
   </div>
 </div>
        </div>
    )
}

export default Recommended
