import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getbags } from '../../JS/actions/bag'
import Add from './addbag'
import OneBag from './Bag'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Route, Switch } from 'react-router';
import './bags.css'
import Navbar from '../Navbar'
import Loader from '../spinneer'

//list bag

const BagList = () => {
    const BagsList = useSelector(state => state.bagReducer.bags)
  const isLoading = useSelector(state => state.bagReducer.isLoading)

    
    const dispatch =useDispatch();
    useEffect(() => {
        dispatch(getbags())
    }, [])
  
    return (
        <div>

      <div className="addbtn">
          <div className="buttons">
          <Link to="/addUser">
    <Button className="aj ajout" style={{marginTop:100,marginLeft:450}}> 
    Add
    </Button>
</Link>
</div>
        <div style={{display:'flex' , justifyContent:"space-between" ,margin:30, flexWrap:"wrap"}}>
            {isLoading?<Loader/>:BagsList.map(e=><OneBag bag={e} key={e._id}/>)}
<Switch>
<Route exact path='/addUser' component={Add}/>

</Switch>      
        </div>
        </div>
        </div>
        
    )
}

export default BagList