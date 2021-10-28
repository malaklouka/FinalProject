import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getdemandes } from '../../JS/actions/demandes'
import OneDemande from './demande'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Route, Switch } from 'react-router';
import Navbar from '../Navbar'


//list bag

const Demandelist= () => {
    const demandeList= useSelector((state) => state.demandeReducer.demandes)
  const isLoading = useSelector((state) => state.demandeReducer.isLoading)
   const dispatch =useDispatch();
  
  
    return (
        <div>

      <div className="dmnd">
       

     
            <OneDemande/>
        
       
        </div>
        </div>
        
    )
}
export default Demandelist