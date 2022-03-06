// import React, { useEffect, useState } from 'react'
// //import jwtDecode from 'jwt-decode';
// import axios from 'axios'
// import Profile from './Profile';
// // import Book from './Book/Book';//++++++++++++++++++++++//
// // import "./Book/Book.css";

// const URL = "http://localhost:5000/profile";

// //const token = localStorage.getItem("token");
// //const useId = token ? jwtDecode(localStorage.getItem("token"))?.user || false: false;

// const fetchHandler = async() => {
//     return axios.get(URL).then((res) => res.data);
// };

// const Profiles = () => {

//     const [users, setUsers] = useState();
//     useEffect(() => {
//         fetchHandler().then((data) => setUsers(data.users));
//     },[]);

//     return (
//     <div> 
//         <ul>
//             {users && users.map((user, i) => (
//                 <div key={i}>
//                     <Profile user = {user}/>
//                 </div>
//             ))}
//         </ul>
//     </div>
//     );
// };

// export default Profiles;