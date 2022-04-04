import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getbags } from '../../JS/actions/bag'
import Add from './addbag'
import OneBag from './Bag'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Route, Switch } from 'react-router';
import {  useLocation } from 'react-router-dom';

import './bags.css'
import Loader from '../spinneer'
import { Paper } from '@material-ui/core'
import Paginate from '../Pagination'
import useStyles from './styles';


//list bag
function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
const BagList = () => {
    const BagsList = useSelector(state => state.bagReducer.bags)
  const isLoading = useSelector(state => state.bagReducer.isLoading)
  const query = useQuery();
  const classes = useStyles();


  const page = query.get('page') || 1;

    
    const dispatch =useDispatch();
    useEffect(() => {
        dispatch(getbags())
    }, [dispatch])
  
    return (
        <div>

      <div className="addbtn">
          <div className="buttons">
          <Link to="/addUser">
    <Button className="aj ajout" style={{marginTop:100,marginLeft:550}}> 
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
        <Paper className={classes.pagination} elevation={6}>
                <Paginate page={page} />
              </Paper>
        </div>
        
    )
}

export default BagList