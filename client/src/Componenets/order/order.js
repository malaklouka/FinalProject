import React, { useEffect, useContext } from "react";
import OrderItem from "./OrderItem";
import Spinner from "./Spinner";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, getMyorders } from "../../JS/actions/order";

const Orders = () => {

    const Order = useSelector(state => state.orderReducer.orders)
const dispatch = useDispatch()
  useEffect(() => {
   dispatch( getMyorders());
  }, []);

  
    return (
      <div className="section-grid-2" >
       <div style={{display:'flex' , justifyContent:"space-between" ,margin:30}}>
            {Order.map(e=><OrderItem order={e} key={e._id}/>)}
            </div>
      </div>
    );
  }



export default Orders;