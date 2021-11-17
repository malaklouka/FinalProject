import React, { useEffect } from "react";
import { useHistory } from "react-router"

import "./profile.css";
import EditIcon from "@mui/icons-material/Edit";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProfil } from "../../JS/actions/profilAction";
import { Button} from 'semantic-ui-react'
import { AiOutlineDelete,AiOutlineEdit } from "react-icons/ai";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  const history= useHistory()

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getProfil())
  }, [])
  return user && user ? (
    <div className="page-content page-container" id="page-content">
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
                          src="http://mufonfrance.com/wp-content/uploads/2019/10/chat-lunettes-12.jpg"
                          className="img-radius"
                          alt="avatar"
                        />
                      
                    </div>
                    <h6 className="f-w-600">
                      {user&& user.name}{" "}
                      {user && user.email}
                    </h6>
                    <p>Adresse: {user && user.adresse}</p>
                  {/*  {user && user.role == "chef-projet" ? (
                      <Link to={`/addProfile/${profile.id_chef._id}`}>
                        <EditIcon
                          onClick={() => dispatch(isEditProfile(true))}
                        />
                      </Link>
                  ) : null}{" "}*/}
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
    </div>
  ) : (
    <h2>Profile is not Created Yet</h2>
  );
};

export default Profile;