import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getbags } from '../../JS/actions/bag'
import BagDetails from './bagDetails'
import { Paper } from '@material-ui/core'
import Navbar from '../Navbar'
import ReactPaginate from "react-paginate";
import _ from "lodash";
import { useLocation } from 'react-router'
import useStyles from '../styles';
import Search from '../search'
import "./custbag.css"
import Loader from '../spinneer'

function useQuery(){
  return new URLSearchParams(useLocation().search)
}
//list bag
const BagListC= () => {
    const BagsList = useSelector(state => state.bagReducer.bags)
    const dispatch =useDispatch();
    const query=useQuery()
    const classes = useStyles();
    const loading = useSelector(
      (state) => state.bagReducer.isLoading
    );
   const page=query.get('page')||1;
    useEffect(() => {
        dispatch(getbags())
    }, [])
    
  
    
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

