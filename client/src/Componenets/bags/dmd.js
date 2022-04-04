import React, { useEffect } from 'react'
import { Button } from 'semantic-ui-react'
import { useDispatch } from "react-redux"
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import { getdemandes } from '../../JS/actions/demandes'

const Dmd = ({demande}) => { 
    const dispatch = useDispatch()
     useEffect(() => {
      dispatch(getdemandes())
         }, [dispatch])

   
    return (
        <div className="cardbg">
     <Flippy  flipOnClick={false} flipOnHover={true} flipDirection="vertical" className='username' >
<FrontSide >
        <div className="container">
          {/**         <ImageSlider images={bag.image} />
*/}

 {/**<img src={bag.image} alt="bag" height="150"/>*/}
        <h3 style={{fontSize:35,color:"#FF69B4"}}>Name:{demande.namebag}</h3>

        </div>

        </FrontSide>
        <BackSide >
            <div className="container">
            <div className='profil'>            
                          </div>
            
                          <h3 style={{fontSize:35,color:"#FF69B4"}}>Name:{demande.namebag}</h3>
        
            
            </div>
            <div className='ui two buttons'>
          <Button basic color='green'
        >
            edit
          </Button>
          <Button basic color='green'>
            delete
          </Button>
         {/** <Button size="small" color="primary" 
  onClick={() => dispatch(likePost(bag._id))}><ThumbUpAltIcon fontSize="small" />
   Like {bag.likeCount} </Button>*/} 
        </div>
        </BackSide>
    </Flippy>
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

export default Dmd