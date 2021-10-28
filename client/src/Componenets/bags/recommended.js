import { TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import {  getbagId } from "../../JS/actions/bag";
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import moment from 'moment';
import useStyles from '../styles';
const Recommended = ({bag}) => {
    const [state, setState] = useState({
        bags:[]
         }
       )
       const history=useHistory()

       const classes = useStyles();
       const recommendedBags = state.bags.filter(({ id }) => id !== bag.id);

    return (
        <div>
                

<div className={classes.section}>
   <Typography gutterBottom variant="h5">YOU MIGHT ALSO LIKE:</Typography>
   <Divider />
   <div className={classes.recommendedBags}>
     {recommendedBags.map(({ namebag,description,id,price }) => (
       <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => history.push(`/bags/${id}`)} >
         <Typography gutterBottom variant="subtitle2">{namebag}</Typography>
         <Typography gutterBottom variant="subtitle2">{description}</Typography>
         <Typography gutterBottom variant="subtitle2">{price}</Typography>

       </div>
     ))}
   </div>
 </div>
        </div>
    )
}

export default Recommended
