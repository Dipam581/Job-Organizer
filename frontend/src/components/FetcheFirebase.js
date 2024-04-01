// import React from 'react'
// import { ref, uploadBytes } from 'firebase/storage';
// import { data, fetchDb } from '../reactDataConfig';

// const FetcheFirebase = async () => {
//     try {
//       const storageRef = storage.ref("gs://reactdata-aa3c1.appspot.com/jobProfile.json");
  
//       const response = await storageRef.getDownloadURL();
//       const data = await fetch(response);
//       const jsonData = await data.json();
  
//       console.log ("from firebase",jsonData);
//     } catch (error) {
//       console.error("Error fetching data from Firebase Storage:", error);
//       return null;
//     }
//   };

// export default FetcheFirebase