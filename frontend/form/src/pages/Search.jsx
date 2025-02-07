import React, { useState } from 'react'
import axios from 'axios'
const Search = () => {
 const[val,setVal]=useState("");
 const[mydata,setMydata] = useState([]);
 
 const searchhandle=()=>{
  let api ='http://localhost:8000/employee/search';
  const res =  axios.post(api,{empno:val}).then(()=>{
    setMydata(res.data)
  })
  
 }
const show = mydata.map((key)=>{
  return(
    <h1>{key.empname}</h1>
  )

})
  return (
  <>
  Employee no. : <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} />
  <button onClick={searchhandle} >search</button>
 <h1> {show}</h1>
  </>
  )
}

export default Search
