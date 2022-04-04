import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getMydmnd } from '../../JS/actions/demandes'
import Mesdmd from './mesdmd'
import { ListGroup } from 'react-bootstrap';




const MyList = () => {
    const bagD=useSelector(state=>state.demandeReducer.demandes)
    const dispatch =useDispatch();
    
    useEffect(() => {
        dispatch(getMydmnd())
    }, [dispatch])
    return (
        <div>
      <div className="container" style={{display:"flex"}}>            <ListGroup.Item>
            <h2>Demand of customers</h2>
          
              <ListGroup variant="flush">
                  <ListGroup.Item>     
                             {bagD.map(e=><Mesdmd bagd={e} key={e._id}/>)}
</ListGroup.Item>
              </ListGroup>
            
          </ListGroup.Item>
            </div>
        </div>
    )
}

export default MyList
