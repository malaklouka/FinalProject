import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getdemandes} from '../../JS/actions/demandes'
import Dmd from "./Dmd"
const ListDmd = () => {
    const bagD=useSelector(state=>state.bagReducer.bags)
    const dispatch =useDispatch();
    useEffect(() => {
        dispatch(getdemandes())
    }, [])
    return (
        <div>
            <div >
            {bagD.map(e=><Dmd bagd={e} key={e._id}/>)}
            </div>
        </div>
    )
}

export default ListDmd
