import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useEffect, useState } from "react";
import { message } from "antd";
const EmpEdit=()=>{
    const {id} = useParams();
    const [mydata, setMydata] = useState({});


    const loadData=async()=>{
    let api="http://localhost:8000/employee/editdatashow";
    const res = await axios.post(api, {empid:id});
    setMydata(res.data);
    console.log(res.data);
    }

    useEffect(()=>{
        loadData();
    }, [])
    
    const handleInput=(e)=>{
         let name= e.target.name;
         let value=e.target.value;
         setMydata(values=>({...values, [name]:value}));
         console.log(mydata);
    }


     const handleSubmit=async(e)=>{
        e.preventDefault();
        let api="http://localhost:8000/employee/editdatasave";
        const res= await axios.post(api, mydata);
        message.success("Record Succesfully updated!!!");
        console.log(res);
     }


    return(
        <>
          <div id="myForm">
          <h1> Edit Employee Detail : </h1>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee No.</Form.Label>
        <Form.Control type="text" name="empno"  value={mydata.empno}  onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee Name</Form.Label>
        <Form.Control type="text" name="name" value={mydata.empname} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Designation</Form.Label>
        <Form.Control type="text" name="designation" value={mydata.department} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Salary</Form.Label>
        <Form.Control type="text" name="salary" value={mydata.salary}  onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit} >
        Submit
      </Button>
    </Form>
</div>
        
        </>
    )
}

export  default EmpEdit;