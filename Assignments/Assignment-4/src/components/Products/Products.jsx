import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CardComponent from '../Cards/CardComponent';
const Products = () => {
    const [data,setData] = useState([]);
useEffect(()=>{
  const fetchData = async() =>{
    try {
        const response = await axios.get("https://dummyjson.com/products");
        setData(response.data.products);
    } catch (err) {
        console.error("Error fetching products:", err);
    }
  }
 fetchData();
},[]);
  return (
    <div>
    <h1>Product Lists</h1>
    <div style={{width:"90vw"}} className='d-flex flex-wrap gap-3 justify-content-center'>
      {data && data.map((d)=>(
         <CardComponent key={d.id} id={d.id} image={d.images} title={d.title} description={d.description}/>
      ))}
     </div>
    </div>
  )
}

export default Products
