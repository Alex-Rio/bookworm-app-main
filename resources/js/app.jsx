import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../page/HomePage';
//import OnSale from '../js/components/HomePage/OnSale';
import '../css/app.css';
import ShopPage from '../page/ShopPage';
import DetailBook from './components/produce/DetailBook';
import CustomerReview from './components/produce/ListReviews';
import CartBook from './components/produce/CartBook';

import ReviewsCustomer from './components/produce/ReviewPorts';
import DetailPage from '../page/ProductPage';
import AboutPage from '../page/AboutPage';
import BookCard from './components/produce/BookCard';
import ListOther from './components/cartpage/CartProduce';
import CartTotal from './components/cartpage/CartTotals';
import CartPage from '../page/CartPage';
import ListBooks from './components/listBooks/ListBooks';

ReactDOM.render(

  <HomePage/>,


  document.getElementById('root')
);
