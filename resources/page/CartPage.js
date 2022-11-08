import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import CartProduce from '../js/components/cartpage/CartProduce';
import CartTotal from '../js/components/cartpage/CartTotals';
import Footer from '../js/components/footer/Footer';
import Header from '../js/components/header/header';
 export default function CartPage(){

    return(
        <>
        <Container>
            <Header/>
            <div className=' border-2 border-bottom pb-4'>
                 <b> Your Cart: <b> number </b> items</b>
            </div>
            <div className='row mt-5 '>
                <div className='col-8 border border-3 border-bottom-0'>
                <CartProduce/>
                </div>
                <div className='col-4'>
                <CartTotal/>
                </div>
            </div>
        </Container>
    
        </>

    )
 }
