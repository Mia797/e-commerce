import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../pages/Login.css";
import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function FormGroupExample() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  async function Getauth(e) {
    e.preventDefault();

    try {
      const res = await axios.post('https://dummyjson.com/auth/login', {
        username: username,
        password: password
      });


      await login(res.data);


      navigate("/profile");

    } catch (err) {
      console.error(err.response?.data);
      window.alert("Invalid username or password");
    }
  }

  //    useEffect(()=>{
  //     Getauth()
  //  },[])


  return (


    <div className="login-page">
      <h1 className='WEL'>WELCOME!!</h1>

      <div className="login-container">
        <Form onSubmit={Getauth}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" placeholder="Enter yor name" value={username}
              onChange={(e) => setusername(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Button className='btn-gradient-sparkle' type='submit'>Login</Button>
        </Form>
      </div>
    </div>


  );
}

export default FormGroupExample;