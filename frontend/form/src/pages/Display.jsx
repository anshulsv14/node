import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
const Display = () => {
  const [empdata,setEmpdata]=useState([])

  const loadData=()=>{
    let api ='http://localhost:8000/employee/display';
    axios.get(api).then((res)=>{
      setEmpdata(res.data)
    })
  }
  useEffect(()=>{
    loadData()
  },[])
  let Sno=0;
const ans = empdata.map((key)=>{
  Sno++;
  return(
    <>
    <tr>
      <td>{Sno}</td>
      <td>{key.empno}</td>
      <td>{key.empname}</td>
      <td>{key.department}</td>
      <td>{key.salary}</td>
    </tr>
    
    </>
  )
})
  return (
   <>
   <h1 style={{textAlign:"center",marginTop:"25px",marginBottom:"25px",borderBottom:"3px solid black", width:"400px",margin:"auto"}} >Employee Details</h1>
 <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Employee No.</th>
          <th>Employee Name</th>
          <th>Department</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
       {ans}
      </tbody>
    </Table>
  
   </>
  )
}

export default Display
