import React from 'react'
import { Button } from 'semantic-ui-react'
import { useDispatch } from "react-redux"
import moment from 'moment';
import { acceptDemande, deleteDemande } from '../../JS/actions/demandes'
import { Row, Col } from 'react-bootstrap';
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const Dmd = ({bagd}) => {
    const dispatch = useDispatch()
     

   
   
   const handleDelete=()=>{
         if (window.confirm("Are you sure wanted to delete this demande? "))
         dispatch(deleteDemande(bagd._id))
       }
   
       const handleChange = () => {
         if (bagd && !bagd.isAccepted) {
           return toast.warning("demande is already accepted ");
         } else {
           const confirmBox = window.confirm("Are You sure to accept this demande?");
           if (confirmBox) {
             return dispatch(acceptDemande(bagd._id));
           }
         }
       }; 
   
    return (
      



<div>

    
  
                      
                                                    <Row>

<Col>

{bagd._id}

</Col>
<Col>

{bagd.user.name}

</Col>
<Col>

{bagd.user.email}

</Col>
<Col>

{bagd.user.adresse}

</Col>
<Col>
{moment(bagd.updatedAt).format('DD/MM/YYYY')}

</Col>
                           </Row>

                      
                    
              


    <Button style={{color:"red",  backgroundColor: "transparent",border:"white"}}  onClick={()=>handleDelete()}><AiOutlineDelete/>
    delete
  </Button>
  
  
  <Button style={{color:"green",  backgroundColor: "transparent",border:"white"}}  onClick={()=>handleChange()}>Accept</Button>

</div>

    )
}

export default Dmd
