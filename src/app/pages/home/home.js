import React from 'react';
import { Link } from "react-router-dom";
import Layout from '../../layouts/layout';
const HomeContent = () => {
  return (
    <div>
      Anasayfa
      <Link to="/products" className="btn btn-success mr-3">Ürün Listesine Git</Link>
      <Link to="/product" className="btn btn-danger">Ürün Detaya Git</Link>
    </div>
  )
}

const Home = Layout(HomeContent);

export default Home;