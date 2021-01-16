import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Layout from '../../layouts/layout';

import {addToCart, removeFromCart} from '../../store/actions/cart/cart.action';

const HomeContent = (props) => {
  return (
    <div>
      Anasayfa
      <Link to="/products" className="btn btn-success mr-3">Ürün Listesine Git</Link>
      <Link to="/product" className="btn btn-danger">Ürün Detaya Git</Link>

      <h1>{props.basket}</h1>

      <div className="mt-3">
        <button className="btn btn-success" onClick={() => props.increase(10)}> Sepete Ekle</button>
        <button className="btn btn-danger"  onClick={() => props.decrease()}> Sepetten Kaldır</button>
      </div>
    </div>
  )
}

const Home = Layout(HomeContent);

const mapStateToProps = (state) => {
  return {
    basket: state.cart.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: (count) => dispatch(addToCart(count)),
    decrease: () => dispatch(removeFromCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);