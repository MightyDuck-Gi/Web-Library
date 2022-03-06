import React, { useState } from 'react';
import { Avatar, Paper, Grid, Box, TextField, Button, Typography, Link} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");
    
    async function registerUser(e) {
        e.preventDefault();

        try {
            const registerData = {
                email,
                password,
                passwordVerify,
            };

            await axios.post("http://localhost:5000/auth/", registerData);
            
        } catch (err) {
            console.log(err)
        };
    };

    const paperStyle = {padding: 20, height: '40vh', width:280, margin: "20px auto"}
    const btnStyle = {margin: '8px 0'}

    return <form onSubmit={registerUser}>
    <Box>
        <Paper elevation={10} style={paperStyle}>
            <Grid align ='center'>

                <Avatar sx= {{ backgroundColor: "#00171F" }}>
                    <AccountCircleIcon/>
                </Avatar>

                <h2>
                    Sign Up
                </h2>
            </Grid>

            <TextField value={email} onChange={(e) => setEmail(e.target.value)} label='Username' placeholder ='Username' type='email' margin={"normal"} fullWidth required />
            <TextField value={password} onChange={(e) => setPassword(e.target.value)} label='Password' placeholder ='Password' type='password' margin={"normal"} fullWidth required />
            <TextField value={passwordVerify} onChange={(e) => setPasswordVerify(e.target.value)} label='Confirm Password' placeholder ='Confirm Password' type='password' margin={"normal"} fullWidth required />

            <Button type='submit' color='primary' style={btnStyle} fullWidth>Register</Button>

            <Typography>
                <Link herf="#">
                </Link>
            </Typography>
            
            <Typography> Already have an account? 
                <Link href="/login">
                    Login
                </Link>
            </Typography>
        </Paper>
    </Box>
</form>

};

export default Register;