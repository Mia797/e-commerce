import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useParams } from 'react-router-dom';
import "../pages/Product.css";

function Cart() {
  const { id } = useParams();
  const { cart: globalCart, removeFromCart } = useContext(CartContext);
  const [fetchedCart, setFetchedCart] = useState(null);

  async function getCart() {
    if (id) {
      // If an ID is provided, fetch from dummy API
      try {
        const res = await axios.get(`https://dummyjson.com/carts/${id}`);
        setFetchedCart(res.data.products);
      } catch (error) {
        console.error("Error fetching cart API:", error);
      }
    }
  }

  const handleRemoveFromCart = (productId) => {
    if (id) {
      setFetchedCart(prev => prev ? prev.filter(item => item.id !== productId) : null);
    } else {
      removeFromCart(productId);
    }
  };

  useEffect(() => {
    getCart();
  }, [id]);

  const displayCart = id ? (fetchedCart || []) : globalCart;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>
      {displayCart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {displayCart.map((item) => (
            <div key={item.id} className="product-card" style={{ padding: "15px", border: "1px solid #ccc", borderRadius: "8px", width: "200px" }}>
              <img src={item.thumbnail} alt={item.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
              <h5>{item.title}</h5>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <p><strong>Total: ${(item.price * item.quantity).toFixed(2)}</strong></p>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="btn-remove"
                style={{
                  marginTop: "10px",
                  padding: "8px 15px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  width: "100%",
                  fontWeight: "bold"
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
