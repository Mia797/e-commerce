import React from 'react'
import Users from './Users'
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Dashboard.css";
function DashBoard() {
  
  
  return (
    <>

  

<div className="dashboard-container">
  <h2 className="dashboard-title">DashBoard</h2>

  <div className="cards-container">
    <Card className="fancy-card">
      <Card.Body className="text-center">
       
        <Card.Title className="card-title">Users Page</Card.Title>
        <Card.Text className="card-text">
          User information goes here.
        </Card.Text>
        <Link to="/users">
          <Button className="fancy-button">USERS DETAILS</Button>
        </Link>
      </Card.Body>
    </Card>

    <Card className="fancy-card">
      <Card.Body className="text-center">
       
        <Card.Title className="card-title">ALL CARTS</Card.Title>
        <Card.Text className="card-text">
          Cart information goes here.
        </Card.Text>
        <Link to="/Allcarts">
          <Button className="fancy-button">CART DETAILS</Button>
        </Link>
      </Card.Body>
    </Card>
  </div>
</div>
  


    
  

    </>

  )
}
export default DashBoard
