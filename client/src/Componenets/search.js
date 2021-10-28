import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getbags, getOnebag } from "../JS/actions/bag";
import { useHistory, useLocation } from "react-router-dom";
import BagDetails from '../Componenets/custbag/bagDetails';
import { Row, Col } from 'react-bootstrap';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import moment from 'moment';
import { Icon, Card } from 'antd';
import OneBag from "./bags/Bag";



function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
 

  const query = useQuery();

  const searchQuery = query.get("searchQuery");
  const searchedbags = useSelector((state) => state.bagReducer.bags);
const isLoading=useSelector((state)=>state.bagReducer.isLoading)
  const dispatch = useDispatch();
  
  const [adresse, setAdresse] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    dispatch(getbags())

  }, []);
  const history = useHistory();


  const searchBag = () => {
    if (adresse.trim()) {
      dispatch(getOnebag({ adresse }));
      history.push(`/custbag/search?searchQuery=${adresse}`);
      


    } else {
      history.push("/");
    }
    setAdresse("");
  };
 
  const handleSearchBtn = (e) => {
    e.preventDefault();
    searchBag();

    //the enterkey
  { /* if (e.keyCode === 13) {
      searchBag();
    }*/}
  };
 


  return (
    
  
  <div class="form-group tm-form-element tm-form-element-2" style={{marginTop:15, display:"flex",width:350}}>
                              <select name="rooms" class="form-control tm-select" id="room" onChange={(e) => setAdresse(e.target.value)} style={{ height: "40px" }}>
                              <option selected disabled>Adresse</option>
                                            <option value="Ariana" >Ariana</option>
                                            <option value="Béja" >Béja</option>
                                            <option value="Ben Arous" >Ben Arous</option>
                                            <option value="Bizerte" >Bizerte</option>
                                            <option value="Gabès" >Gabès</option>
                                            <option value="Gafsa" >Gafsa</option>
                                            <option value="Jendouba" >Jendouba</option>
                                            <option value="Kairouan" >Kairouan</option>
                                            <option value="Kasserine" >Kasserine</option>
                                            <option value="Kébili" >Kébili</option>
                                            <option value="Le Kef" >Le Kef</option>
                                            <option value="Mahdia" >Mahdia</option>
                                            <option value="La Manouba" >La Manouba</option>
                                            <option value="Médenine" >Médenine</option>
                                            <option value="Monastir" >Monastir</option>
                                            <option value="Nabeul" >Nabeul</option>
                                            <option value="Sfax" >Sfax</option>
                                            <option value="Sidi Bouzid" >Sidi Bouzid</option>
                                            <option value="Siliana" >Siliana</option>
                                            <option value="Sousse" >Sousse</option>
                                            <option value="Tataouine" >Tataouine</option>
                                            <option value="Tozeur" >Tozeur</option>
                                            <option value="Tunis">Tunis</option>
                                            <option value="Zaghouan" >Zaghouan</option>
                              </select>
                              <button
                                style={{
                                  background: "none",
                                  color: "red",
                                }}
                                onClick={handleSearchBtn}
                                
                                class="btn btn-primary-filter tm-btn-search"
                              >
                                Filter
                              </button>


  
                      
                      </div>
                 

);
};
export default Search;
