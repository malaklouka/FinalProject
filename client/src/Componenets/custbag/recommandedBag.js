import { Typography } from '@material-ui/core';
import { getTypographyUtilityClass } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Divider } from 'semantic-ui-react';
import useStyles from '../styles';

const RecommandedBag = () => {
    const { baggs,bag} = useSelector((state) => state.bagReducer.bags);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const { id } = useParams();
    const recommendedBags = baggs.filter(({ _id }) => _id !== bag._id);
    const openPost = (_id) => history.push(`/bags/${_id}`);

    return (
        <div>
               {!!recommendedBags.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">You might also like:</Typography>
          <Divider />
          <div className={classes.recommendedBags}>
            {recommendedBags.map(({ adresse, namebag, price, likes, description, _id }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id}>
                <Typography gutterBottom variant="h6">{adresse}</Typography>
                <Typography gutterBottom variant="subtitle2">{namebag}</Typography>
                <Typography gutterBottom variant="subtitle2">{price}</Typography>
                <getTypographyUtilityClass gutterBottom variant="subtitle1">Likes: {likes.length}</getTypographyUtilityClass>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>    
    )
}

export default RecommandedBag
