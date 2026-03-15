import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Table from "react-bootstrap/Table";
import "./SingleCart.css"


function SingleCart() {

  const { id } = useParams()
  const [cart, setSingleCart] = useState([])

  async function getSingleCart() {
    const res = await axios.get(`https://dummyjson.com/carts/${id}`)
    console.log(res.data)
    setSingleCart(res.data.products)
  
  }

  useEffect(() => {
    getSingleCart()
  }, [id])

  return (
    <div className="single-cart-page">
      <header className="cart-header">
        <h1>CART #{id}</h1>
      </header>
      
      <div className="cart-grid">
        {cart.map((item) => (
          <div key={item.id} className="cart-item-card">
            <div className="item-image-container">
              <img src={item.thumbnail} alt={item.title} className="item-image"/>
            </div>
            
            <h2 className="item-title">{item.title}</h2>
            
            <div className="item-details">
              <div className="detail-box">
                <span className="detail-label">Unit Price</span>
                <span className="detail-value price-value">${item.price}</span>
              </div>
              <div className="detail-box">
                <span className="detail-label">Quantity</span>
                <span className="detail-value">{item.quantity}</span>
              </div>
              <div className="detail-box">
                <span className="detail-label">Subtotal</span>
                <span className="detail-value total-value">${item.total}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
  
}
export default SingleCart
