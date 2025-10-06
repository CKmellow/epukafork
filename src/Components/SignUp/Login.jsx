// import React, { useState } from "react";
// import './Signup.css';
// import { Link } from "react-router-dom";
// import { auth} from '../Database/firebase'; 
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { toast } from "react-toastify";


// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');
//         try {
//             await signInWithEmailAndPassword(auth, email, password);
//             console.log("Login Successful!");
//             toast.success("User logged in Successfully!",
//                 {
//                     position: "top-center",
//                 })
//                 window.location.href="/profile"; 
//         } catch (err) {
//             console.log(err.message);
//             toast.error(err.message ,
//                 {
//                     position: "bottom-center"
//                 }
//             )
//         }
//         setLoading(false);
//     };

//     return (
//         <div className='signup-container'>
//             <form className='signup-form' onSubmit={handleSubmit}>
//                 <h2>Login</h2>
//                 {error && <p className='error-message'>{error}</p>}
//                 <label htmlFor="email">
//                     Email:
//                     <input 
//                         type="email" 
//                         id="email" 
//                         value={email} 
//                         onChange={(e) => setEmail(e.target.value)} 
//                         placeholder="Enter your email"
//                         required
//                         aria-required="true"
//                     />
//                 </label>
//                 <label htmlFor="password">
//                     Password:
//                     <input 
//                         type="password" 
//                         id="password" 
//                         value={password} 
//                         onChange={(e) => setPassword(e.target.value)} 
//                         placeholder="Enter your password"
//                         required
//                         aria-required="true"
//                     />
//                 </label>
//                 <button type='submit' disabled={loading}>
//                     {loading ? 'Logging in...' : 'Login'}
//                 </button>
//                 <br />
//                 <p>Don't Have an Account? <Link to="/signup">Register</Link></p>
//             </form>
//         </div>
//     );
// }

// export default Login;
