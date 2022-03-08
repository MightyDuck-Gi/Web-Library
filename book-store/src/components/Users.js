import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () =>{

  const [listUsers, setListUsers] = useState([]);

    //use useState() to change the users informations
  useEffect(() => {
    axios.get("http://localhost:5000/auth/users").then((res) => {
      setListUsers(res.data)
    })
  }, []);
  
  const updateUser = (id) => {
    const newRole = prompt("Enter new role: ");

    axios.put("http://localhost:5000/auth/update", { newRole: newRole, id: id}).then(() => {
      setListUsers(listUsers.map((val) => {
        return val.id === id ? {id: id, email: val.email, role: newRole} : val
      }))
    });
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/auth/delete/${id}`).then(() => {
        setListUsers(listUsers.filter((val) => {
          return val.id !== id;
        }));
    });
  };

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        <TableRow sx={{'.MuiTableCell-root': {fontWeight: 'bold'}}}>
            <TableCell>ID</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell align='right'>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {listUsers && listUsers.map((row) => (
            <TableRow key = {row.id}>
              <TableCell>{row.id} </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role} </TableCell>
              <TableCell align='right'>
                <Button variant="contained" color="primary" onClick={() => {updateUser(row.id)}}>edit</Button>
                <Button variant="contained" color="error" onClick={() => {deleteUser(row.id)}}>delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Users