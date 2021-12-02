import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import BlockIcon from "@mui/icons-material/Block";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";

import {
  deleteUser,
  updateBannedUser,
} from "../../JS/actions/adminAction";

const Cust = ({ cust }) => {
  const userr = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
 

  const handleBanned = () => {
    const confirmBox = window.confirm("Are You sure to bann user?");
    if (confirmBox) {
      return dispatch(updateBannedUser(cust._id));
    }
  };

  const handleDelete = () => {
    const confirmBox = window.confirm("Are You sure to delete user?");
    if (confirmBox) {
      return dispatch(deleteUser(cust._id));
    }
  };
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 m-3">
      {userr && userr.role == "admin" ? (
        <div className="our-team">
          <div className="m-b-25">
                      {cust && cust.gender == "female" ? (
                        <img
                          width="20%"
                          src="https://cdn1.iconfinder.com/data/icons/avatar-11/76/5-512.png"
                          className="img-radius"
                          alt="femal"
                        />
                      ) : (
                        <img
                          src="https://img.icons8.com/bubbles/100/000000/user.png"
                          className="img-radius"
                          alt="User-Profile"
                        />
                      )}
                    </div>

          <div className="team-content">
            <h3 className="name">{cust.name}</h3>
            <h4 className="title">{cust.email}</h4>
          </div>
        
          {!cust.banned ? (
            <BlockIcon style={{ fill: "green" }} onClick={handleBanned} />
          ) : (
            <BlockIcon style={{ fill: "red" }} onClick={handleBanned} />
          )}
          <DeleteOutlineOutlined onClick={handleDelete} />
        </div>
      ) : (
        <Link to={`/profile/${cust._id}`}>
          <div className="our-team">
            <div className="picture">
              <img
                className="img-fluid"
                src="https://picsum.photos/130/130?image=1027"
                alt="profile"
              />
            </div>
            <div className="team-content">
              <h3 className="name">{cust.name}</h3>
              <h4 className="title">{cust.lastName}</h4>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Cust;