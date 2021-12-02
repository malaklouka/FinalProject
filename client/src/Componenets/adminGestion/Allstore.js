
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllStore } from "../../JS/actions/adminAction";
import Sidebar from '../dashAdmin/sidebar/Sidebar'

import Store from "./Stor";
import './store.css'

const StoreList = () => {
  const storeList = useSelector((state) => state.adminReducer.stores);

  const dispatch = useDispatch();

  useEffect(() => {
   
      dispatch(getAllStore());

  }, [dispatch]);

  return (
    <div>
      <Sidebar/>
      <div style={{marginLeft:"550px"}}>
      <h2> List Of Storekeeper</h2>{" "}
      <div className="listStorek">
      {storeList && storeList.map(e=><Store store={e} key={e._id}/>)}

      </div>
      </div>
    </div>
  );
};

export default StoreList;