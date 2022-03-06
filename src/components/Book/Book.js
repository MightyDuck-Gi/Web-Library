import { Button } from '@mui/material';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Book.css";

const Book = (props) => {
    const history = useNavigate();
    const {_id, name, author, description, price, } = props.book;

    const token = localStorage.getItem("token");
    const roles = token ? jwtDecode(localStorage.getItem("token"))?.role || false: false;

    const deleteHandler = async() => {
      await axios.delete(`http://localhost:5000/books/${_id}`).then(res => res.data).then(() => history("/")).then(() => history("/books"));
  }

  return <div className='card'>
      <article>By {author} </article>
      <h3> {name} </h3>
      <p> {description} </p>
      <h3>£ {price} </h3>

      {roles === "employee" &&(<Button LinkComponent={ Link } to={`/books/${_id}`} sx= { {mt:'auto'} }>Update</Button>)}
      {roles === "employee" &&(<Button onClick={deleteHandler} sx= { {mt:'auto'} }> Delete</Button>)}
      {/* <Button LinkComponent={ Link } to={`/books/${_id}`} sx= { {mt:'auto'} }>Update</Button>
      <Button onClick={deleteHandler} sx= { {mt:'auto'} }> Delete</Button> */}
  </div>
};

export default Book;