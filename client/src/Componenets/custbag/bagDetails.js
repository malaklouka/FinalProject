import React, { useState, useEffect, useRef } from 'react'
import { Button, Card } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux"
import { deletebag, editBag,getOnebag, reservtBag,reserve } from '../../JS/actions/bag'
import {addnewd} from '../../JS/actions/demandes'
import {likePost} from '../../JS/actions/user'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'

import '../bags/testbag.css'
import { Link, useHistory } from 'react-router-dom'
import Loader from '../spinneer'
import { AiOutlineDelete,AiOutlineEdit,AiOutlineLike,AiTwotoneHeart,AiOutlineHeart } from "react-icons/ai";
import { FaDollarSign, FaThumbsUp, FaEye } from 'react-icons/fa';


import moment from 'moment';
import Carousel from 'react-material-ui-carousel';
import CarouselSlide from 'react-material-ui-carousel';

const BagDetails = ({bag}) => { 
    const [search, setSearch] = useState();
    const dispatch = useDispatch();
    const loading = useSelector(
      (state) => state.bagReducer.isLoading
    );
    const [availibiltyDate, setAvailibiltyDate]=  useState("availibiltyDate")
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
 
    let interval=useRef();
    const startTimer=()=>{
      const countdownDate= moment(bag.availibiltyDate).valueOf();
      interval= setInterval(()=>{
        const now= new Date().getTime();
        const distance=countdownDate - now;
        const days= Math.floor(distance /(1000 * 60 * 60 * 24));
        const hours= Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
        const minutes= Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds= Math.floor((distance %(1000 * 60 )) / 1000);

      if (distance < 0){
        //stop timer
        clearInterval(interval.current)
      }
      else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
      },1000);
      
      
    };
    //component didmount
    useEffect(() => {
      startTimer();
      
      return () => {
        clearInterval(interval.current);
      };
    });
    
    {/*const calculateTimeLeft = () => {
      let eventTime = moment(bag.availibiltyDate).valueOf();
      console.log(eventTime)
      let currentTime = (Math.floor(Date.now() / 1000)).toString();
      let leftTime = eventTime - currentTime;
      let duration = moment.duration(leftTime, 'seconds');
      let interval = 1000;
      if (duration.asSeconds() <= 0) {
          clearInterval(interval);
      }
      duration = moment.duration(duration.asSeconds() - 1, 'seconds');
      return (duration.days() + ' Days ' + duration.hours()+ ' Hours ' + duration.minutes()+ ' Minutes ' + duration.seconds() + ' Seconds');
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
      setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
      },1000);
  });*/}
    const like = async (e) => {
      e.preventDefault();
     dispatch(likePost(bag._id));
    }
 // const bagtoshow = useSelector((state) => state.bagReducer.bags)

 
 const history=useHistory();

    return  (

        <div className="cartbag">

          
      <div className="detcontainer" >
  <span></span>
  <div className="detcontent">
  <Carousel  autoPlay={false} style={{height : "150px",width : "50%"}}>
             <CarouselSlide>
                     {bag.image.map((img) => (

<img src={img} className="img-responsive"  alt="bag"width="220" height="190" style={{marginLeft:-25,marginTop:-45}} />
                ))}
                </CarouselSlide>
            </Carousel>
{/*
  <Carousel autoPlay>
             <CarouselSlide>
                     {bag.image.map((img) => (

<img src={img.image} alt="bag" />
                ))}
                </CarouselSlide>
                     </Carousel>*/}
 {/*
  <Carousel>
		<Carousel.Item interval={1500}>
 {bag.image.map((img) => (

<img src={img.image} className="img-responsive"  alt="bag" />

                        ))}
	
		</Carousel.Item>   
	    
	</Carousel>*/}

    <h2 className="nameb" style={{color:"black"}}>{bag.namebag}</h2>
    <div>{timerDays}:{timerHours}:{timerMinutes}:{timerSeconds}</div>
    <h6 style={{color:"black"}}>{bag.price}dt instead of {bag.pricebefore}dt </h6>
    <h6 style={{color:"#0A775F"}}> Adresse:{bag.adresse}</h6>
   <h6 style={{color:"red"}}>published by: {bag.storekeeper}</h6>

    <h6 style={{color:"white"}}>expired at : {moment(bag.expirationDate).format('DD/MM/YYYY')} </h6>
          
    <div className="likes">
    <button onClick={like} className="likebtn" style={{ background:"none", border:"none"}}>
       <AiTwotoneHeart style={{fontSize:'20px', color:"red"}}/>     {bag.likes && bag.likes.length } 
</button>
<div className='ui two buttons' >
<Link to='/mydemande'>

          <Button style={{ background:"none", border:"none"}} onClick={()=>
            dispatch(addnewd({bag:bag._id,price:bag.price,quantity:bag.quantity}))}>
            Reserver
          </Button>
          </Link>
          <Button style={{ color:"blue", background:"none", border:"none"}} onClick={()=>history.push(`/bagdetail/${bag._id}`)}>
          <FaEye/>View </Button>
         </div>
    </div>
    </div>
    </div>
{/*<Flippy  flipOnClick={false} flipOnHover={true} flipDirection="vertical" className='username' >
<FrontSide >
        <div className="container">
      
        <img src={bag.image} alt="bag" width="295" height="290" style={{marginLeft:-25,marginTop:-45}} />
        <h3 style={{fontSize:35,color:"#FFA500",marginRight:150,marginTop:-10}}> {bag.namebag}</h3>
        <span style={{color:"red",marginTop:60,marginLeft:152}}></span>{bag.price} dt <span style={{color:"red",textDecoration:"line-through "}}> {bag.priceBefore} dt</span>


         


        </div>

        </FrontSide>
        <BackSide >
            <div className="container">
              
          <div className="like-offre">
    <button onClick={like} className="likebtn" style={{ backgroundColor: "white",border:"white"}} >
       <AiTwotoneHeart style={{fontSize:'20px', color:"red"}}/>     {bag.likes && bag.likes.length } 
</button>
    </div>
            <ul>
                            <li><span style={{color:"red"}}> Adresse: </span>{bag.adresse}</li>
  
                            <li> <span style={{color:"red"}}>category:</span> {bag.category}</li>
           <li><span style={{color:"red"}}>expired at : </span>{moment(bag.expirationDate).format('DD/MM/YYYY')}</li> 
          
                          </ul>
            </div>
            <div className='ui two buttons'>
              <Link to='/mydemande'>
          <Button  onClick={()=>
            dispatch(addtod({namebag:bag.namebag,price:bag.price,quantity:bag.quantity}))}>
            Reserver
          </Button>
          </Link>
          <Button style={{ color:"blue", backgroundColor: "white",border:"white"}} onClick={()=>history.push(`/bagdetail/${bag._id}`)}>
         <i class="fa fa-eye"></i> View </Button>
       
         {/* <Button style={{ backgroundColor: "white",border:"white"}} 
  onClick={() => dispatch(likePost(bag._id))}>  <AiTwotoneHeart fontSize="20" color="red"/> {bag.likeCount} Like </Button>    
          
          */}
      {/*
        </div>
        </BackSide>
    </Flippy>

        */}




          
           
{/** cust click the button to like bag
 * <Button size="small" color="primary" 
 * onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> 
 * Like {post.likeCount} </Button> */}
{/**  <Card>
               <Card.Content>
      <Image
          floated='right'
          size='mini'
          src='https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg'        />
      <Card.Meta>{bag.namebag}</Card.Meta>
      <Card.Meta>{bag.adresse}</Card.Meta>
      <Card.Meta>{bag.price}</Card.Meta>
      <Card.Meta>{bag.category}</Card.Meta>

      
      <Card.Meta>{bag.description}</Card.Meta>

        
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'onClick={()=>dispatch(editBag(bag._id))}>
            edit
          </Button>
          <Button basic color='green'onClick={()=>dispatch(deletebag(bag._id))}>
            delete
          </Button>
        </div>
      </Card.Content>
    </Card>*/}
  
        </div> 
    )
}



//bag shown for cust : cust reserve ths bag : add order (is reserved become true )
//only isreserved false can be shown !!! 


export default BagDetails