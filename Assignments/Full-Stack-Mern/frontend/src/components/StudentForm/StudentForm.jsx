import React, { useState , useEffect} from 'react'
// import './StudentForm.css'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CardComponent from '../CardComponent/CardComponent';
import axios from 'axios';
const StudentForm = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [city,setCity] = useState("");
    const [data,setData] = useState([]);
    useEffect(() => {
      const getData =async()=>{
        try{
      const response= await axios.get("http://localhost:3000/get");
      const data = await response.data.user;
      console.log(data);
      setData(data);
        } catch (error) {
      console.log(error);
    }
      
    } 
      
    
    getData();
}, []);
    const onSubmitHandler=async(e)=>{
         e.preventDefault();
        const inputdata = {
            name,
            email,
            city
        }
        try {
          const response = await axios.post("http://localhost:3000/insert",inputdata);
          const insertData = response.data.insertUser;
          console.log(insertData);
          setData([...data,insertData]);
        } catch (error) {
         console.log(error);
          
        }
        
        setName("");
        setEmail("");
        setCity("");   
    }
  return (
    <>
    {/* <section className='w-100vw'> */}
      <section className="container-fluid py-4 d-flex flex-column align-items-center justify-content-center">
    <h1 className="text-center">Student Form</h1>
     <Form  onSubmit={(e)=>onSubmitHandler(e)}>
      <Form.Group as={Row} className="mb-3" controlId="formGroupName">
        <Form.Label column sm={2}>Name </Form.Label>
        <Col sm={10}>
         <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} required/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formGroupEmail">
        <Form.Label column sm={2}>Email </Form.Label>
        <Col>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formGroupCity">
        <Form.Label column sm={2}>City</Form.Label>
        <Col>
        <Form.Control type="text" placeholder="Enter city" value={city} onChange={(e)=>setCity(e.target.value)} required />
        </Col>
      </Form.Group>
      <Button variant="primary" type="submit" className="d-block mx-auto">
        Submit
      </Button>
    </Form>
    </section>
    <section >
      <h1 className="text-center">Student Details</h1>
      <section className='w-95 m-5 d-flex gap-5 flex-wrap'>
        {data.length===0? (<p className="text-center">No data Available</p>) : (
        data.map((d)=>(
            <CardComponent key={d._id} name={d.name} email={d.email} city={d.city}/>
        ))
       )}
      </section>
      </section>
      </>
  )
}

export default StudentForm
