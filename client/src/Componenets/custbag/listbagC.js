import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getbags } from '../../JS/actions/bag'
import BagDetails from './bagDetails'
import { Paper } from '@material-ui/core'
import useStyles from '../styles';
import Search from '../search'
import "./custbag.css"
import Loader from '../spinneer'


//list bag
const BagListC= () => {
    const BagsList = useSelector(state => state.bagReducer.bags)
    const dispatch =useDispatch();
    const classes = useStyles();
    const loading = useSelector(
      (state) => state.bagReducer.isLoading
    );
    useEffect(() => {
        dispatch(getbags())
    }, [dispatch])
    
  
    
    return (
        <div>
<Search/>
<h2 className="thebags" style={{marginLeft:"450px"}}>The Bags</h2>

        <div style={{display:'flex' , justifyContent:"space-between" ,margin:80, flexWrap:"wrap"}}>
            {loading?<Loader/>:BagsList.map(e=><BagDetails bag={e} key={e._id}/>)}
            <div>

           <Paper  className={classes.pagination} elevation={6}>
{/*<Pagination page={page} />*/}

     </Paper>
 
      </div>

        </div>
    {/*    {!_.isEmpty(BagsList.data) && (

<ReactPaginate
  pageCount={Math.ceil(BagsList.count / 18)}
  pageRangeDisplayed={2}
  marginPagesDisplayed={1}
  onPageChange={(data) => FetchData(data.selected + 1)}
  containerClassName={"pagination"}
/>
)} */}
        </div> 
    )
}

export default BagListC

