
import React from  'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home/home';
import ProductDetail from './pages/product-detail/detail';
import ProductList from './pages/product-list/product-list';

const App = () => {
  return (
    <Router>
      <Switch>
      <Route path="/products">
        <ProductList />
      </Route>
      <Route path="/product">
        <ProductDetail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
