import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {  Divider } from '@material-ui/core/';

import "./styless.css"
import useStyles from '../styles';
const Recommended = ({bag}) => {
    const [state] = useState({
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
