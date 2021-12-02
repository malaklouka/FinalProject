import React, { useEffect, useState } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux"
import { addBag, deletebag, editBag,getbags,likePost} from '../../JS/actions/bag'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import { Link } from 'react-router-dom'
import Add from './addbag'
import { useHistory, useParams } from "react-router"
import BasicAlerts from '../alert'
import ImageSlider from '../../pages/images'
import moment from 'moment';
import Loader from '../spinneer'
import Navbar from '../Navbar'
import { AiOutlineDelete,AiOutlineEdit,AiOutlineLike,AiTwotoneHeart,AiOutlineHeart,AiOutlineQrcode } from "react-icons/ai";
import DeleteIcon from '@mui/icons-material/Delete';
import './bags.css'
import Carousel from 'react-material-ui-carousel';
import CarouselSlide from 'react-material-ui-carousel';


const OneBag = ({bag}) => { 
  
    const dispatch = useDispatch()
    const history= useHistory()
   {/*  useEffect(() => {
      dispatch(getbags())
         }, [])*/}

         const loading = useSelector(
          (state) => state.bagReducer.isLoading
        );

        const bags=useSelector((state)=>state.bagReducer.bags)
    const handleDelete=(id)=>{
      if (window.confirm("Are you sure wanted to delete this bag? "))
      dispatch(deletebag(id))
    }
    return loading? (
      <Loader animation='grow' />
    ) : (

        <div className="cardbg" >







     <Flippy  flipOnClick={false} flipOnHover={true} flipDirection="vertical" className='username'  >
<FrontSide >
        <div className="container">
<div className="imag">
<Carousel  autoPlay={false} style={{height : "200px",width : "100%"}}>
             <CarouselSlide>
                     {bag.image.map((img) => (

<img src={img} className="img-responsive"  alt="bag"width="295" height="200" style={{marginLeft:-25,marginTop:-45}} />
                ))}
                </CarouselSlide>
            </Carousel>
{/*<img src={bag.image} alt="img" width="295" height="290" style={{marginLeft:-25,marginTop:-45}}/>*/}
</div>
<h3 className="namebag" style={{fontSize:35,color:"black",marginRight:150,marginTop:-10}}> {bag.namebag}</h3>
<span style={{color:"red",marginTop:60,marginLeft:152}}></span>{bag.price} dt <span style={{color:"red",textDecoration:"line-through "}}> {bag.pricebefore} dt</span>
{/* <img src={`/uploads/${bag.image}`} alt="bag" height="150"/>
*/} 



        </div>

        </FrontSide>
        {/*backside of bag*/}
        <BackSide >
            <div className="container">
            <div className='profil'>  
              
          <span style={{color:"white"}}>   {bag.likes && bag.likes.length }     <AiTwotoneHeart fontSize="20" color="red"/> 
         </span>          
                          </div>
                          <ul>
                            <li style={{color:"white"}}><span> Adresse: </span>{bag.adresse}</li>
                            <li style={{color:"white"}}> <span>published by:</span> {bag.storekeeper}</li>
                            <li> <span>{bag.comments.text}</span></li>
           <li style={{color:"white"}}><span style={{color:"red", fontSize:"20px"}}>expired at : </span>{moment(bag.expirationDate).format('DD/MM/YYYY')}</li> 
          
                          </ul>
           
        
            </div>
            <div style={{marginTop:90}} >

                  <Button style={{color:"green", backgroundColor: "transparent",border:"white"}}
                      onClick={()=>history.push(`/Editbag/${bag._id}`)}><AiOutlineEdit/>
                                    edit
                   </Button>
          </div>
          <div style={{ paddingLeft:190,marginTop:-25}}>
          <Button style={{color:"red",  backgroundColor: "transparent",border:"white"}}  onClick={()=>handleDelete(bag._id)}> <AiOutlineDelete/>
            delete
          </Button>
          </div>
          <div>
          <Button style={{color:"blue",  backgroundColor: "transparent",border:"white"}} onClick={()=>history.push('/qrcode')}> <AiOutlineQrcode/>
            Qr code
          </Button>
          </div>
        
        </BackSide>
    </Flippy>
         {/** <Button size="small" color="primary" 
  onClick={() => dispatch(likePost(bag._id))}><ThumbUpAltIcon fontSize="small" />
   Like {bag.likeCount} </Button>*/} 
      
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

export default OneBag