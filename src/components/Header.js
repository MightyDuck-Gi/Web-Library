import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import jwtDecode from 'jwt-decode';


const Header = () => {
    const [value, setValue] = useState(0);

    const history = useNavigate();

    const token = localStorage.getItem("token");
    const loggedIn = token ? jwtDecode(localStorage.getItem("token"))?.login || false :false;
    const roles = token ? jwtDecode(localStorage.getItem("token"))?.role || false: false;

    const logoutHandler = () => {
            localStorage.removeItem("token");    
            history ("/", {replace: true});
    }

  return (<div>
      <AppBar sx= {{ backgroundColor: "#00171F" }} position='sticky'>
          <Toolbar>
            <NavLink to="/" style={{ color: "white" }} >
            <Typography>
                <LibraryBooksIcon/>
            </Typography>
            </NavLink>
            <Tabs 
            sx = {{ ml: "auto" }}
            textColor='inherit' 
            indicatorColor='secondary' 
            value={value} 
            onChange={(e, val) => setValue(val)}
            >
                
                <Tab LinkComponent={NavLink} to ="/books" label ="Books" />

                {roles === "admin" && ( <Tab LinkComponent={NavLink} to ="/profiles" label ="Profiles" />)}
                {loggedIn && (<Tab LinkComponent={NavLink} to ="/add" label ="Request Book" />)}
                {loggedIn && ( <Tab onClick={logoutHandler} label ="Logout" />)}
                        
                {!loggedIn &&(<Tab LinkComponent={NavLink}  to ="/login" label ="Login" />)}
                
                
            </Tabs>
          </Toolbar>
      </AppBar>
  </div>
  )
};

export default Header;