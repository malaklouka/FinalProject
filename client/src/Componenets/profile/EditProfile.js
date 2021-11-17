import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {  editProfile, getUser } from "../../JS/actions/profilAction";
import { TextField } from "@material-ui/core";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import Box from '@mui/material/Box';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const EditProfile = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.userReducer.user);
    const history=useHistory()

      
  useEffect(() => {
    dispatch(getUser()); 
  }, []);


  
  useEffect(()=>{
    if (profile){
    setState({...profile})
    }
    },[profile]) 

    const [state, setState] = useState({
        name:"",
      email:"",
      adresse:"",
      dateofbirth:"",
      avatar:""

        }
      )
     const {name,email,adresse,dateofbirth,avatar}=state;

    
    

 


  const handleInputChange=(e)=>{
    let {name,value}=e.target
    setState({...state,[name]:value})
  }

  const handleSubmit= (e)=>{
      e.preventDefault();
  
dispatch(editProfile(profile._id,state,history))
history.push("/profile")
toast.success('HOLAS! the profil is updated with success :) ');
 
//editBag


 }
    return (
        <div>
          <div class="back-button" style={{marginTop:"-245px"}}>
  <div class="arrow-wrap"   onClick={()=> history.push('/profile')}>
    <span class="arrow-part-1"></span>
    <span class="arrow-part-2"></span>
    <span class="arrow-part-3"></span>
  </div>
</div>
             <Form onSubmit={handleSubmit} >
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
        <TextField
          id="outlined-multiline-flexible"
          label="Name"
          multiline
          maxRows={4}
         name="name"   value={name || "" }
          onChange={handleInputChange}
        />
          <TextField
         id="outlined-multiline-flexible"
         label="email"
         multiline
         rows={4}
          name="email"   value={email || "" }
          onChange={handleInputChange}
        />
           <TextField
         id="outlined-multiline-flexible"
         label="adresse"
         multiline
         rows={4}
          name="adresse"   value={adresse || "" }
          onChange={handleInputChange}
        />
           <TextField
         id="outlined-multiline-flexible"
         label="dateofbirth"
         multiline
         rows={4}
          name="dateofbirth"   value={dateofbirth || "" }
          onChange={handleInputChange}
        />
         <TextField
         id="outlined-multiline-flexible"
         label="avatar"
         multiline
         rows={4}
          name="avatar"   value={avatar || "" }
          onChange={handleInputChange}
        />
</Box>         
     
<Form.Field
          id="form-button-control-public"
          control={Button}
          content="Update" 
          onChange={handleInputChange}

        />
      </Form>
        </div>
    )
}

export default EditProfile
