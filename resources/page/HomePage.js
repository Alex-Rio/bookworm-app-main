import React, {Component} from 'react';
import '../css/app.css';
import Header from '../js/components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
//import OnSale from '../js/components/homepage/OnSale';
import {Container,Col,Row} from 'react-grid-system';
//import FeaturedBooks from '../js/components/homepage/RecommendBooks';
//import ListBooks from '../js/components/listBooks/ListBooks';
import Footer from '../js/components/footer/Footer';
import Onsalepro from '../js/components/homepage/Onsalepro';
import RecommendBooks from "../js/components/homepage/RecommendBooks";
import PopularBooks from "../js/components/homepage/PopularBooks";
import Button from 'react-bootstrap/Button';
import Tabs from "react-bootstrap/tabs"
import Tab from "react-bootstrap/tab"

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
                <h2 className='text-center'>Feature Books</h2>
                <Tabs

                    defaultActiveKey="home"
                    transition={true}
                    id="tab"
                    className="col justify-content-center"
                    >
                        <Tab eventKey="home" title="Home">
                            <RecommendBooks/>
                        </Tab>
                        <Tab eventKey="popular" title="Popular">
                            <PopularBooks/>
                        </Tab>

                </Tabs>
                </Container>
                <Footer/>
            </div>
      );
    }
