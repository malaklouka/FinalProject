import React from 'react'
import { useSelector } from "react-redux"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dlist from './list'

toast.configure();

//storek manage cust demandes:accept/delete


const OneDemande = () => { 
 

    const demand=useSelector(state=>state.demandeReducer.demandes)
    return (
    <div style={{margin:80}}>
      {demand.map(e=><Dlist dem={e} key={e._id}/>)}
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