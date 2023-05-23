import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Favorites from './components/Favorites';
import Home from './components/Home';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import React from 'react';


function App() {
  const [products, setProducts] = useState([])

useEffect (()=>{
  async function axiosData(){

    const productsData = await axios.get('https://64509e77a3221969114dd551.mockapi.io/products')
    setProducts(productsData.data)
  }    
  axiosData();
}, [])

  return (
    <div>

      <Router>
        <Header/>
          <Routes>
            <Route path='/favorites'
              element={
                <Favorites/>
              }
            />

            <Route path='/'
              element={
                <Home
                  item={products}
                />
              }
            />
            
        
          
          </Routes>
      </Router>
      <Footer/>
    </div>  
  );
}

export default App;
