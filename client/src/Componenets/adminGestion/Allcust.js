import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllCust } from "../../JS/actions/adminAction";
import Sidebar from '../dashAdmin/sidebar/Sidebar'
import Cust from "./Cust";
import './cust.css'

const CustList = () => {
  const custList = useSelector((state) => state.adminReducer.custs);

  const dispatch = useDispatch();

  useEffect(() => {
   
      dispatch(getAllCust());

  }, [dispatch]);

  return (
    <div>
      <Sidebar/>
      <div style={{marginLeft:"350px", justifyContent:"space-around",margin:"30"}}>
      <h2> List Of Customer</h2>{" "}
      <div className="list">
      {custList && custList.map(e=><Cust cust={e} key={e._id}/>)}

      </div>
      </div>
    </div>
  );
};

export default CustList;