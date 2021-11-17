import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllCust } from "../../JS/actions/adminAction";
import Sidebar from '../dashAdmin/sidebar/Sidebar'
import Cust from "./Cust";
import './cust.css'

const CustList = () => {
  const custList = useSelector((state) => state.userReducer.cust);

  const dispatch = useDispatch();

  useEffect(() => {
   
      dispatch(getAllCust());

  }, [dispatch]);

  return (
    <div>
      <Sidebar/>
      <h1 className="cust" style={{marginLeft:"450"}}> List Of Customer</h1>{" "}
      <div className="list">
      {custList && custList.map(e=><Cust cust={e} key={e._id}/>)}

      </div>
    </div>
  );
};

export default CustList;