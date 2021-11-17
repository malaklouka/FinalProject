import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import BlockIcon from "@mui/icons-material/Block";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";

import {
  deleteUser,
  getChef,
  updateBannedUser,
  updateChefStatus,
} from "../../JS/actions/user";

const OneStorek = ({ storek }) => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
 

  const handleBanned = () => {
    const confirmBox = window.confirm("Are You sure to bann user?");
    if (confirmBox) {
      return dispatch(updateBannedUser(storek._id));
    }
  };

  const handleDelete = () => {
    const confirmBox = window.confirm("Are You sure to delete user?");
    if (confirmBox) {
      return dispatch(deleteUser(storek._id));
    }
  };
  // ------------------------------------------
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 m-3">
      {user && user.role == "admin" ? (
        <div className="our-team">
          <div className="picture">
            <img
              className="img-fluid"
              src="https://picsum.photos/130/130?image=1027"
              alt="profile"
            />
          </div>

          <div className="team-content">
            <h3 className="name">{storek.name}</h3>
            <h4 className="title">{storek.email}</h4>
          </div>
        
          {!storek.banned ? (
            <BlockIcon style={{ fill: "green" }} onClick={handleBanned} />
          ) : (
            <BlockIcon style={{ fill: "red" }} onClick={handleBanned} />
          )}
          <DeleteOutlineOutlined onClick={handleDelete} />
        </div>
      ) : (
        <Link to={`/profile/${storek._id}`}>
          <div className="our-team">
            <div className="picture">
              <img
                className="img-fluid"
                src="https://picsum.photos/130/130?image=1027"
                alt="profile"
              />
            </div>
            <div className="team-content">
              <h3 className="name">{storek.name}</h3>
              <h4 className="title">{storek.lastName}</h4>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default OneStorek;