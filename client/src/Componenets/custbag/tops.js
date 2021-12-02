import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getbags, topbag } from '../../JS/actions/bag'
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
import Topbags from './Topbag'
import { Divider } from 'semantic-ui-react'


//list bag
const Tops= () => {
    const bagTop = useSelector((state) => state.topReducer.topbags)

    const dispatch =useDispatch();
    const classes = useStyles();
    const loading = useSelector(
      (state) => state.topReducer.isLoading
    );
    useEffect(() => {
        dispatch(topbag())
    }, [])
    
  
    
    return (
        <div>
 <h3 className="recom" style={{color:"black",marginLeft:"450"}}>YOU MIGHT ALSO LIKE:</h3>
   <Divider />

        <div style={{display:'flex' , justifyContent:"space-between" ,margin:80, flexWrap:"wrap"}}>
            {loading?<Loader/>:bagTop.map(e=><Topbags bagtop={e} key={e._id}/>)}
            <div>

      
 
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

export default Tops

