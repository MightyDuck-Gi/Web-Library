import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import BookDetail from "./components/Book/BookDetail";
import Login from "./components/Login";
import Register from "./components/Register";
import axios from "axios";
import jwtDecode from 'jwt-decode';
import Profiles from "./components/Profile/Profiles";

axios.defaults.withCredentials = true;

function App() {
  
  const token = localStorage.getItem("token");
  const loggedIn = token ? jwtDecode(localStorage.getItem("token"))?.login || false :false;
  const roles = token ? jwtDecode(localStorage.getItem("token"))?.role || false: false;

  return <React.Fragment >

    <header>
      <Header />
    </header>
    <main>
    <Routes>
        <Route path ="/" element={<Home />} exact />
            {loggedIn && (<Route path ="/add" element={<AddBook />} exact />)}
            {!loggedIn &&(<Route path ="/register" element={<Register />} exact />)}
            {roles === "admin" &&<Route path ="/profiles" element={<Profiles />} exact />}
            <Route path ="/login" element={<Login />} exact />
            <Route path ="/books" element={<Books />} exact />
        <Route path ="/books/:id" element={<BookDetail />} exact />
        </Routes>      
    </main> 
  </React.Fragment>
}

export default App;
