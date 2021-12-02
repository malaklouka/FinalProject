import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import PaymentView from '../../views/PaymentView'
import moment from 'moment';
import { deleteDemande } from '../../JS/actions/demandes'
import { AiOutlineDelete } from "react-icons/ai";



const Mesdmd = ({bagd}) => {
    const history=useHistory();
    const dispatch = useDispatch()

    const bagdm=useSelector(state=>state.demandeReducer.demandes)
    const handleDelete=()=>{
        if (window.confirm("Are you sure wanted to delete this demande? "))
        dispatch(deleteDemande(bagd._id))
      }
    const handleChange = () => {
        if (bagd && !bagd.isAccepted) {
 
            history.push('/payment')          }
      }; 
  

    return (
        <div>



                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">

                                            </div>

       <div class="font-medium text-gray-800" >

           
           {bagd.namebag} {""}</div>           

   
                       



                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">{bagd.price}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">{bagd.quantity}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{moment(bagd.updatedAt).format('DD/MM/YYYY')}</div>
                                </td>
                              <td>  <Button style={{color:"red",  backgroundColor: "transparent",border:"white"}}  onClick={()=>handleDelete()}><AiOutlineDelete/>
    delete
  </Button></td>
                                <td>   <Button style={{color:"red",  backgroundColor: "white",border:"white"}}  onClick={()=>handleChange()}>
    pay
  </Button></td>
                            </tr>
                         
                            
                           
                       
                        </tbody>
            




        </div>
    )
}

export default Mesdmd
