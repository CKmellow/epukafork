// import React, { useState } from "react";
// import './Signup.css';
// import { Link } from "react-router-dom";
// import { auth, firestore } from '../Database/firebase'; 
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc, getDoc } from "firebase/firestore";
// import { toast } from "react-toastify";

// const SignUpForm = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [fname, setFname] = useState('');
//     const [lname, setLname] = useState('');
    
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');
//         try {
//             await createUserWithEmailAndPassword(auth, email, password);
//             const user = auth.currentUser;
//             console.log(user);
//             if (user){
//                 await setDoc(doc (firestore, "Users", user.uid),{
//                     email: user .email,
//                     firstName:fname,
//                     lastName:lname,
//                 });
//             }
//             console.log("Account Created");
//             toast.success("User Registered Successfully!", 
//             {
//                 position: "top-center",
//             });
//             window.location.href="/profile"; 
            
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
//                 <h2>Sign Up</h2>
//                 {error && <p className='error-message'>{error}</p>}
//                 <label htmlFor="fname">
//                     First Name:
//                     <input 
//                         type="text" 
//                         id="fname"
//                         value={fname} 
//                         onChange={(e) => setFname(e.target.value)} 
//                         placeholder="Enter your first name"
//                         required
//                         aria-required="true"
//                     />
//                 </label>
//                 <label htmlFor="lname">
//                     Last Name:
//                     <input 
//                         type="text" 
//                         id="lname"
//                         value={lname} 
//                         onChange={(e) => setLname(e.target.value)} 
//                         placeholder="Enter your Second name"
//                         required
//                         aria-required="true"
//                     />
//                 </label>
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
//                     {loading ? 'Signing Up...' : 'Sign Up'}
//                 </button>
//                 <br />
//                 <p>Already Registered? <Link to="/login">Login</Link></p>
//             </form>
//         </div>
//     );
// };

// export default SignUpForm;
