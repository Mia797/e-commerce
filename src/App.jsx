
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import AuthProvider from './context/AuthContext';
import BasicExample from './assets/pages/Navbar';
import DashBoard from "./assets/pages/DashBoard";
import Products from "./assets/pages/Products";
import Regester from './assets/pages/Regester';
import Cart from './assets/pages/Cart';
import Allcarts from './assets/pages/Allcarts'


// import Login from './assets/pages/Login';
import FormGroupExample from './assets/pages/Login';

import './App.css'
import ProductDetails from './assets/pages/ProductDetails';
import Users from './assets/pages/Users';
import SingleCart from './assets/pages/SingleCart';
import Home from './assets/pages/Home';
import Profile from './assets/pages/Profile';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {



  return (
    <>
     <AuthProvider>
       <CartProvider>
         <BrowserRouter> 
           <BasicExample/>
             <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/profile' element={<Profile />} />
             <Route path='/login' element={<FormGroupExample />} />  
             <Route path='/dashboard' element={<DashBoard />} />   
             <Route path='/register' element={<Regester />} />   
             <Route path='/products' element={<Products />} />   
             <Route path='/cart' element={<Cart />} />   
             <Route path='/cart/:id' element={<Cart />} />   
             <Route path="/productdetails/:id" element={<ProductDetails />} />   
             <Route path="/users" element={<Users />} />   
             <Route path="/allcarts" element={<Allcarts />} />   
             <Route path="/SingleCart/:id" element={<SingleCart />} />   
           </Routes>
         </BrowserRouter> 
       </CartProvider>
     </AuthProvider>
    </>
  )
}

export default App
