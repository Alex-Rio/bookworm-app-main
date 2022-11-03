import React, {Component} from 'react';
import '../css/app.css';
import Header from '../js/components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import OnSale from '../js/components/homepage/OnSale';
import { Container } from 'react-bootstrap';
import FearturedBooks from '../js/components/homepage/FeaturedBooks';
//import ListBooks from '../js/components/listBooks/ListBooks';
//import BodyHomePage from '../js/components/HomePage/';
class HomePage extends Component {
    render() {
      return(
            <>
                <Header/>
                <Container>
                    <OnSale/>
                    <div className='text-center'>
                        <FearturedBooks/>
                    </div>
                </Container>
            </>
      );
    }
}

export default HomePage;
