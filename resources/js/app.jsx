import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../page/HomePage';
import OnSale from '../js/components/HomePage/OnSale';
import '../css/app.css';
import ShopPage from '../page/ShopPage';
import DetailBook from './components/books/DetailBook';
import CustomerReview from './components/books/CustomerReviews';
import CartBook from './components/books/CartBook';

ReactDOM.render(

  <CartBook/>,


  document.getElementById('root')
);
