import React, { useEffect } from "react";
import { useHistory } from "react-router"

import "./profile.css";
import EditIcon from "@mui/icons-material/Edit";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProfil } from "../../JS/actions/profilAction";
import { Button} from 'semantic-ui-react'
import { AiOutlineDelete,AiOutlineEdit } from "react-icons/ai";
import {FaMapMarkerAlt} from "react-icons/fa"

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  const history= useHistory()

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getProfil())
  }, [])
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


   {/* <div className="page-content page-container" id="page-content">
      <div class="back-button" style={{marginTop:"-245px"}}>
  <div class="arrow-wrap"   onClick={()=> history.push('/dashadmin')}>
    <span class="arrow-part-1"></span>
    <span class="arrow-part-2"></span>
    <span class="arrow-part-3"></span>
  </div>
</div>
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card1 user-card-full">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-4 bg-c-lite-green user-profile">
                  <div className="card-block text-center text-white">
                    <div className="m-b-25">
                        <img
                          width="20%"
                          src={user && user.avatar}
                          className="img-radius"
                          alt="avatar"
                        />
                      
                    </div>
                    <h6 className="f-w-600">
                      {user&& user.name}{" "}
                      {user && user.email}
                    </h6>
                    <p>Adresse: {user && user.adresse}</p>
                
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-block">
                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                      About me
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                      <span>  Email:
                        <h6 className="text-muted f-w-400">
                          {user && user.email}
                        </h6></span>
                      </div>
                      
                    </div>
                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
Details                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Born in : {user && user.dateofbirth}</p>

                        <h6 className="text-muted f-w-400">
                         Gender: {user && user.gender}

                          {" "}
                        </h6>
                       
                      </div>
                   
                      <div className="col-sm-6">
                      <Button style={{color:"green", backgroundColor: "transparent",border:"white"}}
                      onClick={()=>history.push("/Editprofil")}><AiOutlineEdit/>
                                    edit
                   </Button>
                      </div>
                    </div>
                    <ul className="social-link list-unstyled m-t-40 m-b-10">
                      <li>
                        <a
                          href="#!"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title
                          data-original-title="facebook"
                          data-abc="true"
                        >
                          <i
                            className="mdi mdi-facebook feather icon-facebook facebook"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title
                          data-original-title="twitter"
                          data-abc="true"
                        >
                          <i
                            className="mdi mdi-twitter feather icon-twitter twitter"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title
                          data-original-title="instagram"
                          data-abc="true"
                        >
                          <i
                            className="mdi mdi-instagram feather icon-instagram instagram"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>*/}
