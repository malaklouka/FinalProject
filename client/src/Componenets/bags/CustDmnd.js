//list of custdmnd 
import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Add from './addbag'
import { Route, Switch } from 'react-router';
import { getdemandes } from '../../JS/actions/demandes'
import Dmd from './dmd'


const CustDmnd = () => {
    const CustD = useSelector(state => state.dmndReducer.demande)
    const dispatch =useDispatch();
    useEffect(() => {
        dispatch(getdemandes())
    }, [dispatch])
  
    return (
        <div>
      <div className="test">
    

        <div style={{display:'flex' , justifyContent:"space-between" ,margin:30}}>
            {CustD.map(e=><Dmd demande={e} key={e._id}/>)}
<Switch>
<Route exact path='/addUser' component={Add}/>

</Switch>      
        </div>
        </div>
        </div>
        
    )
}

export default CustDmnd
