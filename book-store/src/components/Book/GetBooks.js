import React from 'react';
import { Button } from '@mui/material';
//import useNavigate from 'react';
import "./Book.css";
import axios from 'axios';

const GetBooks = ({book}) => {
  //const history = useNavigate();
  
  const updateBook = async (status) => {
    await axios.put(`http://localhost:5000/books/${book._id}`, {
      name: book.name,
      author: book.author,
      description: book.description,
      price: book.price,
      createdBy: book.creadtedBy,
      status: status  
  })
}
const approveHandler = () => {
  updateBook("Approved");
  }
  
  const denyHandler = () => {
    updateBook("Denied");
  }

  return <div className='card'>
    <article>By {book.author}</article>
    <h3> {book.name}</h3>
    <p> {book.description}</p>
    <h3>£ {book.price} </h3>
    <p> from: {book.createdBy}</p>
    <h3> Books status: {book.status}</h3>

    <Button color="success" onClick={approveHandler}>Approve </Button>
    <Button color="error" onClick={denyHandler}>Deny </Button>
  </div>
}


export default GetBooks;