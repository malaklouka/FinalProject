import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import { addBag } from "../../JS/actions/bag";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { Calendar } from 'react-date-range';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import "./addbag.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();


//add new bag
const Add = () => {
    const dispatch = useDispatch()
    const history=useHistory()
    const formData= new FormData();

    const [state, setState] = useState({namebag:"", adresse:"", price:"",priceBefore:"", expirationDate:"",availibiltyDate:"",description:""})
    const [fileName,setFileName]= useState("")
    const onChangeFile=e=>{ setFileName(e.target.files[0])}
    
    const {namebag,adresse,price,priceBefore,expirationDate,availibiltyDate}=state;
    const [error,setError]=useState("")
    formData.append("namebag", namebag)
    formData.append("adresse", adresse)
    formData.append("price", price)
    formData.append("priceBefore", priceBefore)
    formData.append("expirationDate", expirationDate)
    formData.append("availibiltyDate",availibiltyDate)
    formData.append("image",fileName)

    const [date, setDate] = useState(new Date());

    const handleChange=(e)=>{
      let {name,value}=e.target
      setState({...state,[name]:value})
    }
    
    const handleSubmit= (e)=>{
        e.preventDefault();
        if (!namebag || !adresse || !price || !expirationDate) {
         // setError("input the fields first!")
toast.error('input the fields first');


        }
        else {
          toast.success('Great!! new bag is added!');

dispatch(addBag(formData))

history.push('/bags')
    }}
   
    return (
    <div className="neoneff">
 
 <div class="back-button" style={{marginTop:"-240px"}}>
  <div class="arrow-wrap"   onClick={()=> history.push('/custbag')}>
    <span class="arrow-part-1"></span>
    <span class="arrow-part-2"></span>
    <span class="arrow-part-3"></span>
  </div>
</div>
      <h6 style={{marginLeft:"550px", marginTop:"5"}}>Add new bag</h6>
      {error && <h3 style={{color:"red"}}> {error}</h3>}
      <div>
        
      <Form onSubmit={handleSubmit} className="addform" >
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '22ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
        <TextField
          id="outlined-multiline-flexible"
          label="NameBag"
          multiline
          maxRows={4}
         name="namebag"  color="warning"
          onChange={handleChange}
        />
          <TextField
         id="outlined-multiline-flexible"
         label="Description"
         multiline
         rows={4}
          name="description" color="warning"
          onChange={handleChange}
        />
           <TextField
          id="outlined-multiline-flexible"
          label="Adresse"
          multiline
           name="adresse" color="warning"
         onChange={handleChange}
        />
            <TextField
          id="outlined-multiline-flexible"
          label="Price"
          multiline
           name="price" color="warning"
         onChange={handleChange}
        />
            <TextField
          id="outlined-multiline-flexible"
          label="Pricebefore"
          multiline
           name="priceBefore" color="warning"
         onChange={handleChange}
        />
          <TextField
          id="outlined-multiline-flexible"
          label="NumProduct"
          multiline
           name="numProduct" color="warning"
         onChange={handleChange}
        />
         <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="expirationDate" name="expirationDate"
        type="date" value={date.toString()}
        onChange={date => handleChange({ target: { value: date, name: 'expirationDate' } })}
        renderInput={(params) => (
          <TextField {...params} helperText={params?.inputProps?.placeholder} />
        )}
      />
    </LocalizationProvider>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="availibiltyDate" name="availibiltyDate"
        value={date.toString()} type="date" 
        onChange={date => handleChange({ target: { value: date, name: 'availibiltyDate' } })}
        renderInput={(params) => (
          <TextField {...params} helperText={params?.inputProps?.placeholder} />
        )}
      />
    </LocalizationProvider>

      
     {/* <div id="wrapper1"><h6 id="title" style={{color:"#FFA500"}}> expiration Date</h6>
        <input type="date"   name="expirationDate" color="warning"  value={expirationDate}
         onChange={handleChange}/></div>
             <div id="wrapper1"><h6 id="title" style={{color:"#FFA500"}}> availibility Date</h6>
        <input type="date"   name="availibiltyDate" color="warning"  value={availibiltyDate}
         onChange={handleChange}/></div>*/}

        <div className="form-group">
          <label htmlFor="file" style={{color:"black"}}>Choose image</label>
        <input type="file" filename="image" className="form-control-file" style={{color:"black"}}
      onChange={(e) => {
        setFileName(e.target.files[0]);
        console.log("files", e.target.files[0]);
      }}/>
        </div>

</Box>         

        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Confirm" 
          onChange={handleChange}

        />
        
      </Form>
      </div>
    </div>
  )
}

export default Add