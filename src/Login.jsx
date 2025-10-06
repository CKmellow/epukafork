// import React, {useState} from "react";
// import './Signup.css';
// import { Link } from "react-router-dom";
// import {auth} from './firebase';
// import { signInWithEmailAndPassword } from "firebase/auth";

// const Login= () => {
//     const [email,setEmail] = useState('');
//     const [password,setPassword] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         try{
//        await createUserWithEmailAndPassword(auth, email, password)
//             console.log("Login Successful!")
//         }
//         catch(err){
//             console.log(err)
//         }
//     }
//     return (
//         <div className='signup-container'>
//             <form className='signup-form' onSubmit={handleSubmit}>
//                 <h2>Login</h2>
//                 <label htmlFor="email">
//                     Email:
//                     <input type="text" onChange={(e) => setEmail(e.target.value)} />
//                 </label>
//                 <label htmlFor="password">
//                     Password:
//                     <input type="password" onChange={(e) => setPassword(e.target.value)}/>
//                 </label>
//                 <button type='submit'>Sign Up</button> <br/>
//                 <p>Don't Have Account? <Link to="/signup">Register</Link></p>
//             </form>
//              </div>
//     )
// }

// export default Login;