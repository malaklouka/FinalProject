import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllCust } from "../../JS/actions/user";

import OneStorek from "../storekList/OneStorek";

const CustList = () => {
  const user = useSelector((state) => state.userReducer.user);
  const cust = useSelector((state) => state.userReducer.cust);
  const loadUser = useSelector((state) => state.userReducer.loadUser);
  const errors = useSelector((state) => state.userReducer.errors);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.role === "admin") {
      dispatch(getAllCust());
    }
  }, [dispatch, user]);

  return user && user.role === "admin" ? (
    <div>
      {loadUser ? (
        <CircularProgress />
      ) : errors ? (
        <h2>errors to fetch user</h2>
      ) : cust && cust.length === 0 ? null : (
        <div>
          <h2 className="title-chefProject">Client List</h2>{" "}
          <div className="listChef">
            {cust && cust.map((el) => <OneStorek storek={el} key={el._id} />)}
          </div>
        </div>
      )}
    </div>
  ) : null;
};

export default CustList;