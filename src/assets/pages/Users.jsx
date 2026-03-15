import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/users");
        console.log(res.data.users);
        setUsers(res.data.users);     
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="users-page">
      <h1 className="users-title">User Directory</h1>
      <div className="users-table-container">
        <Table responsive className="users-custom-table">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td className="fw-bold">{user.firstName}</td>
                <td>{user.lastName}</td> 
                <td><span className="text-info">@{user.username}</span></td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Users;