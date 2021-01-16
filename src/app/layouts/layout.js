import React from 'react';
import { Link } from "react-router-dom";
import Footer from './footer/footer';
import Header from './header/header';
import './layout.scss';
const Layout = (Wrapingcomponent) => {
  return () => {
    return (
      <React.Fragment>
        <Header />
        <div id="content">
          <div className="container">
            <Wrapingcomponent />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Layout;