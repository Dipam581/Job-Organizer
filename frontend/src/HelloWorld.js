
import './App.css'
import { useState, useEffect } from 'react'
import Home from './Home'

function App() {

  const [data,setData] = useState([])
  console.log("From HelloWorld.js comp:");

  useEffect(()=>{
    async function fetchData() {
      try{
        const response = await fetch('http://127.0.0.1:8000/home/');
        
        if (!response.ok) {
          throw new Error("Not found your request")
        }
        const result = await response.json();
        console.log(result)

        sessionStorage.setItem('csrfToken', result.csrfToken);

        setData(result)
      }catch(error){
        console.log("error in fetching data", error);
      }
    }

    fetchData();
    
  },[])

  return (
    <>
      <Home data={data}/>
    </>
  )
}

export default App
