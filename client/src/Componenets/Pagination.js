import React, { useEffect } from 'react'
import {Pagination , PaginationItem} from '@material-ui/lab'
import useStyles from './styles'
import {Link } from 'react-router-dom'
import { getBags } from '../JS/actions/bag'
import { useDispatch, useSelector } from 'react-redux'

const Paginate = ({page}) => {
    const numberOfPages=useSelector((state)=>state.bagReducer.bags)
   const dispatch=useDispatch()
   useEffect(()=>{ if (page){ dispatch(getBags(page)
    )}},[dispatch,page])
    const classes=useStyles()
    return (
        <div>
            <Pagination classes={{ul:classes.ul}}
            count={numberOfPages}
            page={Number(page)||1}
            variant=""outlined
            color="primary"
            renderItem={(item)=>(
                <PaginationItem {...item} component={Link} 
to={`/custbag?page=${item.page}`}/>

            )}/>
        </div>
    )
}

export default Paginate
