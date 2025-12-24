import React, { useState , useEffect} from 'react'
import './StudentForm.css'
const StudentForm = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [city,setCity] = useState("");
    const [data,setData] = useState([]);
    useEffect(() => {
    console.log(data);
}, [data]);
    const onSubmitHandler=(e)=>{
         e.preventDefault();
        const inputdata = {
            name,
            email,
            city
        }
        setData([...data,inputdata]);
        setName("");
        setEmail("");
        setCity("");   
    }
  return (
    <form onSubmit={(e)=>onSubmitHandler(e)}>
      <label>Name : <input type='text' value={name} placeholder='Enter Your Name' onChange={(e)=>{setName(e.target.value)}} required/></label>
      <label>Email : <input type='email' value={email} placeholder='Enter Your email' onChange={(e)=>{setEmail(e.target.value)}} required/></label>
      <label>City : <input type='text' value={city} placeholder='Enter Your city' onChange={(e)=>{setCity(e.target.value)}} required/></label>
      <button>Submit</button>
      <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
        </tr>
        </thead>
        <tbody>
        {data.length===0? 
        (<tr>
            <td colSpan="3">No data Available</td>
        </tr>) :
        (data.map((d,index)=>(
                <tr key={index}>
                   <td>{d.name}</td>
                   <td>{d.email}</td>
                   <td>{d.city}</td>
                </tr>
            ))
        )}
        </tbody>
      </table>
    </form>
  )
}

export default StudentForm
