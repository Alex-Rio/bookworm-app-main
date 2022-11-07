import React, {Component} from 'react';
import '../css/app.css';
import Header from '../js/components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
//import OnSale from '../js/components/homepage/OnSale';
import {Container,Col,Row} from 'react-grid-system';
//import FeaturedBooks from '../js/components/homepage/RecommendBooks';
import ListBooks from '../js/components/listBooks/ListBooks';
import Footer from '../js/components/footer/Footer';
import Onsalepro from '../js/components/homepage/Onsalepro';
import Re
import Button from 'react-bootstrap/Button';

export default function HomePage() {
    // const[listBooks ,setList]=();
      return(
            <div>
                <Header/>
                <Container>
                <div className=' fs-2 '>
                    <h1>On sale</h1>
                </div>
                     <div className='border border-2'>
                     <Onsalepro/>
                     </div>
                </Container>
                <Container>
                <Row className=' row mt-3'>

                 <Tabs title='Recommend'>

                 </Tabs>

                </Row>
               <div className='mt-5 h-100 w-200'>

               </div>
                </Container>
                <Footer/>
            </div>
      );
    }
