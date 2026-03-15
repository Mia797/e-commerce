import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "../pages/Product.css";
import Pagination from 'react-bootstrap/Pagination';
import axios from "axios";
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  async function getproduct() {
    const res = await axios.get("https://dummyjson.com/products");
    console.log(res.data.products);
    setProducts(res.data.products);
  }

  useEffect(() => {
    getproduct();
  }, []);

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(filter.toLowerCase());
    const matchesMin = minPrice === "" || product.price >= parseFloat(minPrice);
    const matchesMax = maxPrice === "" || product.price <= parseFloat(maxPrice);
    return matchesSearch && matchesMin && matchesMax;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const handlePageChange = (number) => {
    setCurrentPage(number);
  };

  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <h1>Products</h1>
      <div className='filters-container'>
        <h3>Search:</h3>
        <input
          type="text"
          placeholder="Search products..."
          value={filter}
          onChange={(e) => { setFilter(e.target.value); setCurrentPage(1); }}
          style={{ marginRight: "10px", padding: "8px", width: "200px" }}
        />
        <h3>Filter:</h3>
        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={(e) => { setMinPrice(e.target.value); setCurrentPage(1); }}
          style={{ marginRight: "10px", padding: "8px", width: "100px" }}
        />
        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => { setMaxPrice(e.target.value); setCurrentPage(1); }}
          style={{ padding: "8px", width: "100px" }}
        />
      </div>

      <div className='products-container'>
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="product-img"
            />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <button className="btn-gradient-sparkle" onClick={() => handleAddToCart(product)}>
              Add to cart
            </button>
            <button className="btn-gradient-sparkle">
              <Link to={`/productdetails/${product.id}`} style={{ textDecoration: "none", color: 'whitesmoke' }}>Details</Link>
            </button>
          </div>
        ))}
      </div>
      <Pagination>{items}</Pagination>
    </>
  );
}
export default Products
