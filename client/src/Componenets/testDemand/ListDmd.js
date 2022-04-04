import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getdemandes} from '../../JS/actions/demandes'
import Dmd from "./Dmd"
import {  ListGroup } from 'react-bootstrap';

const ListDmd = () => {
    const bagD=useSelector(state=>state.demandeReducer.demandes)
    const dispatch =useDispatch();
    useEffect(() => {
        dispatch(getdemandes())
    }, [dispatch])
    return (
        <div>
<div className="container" style={{display:"flex"}}>            <ListGroup.Item>
            <h2>Demand of customers</h2>
          
              <ListGroup variant="flush">
                  <ListGroup.Item>
            {bagD.map(e=><Dmd bagd={e} key={e._id}/>)}
            </ListGroup.Item>
              </ListGroup>
            
          </ListGroup.Item>
            </div>
        </div>
    )
}

export default ListDmd
