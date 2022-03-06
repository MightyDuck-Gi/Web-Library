import { Button, FormLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
       name: "",
       author: "",
       description: "",
       price: "",
   });

   const handleChange = (e) => {

       setInputs((prevState) => ({
           ...prevState,
          [e.target.name]: e.target.value
       }));
   };

   const sendRequest = async() => {
       await axios.post("http://localhost:5000/books", {
            name: String(inputs.name),
            author: String(inputs.author),
            description: String(inputs.description),
            price: Number(inputs.price),
            approved: String("false"),
       }).then(res => res.data);
   }

   const handleSubmit = (e) => {
       e.preventDefault();
       sendRequest().then(()=> history("/books"));
   }

    return <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" justifyContent={"center"} maxWidth={700} alignContent="center" alignSelf= "center" marginLeft="auto" marginRight="auto" marginTop={10}>
            <FormLabel>Name</FormLabel>
            <TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="name"/>

            <FormLabel>Author</FormLabel>
            <TextField  value={inputs.author} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="author"/>

            <FormLabel>Description</FormLabel>
            <TextField  value={inputs.description} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="description"/>

            <FormLabel>Price</FormLabel>
            <TextField value={inputs.price} onChange={handleChange} type="number" margin="normal" fullWidth variant="outlined" name="price"/>

            <Button variant="contained" type="submit" color="success">Request Book</Button>

        </Box>
    </form>
};

export default AddBook