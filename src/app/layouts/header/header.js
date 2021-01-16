import div from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cart/cart.action';
import './header.scss';
const Header = (props) => {
  return (
    <div id="header">
      <div className="container">Header {props.count} 
        <button className="btn btn-success" onClick={() => props.dispatch(addToCart(100))}> Artır </button>
       </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.cart.count,
    test: state.cart.test,
  }
}

export default connect(mapStateToProps)(Header);