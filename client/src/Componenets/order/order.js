import React, { useEffect } from "react";
import OrderItem from "./OrderItem";

import { useDispatch, useSelector } from "react-redux";
import {  getMyorders } from "../../JS/actions/order";

const Orders = () => {

    const Order = useSelector(state => state.orderReducer.orders)
const dispatch = useDispatch()
  useEffect(() => {
   dispatch( getMyorders());
  }, [dispatch]);

  
    return (
      <div className="section-grid-2" >
       <div style={{display:'flex' , justifyContent:"space-between" ,margin:30}}>
            {Order.map(e=><OrderItem order={e} key={e._id}/>)}
            </div>
      </div>
    );
  }



export default Orders;