//list of custdmnd 
import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getbags } from '../../JS/actions/bag'
import Add from './addbag'
import OneBag from './Bag'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Route, Switch } from 'react-router';
import { getdemandes } from '../../JS/actions/demandes'
import Dmd from './dmd'


const CustDmnd = () => {
    const CustD = useSelector(state => state.dmndReducer.demande)
    const dispatch =useDispatch();
    useEffect(() => {
        dispatch(getdemandes())
    }, [])
  
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
