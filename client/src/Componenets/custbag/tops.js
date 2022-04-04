import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {  topbag } from '../../JS/actions/bag'
import "./custbag.css"
import Loader from '../spinneer'
import Topbags from './Topbag'
import { Divider } from 'semantic-ui-react'


//list bag
const Tops= () => {
    const bagTop = useSelector((state) => state.topReducer.topbags)

    const dispatch =useDispatch();
    const loading = useSelector(
      (state) => state.topReducer.isLoading
    );
    useEffect(() => {
        dispatch(topbag())
    }, [dispatch])
    
  
    
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

