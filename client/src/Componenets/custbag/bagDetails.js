import React, { useState } from 'react'
import { Button, Card } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux"
import { deletebag, editBag,getOnebag, reservtBag } from '../../JS/actions/bag'
import {likePost} from '../../JS/actions/user'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import { addOrder, getMyorders } from '../../JS/actions/order'

import {addtod,addtoDemande,addDmnd} from '../../JS/actions/demandes'
import '../bags/testbag.css'
import { Link, useHistory } from 'react-router-dom'
import Loader from '../spinneer'
import { AiOutlineDelete,AiOutlineEdit,AiOutlineLike,AiTwotoneHeart,AiOutlineHeart } from "react-icons/ai";
import { FaDollarSign, FaThumbsUp } from 'react-icons/fa';

import moment from 'moment';
import { Carousel, Image } from 'react-bootstrap'
const BagDetails = ({bag}) => { 
    const [search, setSearch] = useState();
    const dispatch = useDispatch();
    const like = async (e) => {
      e.preventDefault();
     dispatch(likePost(bag._id));
    }
 // const bagtoshow = useSelector((state) => state.bagReducer.bags)

 const history=useHistory();

    return (
        <div className="cartbag">


          
      <div className="detcontainer" >
  <span></span>
  <div className="detcontent">
 { /*<div className="row justify-content-md-center">
                  <div className="col-lg-10  justify-content-center">
                    <div>
                    <Carousel pause='hover' className='bg-dark'>
      {bagg.map((b) => (
        <Carousel.Item key={b._id}>
          <Link to={`/bags/${b._id}`}>
            <Image src={b.image} alt={b.namebag} fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {b.name} ($ {b.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
                 
                    </div>
                  </div>
                </div>*/}
                { /* <OwlCarousel items={1}
                        className="owl-theme"
                        loop
                        nav
                        margin={3}
                        autoplay={true} >
                        {bag.image.map((img) => (

                          <img src={img.image} className="img-responsive" style={{ height: 550 }} alt="bag" />

                        ))}
                        </OwlCarousel>*/}

 
  <Carousel>
		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
src="https://images.unsplash.com/photo-1573518011645-aa7ab49d0aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
			alt="Image One"
		/>
	
		</Carousel.Item>
		<Carousel.Item interval={500}>
		<img
			className="d-block w-100"
src="https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
			alt="Image Two"
		/>
	
		</Carousel.Item>
    <Carousel.Item interval={500}>
    <img
			className="d-block w-100"
src="https://images.unsplash.com/photo-1518171802599-4cd16785f93a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=925&q=80"
			alt="Image Two"
		/>
   
		</Carousel.Item>
    <Carousel.Item interval={500}>
    <img
			className="d-block w-100"
src="https://images.unsplash.com/photo-1532549872809-c1b33d87e76e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"
			alt="Image Two"
		/>
   
		</Carousel.Item>
    
	</Carousel>

    <h2 style={{color:"black"}}>{bag.namebag}</h2>
    <h6 style={{color:"black"}}>{bag.price}dt instead of {bag.priceBefore}dt </h6>
                            <h6 style={{color:"#0A775F", fontSize:"20px"}}> Adresse:{bag.adresse}</h6>
  
           <h6 style={{color:"white"}}>expired at : {moment(bag.expirationDate).format('DD/MM/YYYY')} </h6>
          
    <div className="likes">
    <button onClick={like} className="likebtn" style={{ background:"none", border:"none"}}>
       <AiTwotoneHeart style={{fontSize:'20px', color:"red"}}/>     {bag.likes && bag.likes.length } 
</button>
<div className='ui two buttons' >
              <Link to='/mydemande'>
          <Button style={{ background:"none", border:"none"}} onClick={()=>
            dispatch(addDmnd({namebag:bag.namebag,price:bag.price,quantity:bag.quantity}))}>
            Reserver
          </Button>
          </Link>
          <Button style={{ color:"blue", background:"none", border:"none"}} onClick={()=>history.push(`/bagdetail/${bag._id}`)}>
         <i class="fa fa-eye"></i> View </Button>
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