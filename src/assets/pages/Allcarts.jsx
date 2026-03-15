import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import SingleCart from "./SingleCart";
import "./Allcarts.css";

const Allcarts = () => {
  const [cart, setcart] = useState([]);

  useEffect(() => {
    const getcart = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/carts");
        console.log(res.data.carts);
        setcart(res.data.carts);
      } catch (error) {
        console.log(error);
      }
    };

    getcart();
  }, []);
  function handledelete() {
    alert("item deleted")

  }

  function handlededit() {
    alert("item edited")

  }


  return (
    <div className="allcarts-page">
      <h1 className="allcarts-title">All Carts Management</h1>
      <div className="table-container">
        <Table responsive className="custom-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Price</th>
              <th>Total Stock</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {cart.map((cart, index) =>
              cart.products.map((item) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.total}</td>
                  <td>
                    <Link to={`/SingleCart/${cart.id}`}>
                      <button className="action-btn btn-single">Single Cart</button>
                    </Link>
                    <button className="action-btn btn-edit" onClick={handlededit}>Edit</button>
                    <button className="action-btn btn-delete" onClick={handledelete}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Allcarts