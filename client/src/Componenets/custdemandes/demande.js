import React, { useEffect, useState } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import { Link } from 'react-router-dom'
import { useHistory, useParams } from "react-router"
import BasicAlerts from '../alert'
import moment from 'moment';
import Loader from '../spinneer'
import Navbar from '../Navbar'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Col, ListGroup, Row } from 'react-bootstrap'
import Dlist from './list'

toast.configure();

//storek manage cust demandes:accept/delete


const OneDemande = () => { 
    const dispatch = useDispatch()
    const history= useHistory()

    const demand=useSelector(state=>state.demandeReducer.demandes)
    return (
    <div style={{margin:80}}>
      {(demand || []).map(e=><Dlist dem={e} key={e._id}/>)}
{/*<h6> {demand.map(el=>el._id)}</h6>
*/}
 
{/* <div>
                        {(demand || []).map((e, index) => (
                          <div key={`Key${index}`}>
                             
                              
                              {e.items.map(e=><Dlist demnd={e} key={e._id}/>)}

                             
                            
                          </div>
                        ))}
                      </div>*/}


       
         



    </div>)}

export default OneDemande