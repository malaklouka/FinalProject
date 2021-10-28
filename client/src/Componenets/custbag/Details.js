import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getbagId } from '../../JS/actions/bag'
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';

import useStyles from '../styles';

const Details = () => {
    const Bags = useSelector(state => state.bagReducer.bags)

  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const classes = useStyles();


  useEffect(() => {
    dispatch(getbagId(id));
  }, [id]);
    return (
        <div>
          <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{Bags.namebag}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{Bags.adresse.map((e) => `${e} `)}</Typography>
          <Typography gutterBottom variant="body1" component="p">{Bags.description}</Typography>
          <Typography variant="h6">Created by: {Bags.price}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Comments - coming soon!</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
        </div>
      
      </div>
        </div> 
    )
}

export default Details