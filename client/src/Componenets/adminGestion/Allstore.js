import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllStore } from "../../JS/actions/adminAction";
import Sidebar from '../dashAdmin/sidebar/Sidebar'

import Store from "./Stor";
import './store.css'

const StoreList = () => {
  const storeList = useSelector((state) => state.userReducer.store);

  const dispatch = useDispatch();

  useEffect(() => {
   
      dispatch(getAllStore());

  }, [dispatch]);

  return (
    <div>
      <Sidebar/>
      <h1 className="storek" style={{marginLeft:"450"}}> List Of Storekeeper</h1>{" "}
      <div className="listStorek">
      {storeList && storeList.map(e=><Store store={e} key={e._id}/>)}

      </div>
    </div>
  );
};

export default StoreList;