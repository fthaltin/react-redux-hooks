import React from 'react';
import { Link } from "react-router-dom";
import Layout from '../../layouts/layout';
const ProductDetailContent = () => {
  return (
    <div>
      Detail
      <Link to="/">Anasayfaya Dön</Link>
    </div>
  )
}

const ProductDetail = Layout(ProductDetailContent);

export default ProductDetail;