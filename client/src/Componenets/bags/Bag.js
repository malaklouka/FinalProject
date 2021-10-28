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
import { AiOutlineDelete,AiOutlineEdit,AiOutlineLike,AiTwotoneHeart,AiOutlineHeart } from "react-icons/ai";
import DeleteIcon from '@mui/icons-material/Delete';
import './bags.css'
import { Carousel } from 'react-bootstrap'



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

        <div className="cardbg">







     <Flippy  flipOnClick={false} flipOnHover={true} flipDirection="vertical" className='username' >
<FrontSide >
        <div className="container">
<div className="imag">
<img src= {bag.image} alt="img" width="295" height="290" style={{marginLeft:-25,marginTop:-45}}/>
</div>


<h3 style={{fontSize:35,color:"#FFA500",marginRight:150,marginTop:-10}}> {bag.namebag}</h3>
<span style={{color:"red",marginTop:60,marginLeft:152}}></span>{bag.price} dt <span style={{color:"red",textDecoration:"line-through "}}> {bag.priceBefore} dt</span>
{/* <img src={`http://localhost:3000/uploads/${bag.image}`} alt="bag" height="150"/>
*/} 



        </div>

        </FrontSide>
        {/*backside of bag*/}
        <BackSide >
            <div className="container">
            <div className='profil'>  
              
          <span>    <AiTwotoneHeart fontSize="20" color="red"/> 
    {bag.likeCount}  </span>          
                          </div>
                          <ul>
                            <li><span style={{color:"red"}}> Adresse: </span>{bag.adresse}</li>
                            <li> <span style={{color:"red"}}>category:</span> {bag.category}</li>
           <li><span style={{color:"red"}}>expired at : </span>{moment(bag.expirationDate).format('DD/MM/YYYY')}</li> 
          
                          </ul>
           
        
            </div>
            <div style={{marginTop:90}} >

                  <Button style={{color:"green", backgroundColor: "white",border:"white"}}
                      onClick={()=>history.push(`/Editbag/${bag._id}`)}><AiOutlineEdit/>
                                    edit
                   </Button>
          </div>
          <div style={{ paddingLeft:190,marginTop:-25}}>
          <Button style={{color:"red",  backgroundColor: "white",border:"white"}}  onClick={()=>handleDelete(bag._id)}> <AiOutlineDelete/>
            delete
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