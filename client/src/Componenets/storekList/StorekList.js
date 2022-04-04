import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllstorek } from "../../JS/actions/user";
import CustList from "../custList/CustList"
import "./ChefsList.css";

const StorekList= () => {
  const storekeepers = useSelector((state) => state.userReducer.storek);
  const user = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user);
    
      dispatch(getAllstorek());
    
  }, [dispatch, user]);

  return (
    <div>
      <h2 className="title">storekeeper List</h2>{" "}
      <div className="list">
        {storekeepers && storekeepers.map((el) => <storek storek={el} key={el._id} />)}
      </div>
      <CustList/>
    </div>
  );
};

export default StorekList;