// import React, { useEffect, useState } from "react";
// import { auth, firestore } from '../Database/firebase';
// import { doc, getDoc } from "firebase/firestore";
// import { toast } from "react-toastify";
// import './Profile.css';

// function Profile() {
//     const [userDetails, setUserDetails] = useState(null);

//     const fetchUserData = async () => {
//         auth.onAuthStateChanged(async (user) => {
//             if (user) {
//                 const docRef = doc(firestore, "Users", user.uid);
//                 const docSnap = await getDoc(docRef);
//                 if (docSnap.exists()) {
//                     setUserDetails(docSnap.data());
//                 } else {
//                     console.log("No such document!");
//                 }
//             } else {
//                 console.log("User is not logged in!");
//             }
//         });
//     };

//     useEffect(() => {
//         fetchUserData();
//     }, []);

//     async function handleLogout() {
//         try {
//             await auth.signOut();
//             window.location.href = "/Login";
//             console.log("User logged out successfully!");

//         }catch (error) {
//             console.error("Error logging out", error.message);
//         }

//     }

//     return (
//         <div className="profile-container">
//             {userDetails ? (
//                 <>
//                     <h3>Welcome, {userDetails.firstName}</h3>
//                     <div className="profile-details">
//                         <p>Email: {userDetails.email}</p>
//                         <p>First Name: {userDetails.firstName}</p>
//                         <p>Last Name: {userDetails.lastName}</p>
//                     </div>
//                     <button className="btn" onClick={handleLogout}>
//                        Logout
//                     </button>
//                 </>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// }

// export default Profile;
