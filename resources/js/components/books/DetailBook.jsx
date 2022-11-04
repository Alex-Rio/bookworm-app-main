import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import imgBook1 from "../../../assets/bookcover/book1.jpg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

export default function DetailBook(){
    return(
            <div className="">
               <CardGroup>
              <Container>
              <Row md={8}>
                    <Col md={3}>
                    <Card border='light' >
                        <Card.Img variant='top' className='style_img' src={imgBook1}/>
                        <Card.Text className='text-end'>
                            <p>By (author) <b>Name Author</b></p>
                        </Card.Text>
                    </Card>
                    </Col>
                   <Col md={7} className="mt-4">
                   <Card border='light' >
                        <Card.Title>
                            <b>Book title</b>
                        </Card.Title>
                        <Card.Text>
                            Some thingsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                        </Card.Text>
                        <Card.Text>
                            Ssihdaiddhad
                            dhiasidhasd
                            ashdiasdhasda
                        </Card.Text>
                        <Card.Text>
                            ashdhiasdjaodja
                            assdhaissdhasi
                            adaisdfhaisdhaskd
                            ashdasudhasusasdas
                        </Card.Text>
                    </Card>
                   </Col>
                </Row>
              </Container>
               </CardGroup>
            </div>
    );
}
