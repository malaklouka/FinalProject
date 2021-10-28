import { TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import { editBag, getbagId } from "../../JS/actions/bag";
import Box from '@mui/material/Box';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();


//update existing bag 
const Editbag = () => {
    const dispatch = useDispatch()
    const history=useHistory()
    let {id}=useParams()
    const [state, setState] = useState({
      namebag:"",
      price:"",
      priceBefore:"",

      adresse:"",
      description :"",
      numProduct:"",
      category:"",
      expirationDate:"",
      }
    )
    

    const {namebag,adresse,description,price,priceBefore,category,availibiltyDate,status,numProduct,expirationDate}=state;

   const [error,setError]=useState("")
   const bag=useSelector((state)=>state.bagReducer.bags)

useEffect(() => {
dispatch(getbagId(id))    
}, [])

useEffect(()=>{
if (bag){
setState({...bag})
}
},[bag])

    const handleInputChange=(e)=>{
      let {name,value}=e.target
      setState({...state,[name]:value})
    }

    const handleSubmit= (e)=>{
        e.preventDefault();
      /*  if (!namebag || !adresse || !price || !expirationDate) {
            setError("the input are empty!")
  
          }
          else {}*/
  dispatch(editBag(id,state,history))
  toast.success('HOLAS! the bag is updated with success :) ');

  setError("")
      
//editBag


   }
  return (
    <div>
      <Button style={{ width: "100px", marginTop: "20px"}} variant="contained" color="black" 
      onClick={()=> history.push('/bags')}> back 
      </Button>
      <h3>Edit bag</h3>
      {error && <h3 style={{color:"red"}}> {error}</h3>}
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
          label="NameBag"
          multiline
          maxRows={4}
         name="namebag"   value={namebag || "" }
          onChange={handleInputChange}
        />
          <TextField
         id="outlined-multiline-flexible"
         label="Description"
         multiline
         rows={4}
          name="description"   value={description || "" }
          onChange={handleInputChange}
        />
           <TextField
          id="outlined-multiline-flexible"
          label="Adresse"
          multiline
           name="adresse"   value={adresse || "" }
         onChange={handleInputChange}
        />
            <TextField
          id="outlined-multiline-flexible"
          label="Price"
          multiline
           name="price"   value={price || "" }
         onChange={handleInputChange}
        />
          <TextField
          id="outlined-multiline-flexible"
          label="PriceBefore"
          multiline
           name="priceBefore"   value={priceBefore || "" }
         onChange={handleInputChange}
        />
          <TextField
          id="outlined-multiline-flexible"
          label="NumProduct"
          multiline
           name="numProduct"   value={numProduct || "" }
         onChange={handleInputChange}
        />
          <TextField
          id="outlined-multiline-flexible"
          label="Catagory"
          multiline
           name="category"   value={category || "" }
         onChange={handleInputChange}
        />
        <div id="wrapper1"><h6 id="title"> expiration Date</h6>
        <input type="date"   name="expirationDate"   value={expirationDate || "" }
         onChange={handleInputChange}/></div>
  <div id="wrapper1"><h6 id="title"> availibilty Date</h6>
        <input type="date"   name="availibiltyDate"   value={availibiltyDate || "" }
         onChange={handleInputChange}/></div>
        { /* <TextField
          id="outlined-multiline-flexible"
          label="expirationDate"
          multiline
           name="expirationDate"   value={expirationDate || "" }
         onChange={handleInputChange}
        />
 <TextField
          id="outlined-multiline-flexible"
          label="availibiltyDate"
          multiline
           name="availibiltyDate"   value={availibiltyDate || "" }
         onChange={handleInputChange}
        />*/}

</Box>         
     
<Form.Field
          id="form-button-control-public"
          control={Button}
          content="Update" 
          onChange={handleInputChange}

        />
      </Form>
     
     
     
     
     
     
     
     
     
     
     
     
     
 {/**   <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
      


          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            type="name"
         value={namebag || "" }
         label="namebag"
            name="namebag"
            onChange={handleInputChange}
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
          value ={description || ""}
            name="description"
            onChange={handleInputChange}
          />
           <Form.Field
            id="form-input-control-last-name"
            control={Input}
          value ={adresse || ""}
            name="adresse"
            onChange={handleInputChange}
          />
           <Form.Field
            id="form-input-control-last-name"
            control={Input}
            value = {price || ""}     
            name="price"
            onChange={handleInputChange}
          />
           <Form.Field
            id="form-input-control-last-name"
            control={Input}
          value= {numProduct || ""}
            name="numProduct"
            onChange={handleInputChange}
          />
           <Form.Field
            id="form-input-control-last-name"
            control={Input}
           value= {category || ""}
            name="category"
            onChange={handleInputChange}
          />
           <Form.Field
            id="form-input-control-last-name"
            control={Input}
           value ={expirationDate || ""}
            name="expirationDate"
            onChange={handleInputChange}
          />
           <Form.Field
            id="form-input-control-last-name"
            control={Input}
          value={availibiltyDate || ""}
            name="availibiltyDate"
            onChange={handleInputChange}
          />
           <Form.Field
            id="form-input-control-last-name"
            control={Input}
            name="status"
            value ={status || ""}
            onChange={handleInputChange}
          />
        </Form.Group>*/}   
      
    </div>
  )
}

export default Editbag