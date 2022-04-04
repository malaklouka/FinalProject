import React, { useEffect } from "react";
import { useHistory } from "react-router"

import "./profile.css";

import { useDispatch, useSelector } from "react-redux";
import { getProfil } from "../../JS/actions/profilAction";
import { AiOutlineEdit } from "react-icons/ai";
import {FaMapMarkerAlt} from "react-icons/fa"

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  const history= useHistory()

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getProfil())
  }, [dispatch])
  return user && user ? (
<div>
  <div class="wrapper">
  <div class="profile-card js-profile-card">
    <div class="profile-card__img">
      <img src={user && user.avatar} alt="profile card"/>
    </div>

    <div class="profile-card__cnt js-profile-cnt">
      <div class="profile-card__name">{user&& user.name}
</div>
      <div class="profile-card__txt">Email :<strong> {user&& user.email}
</strong></div>
      <div class="profile-card-loc">
        <span class="profile-card-loc__icon">
<FaMapMarkerAlt/>        </span>

        <span class="profile-card-loc__txt">
        {user&& user.adresse}
        </span>
      </div>


      

      <div class="profile-card-ctr">
    
        <button class="profile-card__button button--blue js-message-btn"style={{color:"#b70ac3", backgroundColor: "transparent",border:"white"}}
                      onClick={()=>history.push("/Editprofil")}><AiOutlineEdit/>Edit Profile</button>
      </div>
    </div>

    <div class="profile-card-message js-message">
      <form class="profile-card-form">
        <div class="profile-card-form__container">
          <textarea placeholder="Say something..."></textarea>
        </div>

        <div class="profile-card-form__bottom">
          <button class="profile-card__button button--blue js-message-close">
            Send
          </button>

          <button class="profile-card__button button--gray js-message-close">
            Cancel
          </button>
        </div>
      </form>

      <div class="profile-card__overlay js-message-close"></div>
    </div>

  </div>

</div>





</div>


) : (
    <h2>Profile is not Created Yet</h2>
  );
};

export default Profile;


  
