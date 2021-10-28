import React, { useState } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux"

import { useHistory } from 'react-router-dom'
import Loader from '../spinneer'
import moment from 'moment';
import { acceptDemande, deleteDemande } from '../../JS/actions/demandes'
import { Row, Col, ListGroup } from 'react-bootstrap';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const Dlist = ({dem}) => { 
    const dispatch = useDispatch()
     

 const history=useHistory();
 const demandAcc=useSelector(state=>state.demandeReducer.demandes)


const handleDelete=()=>{
      if (window.confirm("Are you sure wanted to delete this demande? "))
      dispatch(deleteDemande(dem._id))
    }

    const handleChange = () => {
      if (demandAcc && !demandAcc.isAccepted) {
        return toast.warning("demande is already accepted ");
      } else {
        const confirmBox = window.confirm("Are You sure to accept this demande?");
        if (confirmBox) {
          return dispatch(acceptDemande(dem._id));
        }
      }
    }; 


    return (
        <div>



        <div className="container" style={{display:"flex"}}>

            
            <ListGroup.Item>
                    <h2>Demand Items</h2>
                  
                      <ListGroup variant="flush">
                          <ListGroup.Item>
                              {dem.items.map((itemd)=>(
                                                            <Row>

<Col>
 
    {itemd.namebag}
 
</Col>
<Col md={4}>
  {itemd.quantity} x dt{itemd.price} = ${itemd.quantity * itemd.price}
</Col>                             </Row>

                              ))}
                            
                          </ListGroup.Item>
                      </ListGroup>
                    
                  </ListGroup.Item>


            <Button style={{color:"red",  backgroundColor: "white",border:"white"}}  onClick={()=>handleDelete(dem._id)}>
            delete
          </Button>
          
          
          <Button onClick={()=>handleChange(dem._id)}>Accept</Button>

        </div>

       





          
           
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


export default Dlist