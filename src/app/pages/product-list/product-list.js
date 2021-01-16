import React from 'react';
import { Link } from "react-router-dom";
import Layout from '../../layouts/layout';
const ProductListContent = () => {
  return (
    <div>
      List
       <Link to="/">Anasayfaya Dön</Link>
    </div>
  )
}

const ProductList = Layout(ProductListContent);

export default ProductList;