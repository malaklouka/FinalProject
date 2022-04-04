import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../spinneer'
import Message from './Message'
import { topbag } from '../../JS/actions/bag'
import './top.css'
import CarouselSlide from 'react-material-ui-carousel';
import Carousel from 'react-material-ui-carousel'
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import useStyles from '../styles';
import { FaMapMarkerAlt } from 'react-icons/fa'

const Topbags = ({bagtop}) => {
  const dispatch = useDispatch()
  const history = useHistory();
    const classes = useStyles();

  const isloading= useSelector((state) => state.topReducer.isloading)
  const error= useSelector((state) => state.topReducer.error)


  useEffect(() => {
    dispatch(topbag())
  }, [dispatch])

  return isloading ? (
    <Loader/>
  ) : error ? (
    <Message>{error}</Message>
  ) : (

    <div className={classes.section}>
  
    <div style={{backgroundColor:"white"}}>

<div className={classes.section}>
<div class="trapezium-badge">
    <span class="badge-text">TOP-BAG</span>
  </div>   

   <div className="imag">

<Carousel  autoPlay={false} style={{height : "200px",width : "100%"}}  onClick={()=>history.push(`/bagdetail/${bagtop._id}`)}>
             <CarouselSlide>
                     {bagtop.image.map((img) => (

<img src={img} className="img-responsive"  alt="bag"width="295" height="200" style={{marginLeft:-25,marginTop:-45}} />
                ))}
                </CarouselSlide>
            </Carousel>
{/*<img src={bag.image} alt="img" width="295" height="290" style={{marginLeft:-25,marginTop:-45}}/>*/}
</div>
     <Typography gutterBottom variant="h6"><FaMapMarkerAlt/> {bagtop.adresse}</Typography>
     <Typography gutterBottom variant="subtitle2">{bagtop.namebag}</Typography>
     <Typography gutterBottom variant="subtitle2">{bagtop.price}dt</Typography>
   </div>
</div>
</div>
  )
  }
export default Topbags