import React from "react";
import {BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Products from "./components/products";
import { GlobalStyle } from "./globalStyles";
import {productsData} from './components/products/data'
import Feature from "./components/feature";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading = 'Choose your favorite' data = {productsData}/>
      <Feature/>
      <Footer/>
    </Router>
  );
}

export default App;
