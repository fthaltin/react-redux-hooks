import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Layout from '../../layouts/layout';
const ProductListContent = () => {
  const defaultArray = [
    {name: 'Asus', price: 100},
    {name: 'Logitech', price: 200},
    {name: 'Casper', price: 200},
    {name: 'Apple', price: 300},
  ]
  const [products, setProduct] = useState(defaultArray)
  return (
    <div>
      List
       <Link to="/">Anasayfaya Dön</Link>

      <ul> 
        {products.map((product, index) => (
          <li key={index}>
            <span className="text-success">{product.name} </span>
            <span className="font-weight-bold">{product.price}</span>
          </li>
        ))
          
        }
      </ul>

      <button onClick={() => setProduct(products.map((item, index) => index === 3 ? {...item, name: 'Dell'}: item)) }> Change </button>

    </div>
  )
}

const ProductList = Layout(ProductListContent);

export default ProductList;