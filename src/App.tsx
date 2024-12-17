import React from 'react';
import Navbar from './components/Navbar/Navbar.tsx';
import './App.css';
import Product from './containers/Product.tsx';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentProduct, fetchProductDetails } from './redux/productSlice.ts';
import { useEffect } from 'react';

function App() {
  const product = useSelector(selectCurrentProduct);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchProductDetails());
  }, [dispatch]);
  return (
    <div className='App'>
    <Navbar/>
    <Product product ={product}/>
    </div>
  );
}

export default App;
