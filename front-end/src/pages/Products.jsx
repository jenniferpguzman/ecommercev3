import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../stylesheets/Product.css';
import '../stylesheets/Navbar.css'
import '../stylesheets/Footer.css'
import ProductCard from '../Components/Productcard.jsx'

function Products() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);

  // Fetch products from the backend API when the component mounts
  useEffect(() => {
    Axios.get('http://localhost:3000/products')
      .then((response) => {
        setProduct(response.data);  // Store all products from API
        setCategory(Array.isArray(response.data) ? response.data : []);  // Initially set the filtered category to all products
      })
      .catch((err) => console.log(err));
  }, []);

  // Handle category filter
  const handleBtns = (e) => {
    let word = e.target.value;

    // Filter products based on category
    if (word === "All") {
      setCategory(product); // Show all products
    } else {
      // Ensure we compare against the correct category field (case-sensitive or consistent naming)
      const filtered = product.filter(
        (item) => item.category.toLowerCase() === word.toLowerCase() // Match category (case-insensitive)
      );
      setCategory(filtered); // Update filtered products
    }
  };

  // Sorting functions
  const setLowtoHigh = () => {
    const sortedProducts = [...category].sort((a, b) => a.price - b.price); // Sort by price (low to high)
    setCategory(sortedProducts); // Update with sorted products
  };

  const setHighToLow = () => {
    const reverseSortedProducts = [...category].sort((a, b) => b.price - a.price); // Sort by price (high to low)
    setCategory(reverseSortedProducts); // Update with sorted products
  };

  return (
    <div className="products">
    <div className="filter_buttons">
      <button value="All" onClick={handleBtns}>All</button>
      <button value="Saddle" onClick={handleBtns}>Saddle</button>
      <button value="Crossbody" onClick={handleBtns}>Crossbody</button>
      <button value="Satchel" onClick={handleBtns}>Satchel</button>

      <button onClick={setLowtoHigh}>Price: Low to High</button>
      <button onClick={setHighToLow}>Price: High to Low</button>
    </div>
  <ProductCard category={category}/>
  </div>

  );
}

export default Products;