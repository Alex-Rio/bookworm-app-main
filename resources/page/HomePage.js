import React, {Component} from 'react';
import '../css/app.css';
import Header from '../js/components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import OnSale from '../js/components/homepage/OnSale';
import { Container, Row,Col } from 'react-bootstrap';
import FearturedBooks from '../js/components/homepage/FeaturedBooks';
import ListBooks from '../js/components/listBooks/ListBooks';
//import ListBooks from '../js/components/listBooks/ListBooks';
//import BodyHomePage from '../js/components/HomePage/';
class HomePage extends Component {
    render() {
      return(
            <>
                <Header/>
                <Container>
                    <OnSale/>
                </Container>
                <Container>
                <Row>
                    <Col xs={5}>
                    <div div className="mt-5">
                        <FearturedBooks/>
                    </div>
                    </Col>
                </Row>
               <div className='border mt-5 h-100 w-200'>
               <ListBooks></ListBooks>
               </div>
                </Container>
            </>
      );
    }
}

export default HomePage;
