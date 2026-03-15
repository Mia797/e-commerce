import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cart from './Cart';
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails () {
  
  let [details,setDetails]= useState([])
  const {id}=useParams()
  async function getDetails() {
        const res = await axios.get(`https://dummyjson.com/products/${id}`)
        console.log(res.data)
       setDetails(res.data)
    } 
    useEffect(()=>{
        getDetails()
    },[])
    const addToCart = (product) => {
  setCart((prev) => [...prev, product])
  navigate("/cart")
}
  return (
    <>
    <h1>Details</h1>
   
         <div  className="product-details-card">
    <img src={details.thumbnail}  /> 
      <p className='description'>{details.description}</p>
      <h6>Stock: {details.stock}</h6>
      <h6>Price: ${details.price}</h6>
      <h6>Brand: {details.brand}</h6>
      <h6>Category: {details.category}</h6>
      <h6>Rating: {details.rating}</h6> 
      {/* <Link to ={`/.Cart`} > */}
       <button className="btn-add-cart"  onClick={() => addToCart(product)}>
    Add to Cart
  </button>
  {/* </Link> */}
    </div> 


    </>
  )
}
export default ProductDetails
