import React, { useEffect, useState } from 'react';
import { Avatar, Paper, Grid, TextField, Button, Typography, Link, Box} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const history = useNavigate();

    const token = localStorage.getItem("token");
    const loggedIn = token ? jwtDecode(localStorage.getItem("token"))?.login || false :false;

    useEffect(() => {
        
        if(loggedIn) history("../books", {replace: true});
    });
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const paperStyle = {padding: 20, height: '40vh', width:280, margin: "20px auto"}
    const btnStyle = {margin: '8px 0'}

    async function loginUser(e) {
        e.preventDefault();

        try {
            const loginData = {
                email,
                password,
            };

          const localCookie = await axios.post("http://localhost:5000/auth/login", loginData);
          console.log(localCookie)
            
          localStorage.setItem("token", localCookie.data);
          history("../books", {replace: true});
          
        } catch (err) {
            console.log(err)
        };
    };

    return <form onSubmit={loginUser}>
        <Box>
            <Paper elevation={10} style={paperStyle}>
                <Grid align ='center' padding={2}>
                    <Avatar sx= {{ backgroundColor: "#00171F" }}>
                        <LockIcon/>
                    </Avatar>
                    <h2>
                        Sign in
                    </h2>
                </Grid>

                <TextField value={email} onChange={(e) => setEmail(e.target.value)} label='Username' placeholder ='Enter username' fullWidth required />
                <TextField  value={password} onChange={(e) => setPassword(e.target.value)} label='Password' placeholder ='Enter Password' type='password' margin={"normal"} fullWidth required />

                <Button type='submit' color='primary' style={btnStyle} fullWidth>Sign in</Button>
                <Typography>
                    <Link herf="#">
                    </Link>
                </Typography>
                <Typography> No account?
                    <Link href="/register">
                        Register 
                    </Link>
                    
                </Typography>
            </Paper>
        </Box>
    </form>      

}

export default Login;